---
title: 'Overview'
description: 'Short-Term Rental Registry API (Platform)'
---

# Short-Term Rental Registry API (Platform)

---

## Overview

The Short-Term Rental Registry contains all of the Hosts, Strata Title Hotels and Motels, and Platforms that can operate in the Province of British Columbia.

<p>
This API is used to validate a permit against the Short-Term Rental Registry.
It is also used to determine the requirements of an address in the Province of BC. For example, an address may be in an area that requires a business permit, or may be entirely exempt from being required to register.
</p>

<br>

::ButtonDownloadSpec{href="/strr/platform.yaml" download="platform.yaml"}
::

<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**.

---

## View the API

View the definition and select a path to try it out. To submit a request you will need an API key and an account ID, which are obtained as part of completing an [access request](/products/get-started/api-access-request). To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="/en-CA/oas/strr" target="_blank">> View the API</a>

---

## Fees

There are no fees to use the API.
<br>
Only registered platforms in good standing can access the API.

---

## API Quick Reference

Please refer to the online spec.

This section will get populated once the release-candidate / sandbox is available.

---

## Date and Date Time Formats

Dates, without a time are considered a fixed date regardless of timezone. For regulatory purposes all dates are acted upon in 'Pacific' time.

All data with times are in UTC, both submitted and retrieved via the API. These can be displayed in local time for end users. For legal purposes the effective and legal dates are in the 'Pacific' timezone.

---

## API Version History

<table>
  <tr>
    <th>Date</th>
    <th>Version</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>2025-01-20</td>
    <td>0.1.0</td>
    <td>Pre-Release</td>
  </tr>
</table>

---

## Additional Resources

- Refer to the <a href="https://www.bcregistry.gov.bc.ca/" target="_blank">BC Registry site</a> to open an account and see all the Registry services.

- Refer to the <a href="https://discourse.onebc.ca/" target="_blank">Discourse Community site</a> to answer any API and service related questions.

---

## Page History

Updates of note to this page are recorded here.

<table>
  <tr>
    <th>Date</th>
    <th>Description</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
