---
title: 'Overview'
description: 'Manufactured Home Registry Overview'
---

# Manufactured Home Registry API

---

## Overview

The Manufactured Home Registry (MHR) is a centralised, electronic register where details of manufactured homes can be registered and searched. The MHR API provides a real-time, secure, direct link between your business systems and the MHR. With this API you can submit the following transactions:

- Search for Manufactured Home information

<br>

::ButtonDownloadSpec{href="https://bcregistry-demo.apigee.io/portals/api/sites/bcregistry-demo/liveportal/apis/mhrproxy/download_spec"}
::

<br>
<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**.

---

## View the API

View the definition and select a path to try it out. To submit a request you will need an API key and an account ID, which are obtained as part of completing an [access request](/products/get-started/api-access-request). To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="https://bcregistry-demo.apigee.io/docs/mhrproxy/1/overview" target="_blank">> View the API</a>

---

## A Note on Search Fees

Executing a search is a two step process:

1. Submit search query criteria which on success returns zero, one, or more results as summary information.
1. Submit selected summary results from the first step to obtain details on one or more Registrations.

A service fee is charged for the completion each search request (Search Step 2 in the Quick Reference table).

- A charge is applied for each manufactured home selected.
- An additional charge is applied for each search selection that includes a PPR lien search.

---

## API Quick Reference

<table>
  <tr>
    <th>Endpoint Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>POST /mhr/api/v1/searches</td>
    <td>
      <p>Search Step 1</p>
      <p>Executes a new search query as the first of two steps in the search process. The results are a 
      summary list of one or more matches that after review can be filtered as the second step in the 
      search process. The second step returns MH Registration details. If the search has no matches, 
      the HTTP response code is 201, there are no match results in the response, and totalResultsSize 
      is 0. A service fee is charged for each new search query selection (step 2). The four types of 
      searches are:
      <ul>
        <li>MHR_NUMBER - Search by MANUFACTURED HOME REGISTRATION Number (exact match)</li>
        <li>OWNER_NAME - Search by owner name</li>
        <li>ORGANIZATION_NAME - Search by organization/business name</li>
        <li>SERIAL_NUMBER - Search by serial number</li>
      </ul>
      </p>
      <p>Results are sorted in acending order chronologically by registration createDateTime.</p>
      <p>BC Registries may impose an upper limit on the total number of results returned (TBD). The response includes
        <ul>
          <li>returnedResultsSize - the number of results returned.</li>
          <li>totalResultsSize - the number of matches found in the Registry.</li>
          <li>maxResultsSize - the Registry upper limit on number of results returned.</li>
        </ul><br>If totalResultsSize is greater than returnedResultsSize then you need to refine your search criteria such as with start and end timestamps to include the omitted matches.</p>
    </td>
  </tr>
  <tr>
    <td>PUT /mhr/api/v1/searches/{searchId}</td>
    <td>
      This operation is intended for BCRS application internal use only. It supports application search 
      step 1 autosave of the search selection prior to the execution of search step 2. The added 
      searchSummaryInformation "selected" property indicates if a query result is to be included in the 
      search step 2 details. Note that this operation is a complete replacement of the search step 1 
      results. The response echoes back the request body.
    </td>
  </tr>
  <tr>
    <td>POST /mhr/api/v1/search-results/{searchId}</td>
    <td>
      <p>Search Step 2</p>
      <p>As the second step in the search two-step process, choose from the summary information returned
       in the first step which manufactured home registrations to retrieve detailed information about. 
       Only an mhrNumber needs to be provided to select a manufactured home registration.</p>
       <p>If the request is accepted a report is queued for generation as a final step. There may be a 
       delay before the report is available with a subsequent GET request.</p>
       <p>If requesting a PDF and the number of registrations is greater than 75, the request must include a 
       callbackURL parameter, otherwise a 400 status is returned. If the request is accepted in this scenario 
       the response will return a getReportURL value. When the report is available a notification will be sent to the callbackURL. 
       The body of the notification is a single JSON property getReportURL with the same value as the 
       original response. The caller can then use the GET /mhr/api/v1/search-results/{searchId} endpoint 
       to fetch the PDF.</p>
    </td>
  </tr>
  <tr>
    <td>GET /mhr/api/v1/search-results/{searchId}</td>
    <td>
        After a search has completed, this operation may be used to retrieve the search detail 
        information identified by the searchId path parameter. This operation is permitted for up 
        to 15 days after the initial search.
    </td>
  </tr>
  <tr>
    <td>GET /mhr/api/v1/search-history</td>
    <td>
        <p>Retrieve a list of previous searches performed by the account ID submitting the request. 
        The list items include the search criteria and summary results (search step 1 responses). 
        The default sort order is by search timestamp starting with the most recent. The results 
        size may be limited by number of items or by most recent number of days.</p>
        <p>If no previous search history exists for the account, an empty array is returned.</p>     
    </td>
  </tr>
</table>

---

## Date and Date Time Formats

All date-time property values are stored in the system as UTC timestamps. The API contains no date
formatted properties: all dates (expiry, surrender, debtor birth, and court order) are formatted as date-time.
All API responses represent date-time values in the UTC timezone.

<table>
  <tr>
    <th>Type</th>
    <th>Format</th>
    <th>Examples</th>
  </tr>
  <tr>
    <td>date-time</td>
    <td>YYYY-MM-DDThh:mm:ss[Z|+|-hh:mm]. Either +hh:mm or -hh:mm (the time zone offset) or Z must be supplied. Default Z for Pacific time zone value.</td>
    <td>
      <p>2021-01-14T21:08:32Z<p>
      <p>2021-02-16T07:59:59+00:00</p>
    </td>
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
    <td>2023-05-05</td>
    <td>1.0.0</td>
    <td>Initial version search only</td>
  </tr>

</table>

---

## Additional Resources

- Download a <a href="mhr/apigw-mhr-demo.postman_collection.json.zip" download="apigw-mhr-demo-postman.json" target="_blank">Demo Postman collection</a> to view at least one example of each API path. Provide your own API key and account Id to submit requests and view the responses.
- Download and view the <a href="mhr/mhr-api-property-lengths.csv" target="_blank">API specification property lengths</a> by model/schema name. _Note that the definitions are not final_.

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
