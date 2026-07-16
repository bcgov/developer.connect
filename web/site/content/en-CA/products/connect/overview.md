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
| [Account Linking](#account-linking) | Vendor / API accounts | Act on a customer account using a shared linking key |

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

These endpoints are consumed internally by Business Registry and are not typically called directly by external vendors or partner apps.

---

## Account Linking <span style="display:inline-block;background:#e5e7eb;color:#1a5a96;padding:2px 8px;border-radius:4px;font-size:0.85em;margin-left:6px;vertical-align:middle;">Coming soon</span>

Account linking lets a **vendor account** (e.g. third-party software for registration submissions) submit data digitally on behalf of a **source account** (e.g. a lawfirm) using a shared **linking key**. The vendor works with the source account's affiliated businesses; billing routes to the vendor's own account.

A link is established through a browser redirect handshake that the vendor initiates. The source account's admin authenticates at BC Registries, picks the account, and confirms the link. On success, BC Registries redirects back to the vendor with the linking key.

#### Prerequisite: return URL allow-list

Before you can use account linking, register the return URL(s) your vendor app will use with BC Registries. The handshake will only redirect back to URLs on the allow-list configured against your vendor API account.

#### The linking handshake

1. **Vendor redirects the user's browser** to the BC Registries account linking page, passing the vendor account id and a return URL as query parameters:

    ```
    GET <BC Registries account linking URL>?vendorAccountId=<vendor account id>&returnUrl=<allow-listed URL>
    ```

2. **The user signs in** to BC Registries and, in the account picker, selects the source account they want to link. A confirmation step names the vendor being linked so the user knows what they are authorizing through the vendor's request.
3. **BC Registries mints and binds the linking key** in a single step, associating the selected source account with the vendor account. There is no separate bind call for the vendor to make.
4. **BC Registries redirects the user's browser** back to the return URL with the source account id and the linking key appended as query parameters:

    ```
    <returnUrl>?accountId=<source account id>&linkingKey=<secret>
    ```

5. **Vendor stores the linking key** against that source account id. When making later API calls for this customer, the vendor looks up the key by source account id.

#### Using the linking key

On subsequent requests to any BC Registries API, include the linking key as a header alongside your normal authentication:

```
Account-Id: <vendor's own account id>
x-apikey: <vendor's API key>
Account-Linking-Key: <the stored key for the target source account>
```

Requests are resolved against the source account's affiliated businesses. All transaction summaries are logged on the vendor account only.

#### Lifecycle

- **One active key per (source, vendor) pair.** Running the handshake again for the same pair supersedes the previous key.
- **Expiration.** Account linking keys expire 365 days after they are issued. The source account administrator can obtain a new linking key at any time by logging in to BC Registries through the vendor system; the new key supersedes the old.
- **Revocation.** Admins and coordinators on the source account can revoke the linking key at any time from their BC Registries account. Subsequent API calls from the vendor using a revoked key return `401 Unauthorized`.

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
