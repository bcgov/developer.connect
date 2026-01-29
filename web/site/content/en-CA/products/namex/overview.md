---
title: 'Overview'
description: 'Name Request Service'
---

# Name Request Service API 

---

## Overview

The Name Request service can be used to submit, track and manage a NameRequest. NameRequests are used to reserve, and get approval, to use a name in the Business Registry.
</p>

<br>

::ButtonDownloadSpec{href="/namex/namex-spec.yaml" download="namex-spec.yaml"}
::

<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**.

---

## View the API

View the definition and select a path to try it out. To submit a request, you will need an API key and an account ID, which you can get by completing the [account setup](/products/get-started/account-setup) process. To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="/en-CA/oas/namex" target="_blank">> View the API</a>

---

## Fees

All fees are specified within the regulations.
<a href="https://www.bcregistry.gov.bc.ca/product-fees" target="_blank">See our fee schedule for details</a>

---

## API Quick Reference
<table>
  <tr>
    <th>Endpoint Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET /namex/api/v1/statistics/</td>
    <td>
      Get NR Processing Time (regular wait time, ​priority wait time, auto approved count).
    </td>
  </tr>  
  <tr>
    <td>POST /namex/api/v1/payments/fees</td>
    <td>
      Get NR Fees you must pay for a specified filing type code in Name Request.
    </td>
  </tr> 
  <tr>
    <td>GET /namex/api/v1/name-analysis/</td>
    <td>
      Analyze a proposed BC business name to identify structural or designation issues.
    </td>
  </tr> 
  <tr>
    <td>GET /namex/api/v1/documents:restricted_words</td>
    <td>
      Scan a proposed BC business name for restricted terms that are prohibited or require written consent.
    </td>
  </tr> 
  <tr>
    <td>GET /namex/api/v1/exact-match</td>
    <td>
      Retrieve BC business names that exactly match the provided name.    
    </td>
  </tr> 
  <tr>
    <td>GET /namex/api/v1/requests/synonymbucket/{name}/{advanced_search}</td>
    <td>
      Retrieve BC business names similar to the provided name to identify potential conflicts.
    </td>
  </tr> 
  <tr>
    <td>POST /namex/api/v1/namerequests/</td>
    <td>
      Creates a new Name Request and returns a provisional L-number in PENDING_PAYMENT status.
    </td>
  </tr> 
  <tr>
    <td>GET /namex/api/v1/namerequests/</td>
    <td>
      Retrieves the details of a Name Request. Requires the NR number along with the applicant's email or phone number.
    </td>
  </tr> 
  <tr>
    <td>PATCH /namex/api/v1/namerequests/{nr_id}/{nr_action}</td>
    <td>
      Performs an action on a Name Request. The nr_action should be one of EDIT, CANCEL, REQUEST_REFUND.
    </td>
  </tr> 
  <tr>
    <td>GET /namex/api/v1/namerequests/{nr_id}/result</td>
    <td>
      Returns the Name Request results report as a PDF file. The Name Request must be in an approved, consumed, expired, or rejected state.
    </td>
  </tr> 
  <tr>
    <td>POST /namex/api/v1/payments/{nr_id}/{payment_action}</td>
    <td>
      Creates a payment invoice for the Name Request. The payment_action should be one of CREATE, UPGRADE, REAPPLY, RESUBMIT.
    </td>
  </tr> 
  <tr>
    <td>GET /namex/api/v1/payments/{nr_id}</td>
    <td>
      Retrieves all payment records from SBC Pay that are linked to the specified Name Request.
    </td>
  </tr> 
  <tr>
    <td>POST /namex/api/v1/payments/{payment_id}/receipt</td>
    <td>
      Generate a PDF receipt for the specified payment.
    </td>
  </tr>   
</table>

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
    <td>2018-06-25</td>
    <td>0.0.0</td>
    <td>Namex Pre-Refactor Release</td>
  </tr>
  <tr>
    <td>2019-02-04</td>
    <td>1.0.4</td>
    <td>UI Focus Release</td>
  </tr>
  <tr>
    <td>2021-07-29</td>
    <td>1.1.0</td>
    <td>Name Request Go-Live Enhancements Release</td>
  </tr>
  <tr>
    <td>2025-02-12</td>
    <td>1.2.21</td>
    <td>NRO Decommision Release</td>
  </tr>
  <tr>
    <td>2025-04-09</td>
    <td>1.2.34</td>
    <td>GCP Migration Release</td>
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
  <tr>
    <td>2025-07-15</td>
    <td>Added Namex Api Spec</td>
  </tr>
  <tr>
    <td>2026-01-18</td>
    <td>Validated Names API Documentation</td>
  </tr>
</table>
