---
title: 'Overview'
description: 'Registry Search API'
---

# Registry Search API

---

## Overview

The Registry Search provides a Google like search into the business registry of the Province of BC. The API provides a real-time, secure, direct link between your business systems and the Registry Search service.

<br>

::ButtonDownloadSpec{href="/rs/regsearch-spec.yaml" download="regsearch-spec.yaml"}
::

<br>
<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**.

---

## View the API

View the definition and select a path to try it out. To submit a request, you will need an API key and an account ID, which you can get by completing the [account setup](/products/get-started/account-setup) process. To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="/en-CA/oas/rs" target="_blank">> View the API</a>

---

## Fees

All fees are specified within the regulations. Details of the fees and service charges can be found on the
<a href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/businesses-incorporated-companies/forms-corporate-registry" target="_blank"> business site</a>.

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
    <td>2022-04-08</td>
    <td>0.0.0</td>
    <td>Pre-Release</td>
  </tr>
  <tr>
    <td>2025-06-17</td>
    <td>2.1.0</td>
    <td>Added bulk search endpoint /registry-search/api/v2/search/businesses/bulk. Released to SANDBOX 2025-06-17; released to PROD 2025-06-24.</td>
  </tr>
</table>

---

## Additional Resources

- Refer to the <a href="https://www2.gov.bc.ca/" target="_blank">BC Gov site</a> to answer any business rule related questions including <a href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/businesses-incorporated-companies/forms-corporate-registry" target="_blank">Fees

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
