---
title: 'Overview'
description: 'Pay API'
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

::ButtonDownloadSpec{href="/pay/payment-spec.yaml" download="payment-spec.yaml"}
::

<br>
<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**. Partner apps that authenticate end users via BC Registries SSO also include the end user's **bearer token** on each request; the Account ID identifies **which** of the user's BC Registries accounts the request is made under (a user may belong to more than one).

---

## View the API

View the definition and select a path to try it out. To submit a request, you will need an API key and an account ID, which you can get by completing the [account setup](/products/get-started/account-setup) process. To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="/en-CA/oas/pay" target="_blank">View the API</a>

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
      system based on account settings. Payment methods are decided based
      on the account preference:
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
    <td>Query the account's transaction history. The request body accepts filters (such as a date range); pagination is controlled with <code>page</code> and <code>limit</code> query parameters. Each result includes the transaction status, payment method, fees, refund amount, and a link to the underlying invoice.</td>
  </tr>
  <tr>
    <td>GET /pay/api/v1/accounts/{accountId}/statements</td>
    <td>Get a list of statements generated for the account.</td>
  </tr>
  <tr>
    <td>GET /pay/api/v1/accounts/{accountId}/statements/{statementId}</td>
    <td>Return the statement as either PDF or CSV.</td>
  </tr>
</table>

---

## Completing a Payment for Partner Apps

Some payment methods require user action at the point of sale. For **partner apps** whose end users pay by **credit card** or **online banking**, the flow is a browser hand-off:

1. **Create the invoice** by calling `POST /pay/api/v1/payment-requests`. The response body includes an `isPaymentActionRequired` flag.
2. **If `isPaymentActionRequired` is `true`**, redirect the end user's browser to the SBC Connect payment page, passing the invoice identifier and a return URL. The SBC Connect payment page hosts the payment flow and interacts with the payment provider on your behalf.
3. **On return**, the user's browser is redirected back to your return URL whether they completed or cancelled the payment. Call `GET /pay/api/v1/payment-requests/{invoice_identifier}` and check the invoice `statusCode`:
    - `COMPLETED`: payment succeeded.
    - `CREATED`: the user did not complete payment. For online banking, this can also mean the payment was submitted but has not yet settled; a subsequent GET will reflect the update.
    - `CANCELLED`: the invoice was cancelled.

API accounts using pre-authorized debit do not require user action. Settlement is batched separately, and `isPaymentActionRequired` will be `false`.

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
</table>
