---
title: 'Overview'
description: 'SBC Connect API'
---

# SBC Connect API

---

## Overview

The SBC Connect API (formerly Auth API) exposes the account, identity, and delegation surfaces behind BC Registries services. The endpoints documented here fall into three groups, each with a specific audience.

| Section | Audience | What it does |
| ------- | -------- | ------------ |
| [Partner Authentication](#partner-authentication) | Ministry / Partner applications | Resolve the user's BC Registries accounts after SSO |
| [Business Affiliations](#business-affiliations) | Internal (Business Registry) | Attach businesses to a BC Registries account |
| [Account Linking](#account-linking) | Vendor / API accounts | Work on a client firm's businesses using a linking key |

<br>

::ButtonDownloadSpec{href="/connect/connect-spec.yaml" download="connect-spec.yaml"}
::

---

## Partner Authentication

Partner apps sell their own products (e.g. birth or death certificates, court services) and use BC Registries as the underlying authentication and payment infrastructure. The runtime flow:

1. **User signs in** through BC Registries SSO. Your app receives the user's bearer token.
2. **Look up the user's BC Registries accounts** by calling `GET /users/orgs` with the bearer:

    ```
    Authorization: Bearer <user token>
    x-apikey: <your app API key>
    ```

    The response lists every account the user belongs to:

    ```
    { "orgs": [ { "id": 574, "name": "Acme Legal", ... }, ... ] }
    ```

3. **Let the user select an account.** Carry that account's `id` as the `Account-Id` header on all subsequent requests. A user may switch accounts mid-session; your app is responsible for updating `Account-Id` when they do.
4. **Call BC Registries services** (typically [Pay](/products/pay/overview)) with the three headers:

    ```
    Account-Id: <selected account id>
    Authorization: Bearer <user token>
    x-apikey: <your app API key>
    ```

    Billing routes to the selected account. Revenue collected on your behalf is settled separately, outside the API surface.

Optionally, call `GET /users/@me` to fetch the signed-in user's profile (name, username, etc.) for display in your app.

---

## Business Affiliations

Endpoints used by **Business Registry** to attach the businesses managed by a BC Registries account. A business can be affiliated to an account using one of three methods:

- Passcode
- Magic link
- Delegation

These endpoints are used to get the affiliations on an account. An `Account-Linking-Key` gives a vendor access to a linked firm's affiliations (see [Account Linking](#account-linking)).

---

## Account Linking

<span style="display:inline-block;background:#e5e7eb;color:#1a5a96;padding:2px 8px;border-radius:4px;font-size:0.85em;vertical-align:middle;">Coming soon</span>

### What it is for

Many businesses are managed by a firm on their behalf. For example, a law firm manages its clients' companies in its BC Registries account. That firm may also use third-party software, such as a legal practice or filing application, to prepare and submit work for those businesses.

Account linking lets that software (the **vendor**) work on the businesses in the firm's BC Registries account without the firm sharing logins or adding the vendor as a team member. The firm approves the connection once, and BC Registries gives the vendor a **linking key**. The vendor sends that key with its API calls to view and file for the firm's businesses.

- The vendor only sees businesses affiliated with the firm's account.
- Fees for filings are charged to the **vendor's** account, not the firm's.
- The firm can see and remove the connection at any time.

### Who is involved

| Who | Example | What they do |
| --- | ------- | ------------ |
| **Vendor** | A legal software company | Registers redirect URLs, starts the link, stores the linking key, and calls BC Registries APIs. |
| **Firm user** | An administrator or coordinator at a law firm | Logs in to BC Registries and approves the link for their firm's account. |
| **BC Registries** | | Creates the linking key and sends the user back to the vendor. |

### One-time setup (vendor)

1. Make sure your vendor account has an API key under **Account Settings → Developer Access**.
2. On the same page, add one or more **Redirect URLs**. These are the pages in your application that the firm user can return to after linking, for example one per environment or application. BC Registries only sends users back to URLs registered here.
    - Query strings are allowed on the return URL, so `https://app.example.com/callback` also accepts `https://app.example.com/callback?ref=123`.
    - A URL ending in `/*` accepts any path under it.

### Linking a firm's account

1. **Vendor:** From your application, send the firm user to the BC Registries account linking page with your vendor account ID and your return URL (URL-encoded):

    ```
    https://<BC Registries account site>/vendor-linking?vendorAccountId=<your vendor account id>&returnUrl=<your registered redirect URL>
    ```

    In sandbox, the account site is `sandbox.account.bcregistry.gov.bc.ca`.

2. **Firm user:** Logs in to BC Registries and selects the account to link. Only accounts where they are an administrator or coordinator are listed. They can also create a new account at this point.
3. **BC Registries:** Creates the linking key and, after a short confirmation screen, sends the user back to your return URL with two parameters added:

    ```
    <your return URL>?linkingKey=<linking key>&accountId=<firm's account id>
    ```

    If the return URL is not registered, or linking fails for another reason, the user sees an error on BC Registries and is not sent back.

4. **Vendor:** Store the `linkingKey` against the firm's `accountId`. Treat it like a password. If you work with several firms, you will have one key per firm.

### Calling APIs on the firm's behalf (vendor)

Add the firm's linking key to your normal API requests:

```
Account-Id: <your vendor account id>
x-apikey: <your API key>
Account-Linking-Key: <linking key for that firm>
```

With these headers you can list the firm's businesses (`GET /orgs/{firm account id}/affiliations`) and use the [Business API](/products/br/overview) for those businesses in the same way as your own. Fees are charged to your vendor account.

### After linking

- **Expiry:** A link is valid for 1 year. The firm's administrators get email reminders 30 days and 7 days before it expires, and can renew it for another year from their account during that time.
- **Removing a link:** The firm's administrators and coordinators can see and remove connections under **Account Settings → Third-Party Connections**. They get an email whenever a connection is added, removed, about to expire, or has expired.
- **Linking again:** If the firm user goes through the linking steps again for your vendor account, a new key replaces the old one.
- **Invalid keys:** Requests with an expired, removed, or replaced key return `403 Forbidden`. Send the firm user through the linking steps again to get a new key.

---

## View the API

View the definition and select a path to try it out. To submit a request you will need an API key and an account ID, which are obtained as part of completing an access request. To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="/en-CA/oas/connect" target="_blank"> View the API</a>



## Date and Date Time Formats

<table>
  <tr>
    <th>Type</th>
    <th>Format</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Date</td>
    <td>YYYY-MM-DD</td>
    <td>2020-05-14</td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>YYYY-MM-DDThh:mm:ss[Z|+hh:mm]. Either +hh:mm (the time zone offset) or Z must be supplied. Default Z for Pacific time zone value.</td>
    <td>2020-05-14T21:08:32Z</td>
  </tr>
</table>

---

## API Version History

<table>
  <tr>
    <th>Date</th>
    <th>Version</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>2026-07-15</td>
    <td>1.0.3</td>
    <td>Added Account Linking sections.</td>
  </tr>
  <tr>
    <td>2025-04-11</td>
    <td>1.0.0</td>
    <td>Initial version</td>
  </tr>
</table>

---

## Additional Resources

Postman collection of these calls is included in the [Business Registry](/products/br/overview) postman collection.

## Page History

Updates of note to this page are recorded here.

<table>
  <tr>
    <th>Date</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>2026-07-15</td>
    <td>Added Account Linking sections.</td>
  </tr>
  <tr>
    <td>2025-04-03</td>
    <td>Initial version</td>
  </tr>
</table>
