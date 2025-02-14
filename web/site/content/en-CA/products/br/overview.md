---
title: 'Overview'
description: 'Business Registry API'
---

# Business Registry API

---

## Overview

The Business Registry is a centralised, electronic register of business of various legal types operating in the Province of BC. The Business API provides a real-time, secure, direct link between
your business systems and the Business Registry.

<br>

::ButtonDownloadSpec{href="/br/business-spec.yaml" download="business-spec.yaml"}
::

<br>
<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**.

---

## View the API

View the definition and select a path to try it out. To submit a request you will need an API key and an account ID, which are obtained as part of completing an [access request](/products/get-started/account-setup). To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="/en-CA/oas/br" target="_blank">> View the API</a>

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
    <td>2025-01-22</td>
    <td>2.136.0</td>
    <td>BCA-Corps Directed Launch</td>
  </tr>
</table>

---

## Sandbox Limitations
- Future Effective Filings
- Email Notification
- Integrations with External Partners (ex: CRA)

---

## Additional Resources

- Refer to the <a href="https://www2.gov.bc.ca/" target="_blank">BC Gov site</a> to answer any business rule related questions including <a href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/businesses-incorporated-companies/forms-corporate-registry" target="_blank">Fees</a>

- Download a <a href="/br/apigw-business-api-demo.postman_collection.json.zip" download="apigw-business-demo-postman.json.zip" target="_blank">Demo Postman collection</a> to view at least one example of each API path. Provide your own API key and account Id to submit requests and view the responses.

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
