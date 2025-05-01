---
title: 'Overview'
description: 'SBC Connect API'
---

# SBC Connect API

---

## Overview

SBC Connect API (former Auth API) is a centralized authorization and authentication system designed to manage secure access across all partner applications. It ensures seamless user verification, enforces access controls, and protects sensitive resources through robust authentication mechanisms. By integrating with SBC Connect, partner apps can leverage a unified security framework, simplifying user management while maintaining compliance and security best practices.

This specification focuses on creating business affiliations:
- By passcode
- By magic link
- By delegation


More to be added in the future.
<br>

::ButtonDownloadSpec{href="/connect/connect-spec.yaml" download="connect-spec.yaml"}
::

<br>
<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**.

---

## View the API

View the definition and select a path to try it out. To submit a request you will need an API key and an account ID, which are obtained as part of completing an [access request](/products/get-started/api-access-request). To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

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
