---
title: 'Overview'
description: 'Pay API Overview'
---

# Pay API

---

## Overview

BC Registries Pay system is used by the BC Registries account services and integrated systems to create payment transactions to pay for the products purchased. This abstracts the integrated systems from the underlying payment integrations and payment methods.

With this API you can submit the following transactions:

- Create payment transactions
- Get payment status
- Delete unpaid payment transactions
- Generate PDF receipt
- Retrieve account statements
- Generate account transactions reports

<br>

::ButtonDownloadSpec{href="https://bcregistry-demo.apigee.io/portals/api/sites/bcregistry-demo/liveportal/apis/payment-proxy/download_spec"}
::

<br>
<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**.

---

## View the API

View the definition and select a path to try it out. To submit a request you will need an API key and an account ID, which are obtained as part of completing an [access request](/products/get-started/api-access-request). To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="https://bcregistry-demo.apigee.io/docs/payment-proxy/1/overview" target="_blank">> View the API</a>

---

## API Quick Reference

<table>
  <tr>
    <th>Endpoint Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET /pay/api/v1/fees/{business_type}/{filing_type}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
  <tr>
    <td>POST /pay/api/v1/payment-requests</td>
    <td>
      Create invoice records. This will create transaction records in payment 
      system based on account settings. Below payment methods are decided based 
      on the account preference.
      <ul>
        <li>Credit Card</li>
        <li>Pre Authorized Debit</li>
        <li>Online Banking</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>GET /pay/api/v1/payment-requests/{invoice_identifier}</td>
    <td>
      Get invoice details by request identifier.
    </td>
  </tr>
  <tr>
    <td>DELETE /pay/api/v1/payment-requests/{invoice_identifier}</td>
    <td>
      Delete an invoice.
    </td>
  </tr>
  <tr>
    <td>GET /pay/api/v1/payment-requests/{invoice_identifier}/receipts</td>
    <td>
      Returns payment receipt details.
    </td>
  </tr>
  <tr>
    <td>POST /pay/api/v1/payment-requests/{invoice_identifier}/receipts</td>
    <td>
        Generates a payment receipt as a PDF.
    </td>
  </tr>
  <tr>
    <td>POST /pay/api/v1/accounts/{accountId}/payments/queries</td>
    <td>Query account transaction reports.</td>
  </tr>
  <tr>
    <td>GET /pay/api/v1/accounts/{accountId}/statements</td>
    <td>
        Get a list of statements generated for the account.
    </td>
  </tr>
  <tr>
    <td>GET /pay/api/v1/accounts/{accountId}/statments/{statementId}</td>
    <td>
      Return the statement as either PDF or CSV.
    </td>
  </tr>
</table>

---

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
    <td>2020-10-06</td>
    <td>1.0.0</td>
    <td>Initial version</td>
  </tr>
</table>

---

## Additional Resources

Download a <a href="pay/apigw-pay-demo.postman_collection.json.zip" download="apigw-ppr-demo-postman.json" target="_blank">Demo Postman collection</a> to view at least one example of each API path. Provide your own API key and account Id to submit requests and view the responses.

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
