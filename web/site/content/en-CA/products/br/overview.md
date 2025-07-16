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

View the definition and select a path to try it out. To submit a request, you will need an API key and an account ID, which you can get by completing the [account setup](/products/get-started/account-setup) process. To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="/en-CA/oas/br" target="_blank">> View the API</a>

---

## Fees

All fees are specified within the regulations.
<a href="https://www.bcregistry.gov.bc.ca/product-fees" target="_blank">See our fee schedule for details</a>

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
    <td>Cooperative and Benefit Companies Release</td>
  </tr>
  <tr>
    <td>2022-10-24</td>
    <td>2.62.0</td>
    <td>Firms(SP/GP) Release</td>
  </tr>
  <tr>
    <td>2025-01-22</td>
    <td>2.136.0</td>
    <td>BCA-Corps Directed Release</td>
  </tr>
</table>

---

## Sandbox Limitations
- Email Notification
- Integrations with External Partners (ex: CRA)

---

## Additional Resources

- Refer to the <a href="https://www2.gov.bc.ca/" target="_blank">BC Gov site</a> to answer any business rule related questions including <a href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/businesses-incorporated-companies/forms-corporate-registry" target="_blank">Fees</a>

- Download a <a href="/br/apigw-business-api-demo.postman_collection.zip" download="apigw-business-demo-postman.json.zip" target="_blank">Demo Postman collection</a> to view at least one example of each API path. Provide your own API key and account Id to submit requests and view the responses.

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
    <td>2024-08-22</td>
    <td>Update Postman collection</td>
  </tr>
  <tr>
    <td>2025-01-08</td>
    <td>Update Postman collection</td>
  </tr>
  <tr>
    <td>2025-02-18</td>
    <td>Update request access link, add sandbox limitations</td>
  </tr>
  <tr>
    <td>2025-02-20</td>
    <td>Update API version history, update Sandbox Postman collection</td>
  </tr>
  <tr>
    <td>2025-03-25</td>
    <td>Update Sandbox Postman collection</td>
  </tr>
  <tr>
    <td>2025-03-28</td>
    <td>Update API Specification</td>
  </tr>
  <tr>
    <td>2025-04-04</td>
    <td>Update Sandbox Postman collection</td>
  </tr>
  <tr>
    <td>2025-04-23</td>
    <td>Update Sandbox Postman collection, add affiliation and delegation flow examples</td>
  </tr>
  <tr>
    <td>2025-05-06</td>
    <td>Update Sandbox Postman collection, add future effective filing related requests and notes</td>
  </tr>
  <tr>
    <td>2025-07-16</td>
    <td>Update Sandbox Postman collection, add effective date to AR filing</td>
  </tr>
</table>
