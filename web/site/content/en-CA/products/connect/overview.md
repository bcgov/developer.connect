---
title: 'Overview'
description: 'SBC Connect API'
---

# SBC Connect API

---

## Overview

The SBC Connect API (formerly Auth API) covers the authentication and authorization surface behind BC Registries services.

Two capability areas are documented here:

### Business Affiliations

Endpoints used by **Business Registry** to add the businesses managed by a BC Registries account. A business can be affiliated to an account using one of three methods:
- Passcode
- Magic link
- Delegation

These endpoints are consumed internally by Business Registry and are not typically called directly by external vendors or partner apps.

### Account Linking <span style="display:inline-block;background:#e5e7eb;color:#1a5a96;padding:2px 8px;border-radius:4px;font-size:0.85em;margin-left:6px;vertical-align:middle;">Coming soon</span>

Account linking lets a **vendor account** (e.g. a filing vendor) act on behalf of a **source account** (e.g. a lawfirm) using a shared **linking key**. The vendor works with the source account's affiliated businesses; billing routes to the vendor's own account. The source account issues the key and can revoke it at any time.

#### How it works

1. **The source account generates a linking key.** An admin or coordinator on the source account signs in to their BC Registries account and generates a linking key. The key is shared with the vendor out of band (for example, by email or a direct handoff).
2. **The vendor binds the key** to their own account by calling the bind endpoint. Once bound, the key is active for use.
3. **The vendor uses the key** on subsequent requests to any BC Registries API by sending it as an extra header:

    ```
    Account-Id: <vendor's own account id>
    x-apikey: <vendor's API key>
    Account-Linking-Key: <the shared secret>
    ```

    Requests are resolved against the source account's affiliated businesses, but any invoiceable action is billed to the vendor's account.
4. **The source can revoke the key** at any time. Keys also expire automatically after 365 days.

Only one active key is permitted per (source, vendor) pair. Generating a new key for the same pair supersedes the previous one.
<br>

::ButtonDownloadSpec{href="/connect/connect-spec.yaml" download="connect-spec.yaml"}
::

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
    <td>2025-04-03</td>
    <td>Initial version</td>
  </tr>
</table>
