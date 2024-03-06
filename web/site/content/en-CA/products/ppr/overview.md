---
title: 'Overview'
description: 'Personal Property Registry Overview'
---

# Personal Property Registry API

---

## Overview

The Personal Property Registry (PPR) is a centralised, electronic register where details of security interests in personal property can be registered and searched. The PPR API provides a real-time, secure, direct link between your business systems and the PPR.

With this API you can submit the following transactions:

- Search for Personal Property information
- Register an interest or lien as a Financing Statement
- Amend a Financing Statement
- Renew a Financing Statement
- Discharge a Financing Statement

<br>

::ButtonDownloadSpec{href="https://bcregistry-demo.apigee.io/portals/api/sites/bcregistry-demo/liveportal/apis/pprproxy/download_spec"}
::

<br>
<br>

**Note:** All requests must include a **BC Registries issued API key** and an **Account ID**.

---

## View the API

View the definition and select a path to try it out. To submit a request you will need an API key and an account ID, which are obtained as part of completing an [access request](/products/get-started/api-access-request). To set your session API key, click on the top, right AUTHORIZE button and under API Key Auth enter your key value. Click on AUTHORIZE, then OK.

<a href="https://bcregistry-demo.apigee.io/docs/pprproxy/1/overview" target="_blank">> View the API</a>

---

## A Note on Search Fees

A service fee is charged for each new search request (Search Step 1 in the Quick Reference table).

---

## Large Search Result Reports

If the number of Financing Statements in the requested Search Results (Search Step 2 in the
Quick Reference table) is greater than 75, and the request format is application/pdf, then
the report creation is asynchronous. A callback URL (request parameter "callbackURL") is required.
A notification will be sent to the callback URL indicating that the report is available for retrieval with a
GET request. Here is an example of the notification body:

    {
    	"id": 99999,
    	"getReportURL": "https://bcregistry-sandbox.apigee.net/ppr/api/v1/search-results/99999"
    }

- The callback URL must be encoded.
- If you want the search results in a PDF format, and the number of Financing Statements in the results is greater than 75, then the Search Step 2 request headers Accept property must be application/pdf.
- Depending on the size of the results, the report may take up to 20 minutes to generate.

---

## Reports for Registrations With a Large Data Size

Both Verification Statement Registrations and Search Results reports may contain individual registrations
with a large amount of data - typically hundreds of serial collateral - resulting in reports that
are hundreds of pages in length. Such reports take too long to generate as a real time request. As part of completing a
registration or completing Search Step 2, the API queues the report request and returns a JSON response with a getReportURL property.
When the report is available it can be downloaded from the PPR application Registrations or Searches tables,
or with a subsequent API GET request. In the latter case, if the queued report is not yet available the API returns a 400 response.

---

## API Quick Reference

<table>
  <tr>
    <th>Endpoint Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/drafts</td>
    <td>
      Get a list of existing drafts for your account. Use the optional
      "type" query parameter to filter by draft type. If no parameter is
      included in the request all existing drafts are returned in the set of
      results.
    </td>
  </tr>
  <tr>
    <td>POST /ppr/api/v1/drafts</td>
    <td>
      Create a new draft of a Financing Statement or an Amendment/Court Order
      Statement.
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/drafts/{document_id}</td>
    <td>
      Retrieve an existing draft of the Financing Statement or Amendment/Court Order
      Statement that matches the document ID.
    </td>
  </tr>
  <tr>
    <td>PUT /ppr/api/v1/drafts/{document_id}</td>
    <td>
      Update an existing draft of a Financing Statement or Amendment/Court Order
      Statement.
    </td>
  </tr>
  <tr>
    <td>DELETE /ppr/api/v1/drafts/{document_id}</td>
    <td>
      Delete an existing draft of the Financing Statement or Amendment/Court Order
      Statement that matches the document ID.
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements</td>
    <td>
        Retrieve a list of Financing Statements created by the account ID 
        submitting the request. As part of the search criteria, include a 
        debtor name as request query parameters. BC Registries may apply 
        restrictions still to be determined on what is included in the results. 
        The startDateTime, endDateTime, and registrationType parameters may be 
        used to refine the results. There is a limit on the number of items 
        returned in the results (to be determined). The list of summary 
        information includes the following properties:
        <ul>
            <li>baseRegistrationNumber</li>
            <li>registrationType</li>
            <li>createDateTime</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements/registrations</td>
    <td>
      <p>Retrieve a list of all Financing Statement registrations either created or added 
      by the account ID submitting the request, sorted by most recent first.</p>
      <p>If no Financing Statements exist for the account and empty array is returned.</p>
      <p>Financing Statements that have expired or been discharged more than 30 days prior to 
      the submission of the request, and registrations associated with such historical 
      Financing Statements, are excluded from the results.</p>
      <p>Use the Add or Delete Account Registrations endpoints to add or remove registrations 
      created with another account.</p>
   </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements/registrations/{registration_num}</td>
    <td>
      Used by the PPR application to review summary information about a Financing Statement 
      created by another account before adding it to the account list of registrations.
    </td>
  </tr>
  <tr>
    <td>POST /ppr/api/v1/financing-statements/registrations/{registration_num}</td>
    <td>
      <p>Created for use by the PPR Application. Use this endpoint to add a Financing 
      Statement created by another account to the List account Registrations results.</p>
      <p>Attempting to add a duplicate registration number returns a 409 Conflict status.</p>
      <p>Attempting to add registration number with restricted access returns a 403 
      Forbidden status.</p>
      <p>A registration number which does not exist, has expired, or has been discharged 
      returns a 404 Not Found status.</p>
    </td>
  </tr>
  <tr>
    <td>DELETE /ppr/api/v1/financing-statements/registrations/{registration_num}</td>
    <td>
      Remove a previously added Financing Statement registration created by another account 
      from the list of registrations associated with the user account.
    </td>
  </tr>
  <tr>
    <td>POST /ppr/api/v1/financing-statements</td>
    <td>Create (register) a new Financing Statement.</td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements/{registration_num}</td>
    <td>
        Retrieve by registration number a Financing Statement. The  account 
        ID used to submit the request must match the account ID used to create 
        the Financing Statement identified by the registration number.
    </td>
  </tr>
  <tr>
    <td>POST /ppr/api/v1/financing-statements/{registration_num}/amendments</td>
    <td>
      Register a Financing Statement amendment or court order change as an
      Amendment Statement to add or delete:
      <ul>
        <li>Secured parties</li>
        <li>Debtors</li>
        <li>Vehicles</li>
        <li>General collateral</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements/{registration_num}/amendments/{amendment_registration_num}</td>
    <td>
      <p>Retrieve by amendment registration number an Amendment Statement. The account ID used to 
      submit the request must match the account ID used to create the Amendment Statement 
      identified by the amendment registration number. The Amendment registration must 
      be a change to the Financing Statement identified by the registration_num path parameter.</p>  
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements/{registration_num}/changes/{change_registration_num}</td>
    <td>
      <p>Retrieve by change registration number a Change Statement. The account ID used to 
      submit the request must match the account ID used to create the Change Statement 
      identified by the change registration number. The Change registration must be a 
      change to the Financing Statement identified by the registration_num path parameter.</p>
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements/{registration_num}/debtorNames</td>
    <td>
      <p>Retrieve by registration number a list of all debtor names associated with a 
         Financing Statement. The  account ID used to submit the request must match 
         the account ID used to create the Financing Statement identified by the 
         registration number. All existing debtor names are included in the response, 
         including those for removed debtors. The list of names is sorted by the order 
         they were submitted.
       <p>
       <p>Background: this endpoint is used by the PPR application to help the user 
       identify a debtor for an amendment, change, discharge, or renewal registration. 
       This extra piece of information helps prevent mistakes creating  registrations 
       on the wrong Financing Statement.</p>
   </td>
  </tr>
  <tr>
    <td>POST /ppr/api/v1/financing-statements/{registration_num}/discharges</td>
    <td>
      Discharge a Financing Statement to remove a lien or encumbrance. Once 
      discharged, a Financing Statement becomes historical and will not show 
      up in search results.
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements/{registration_num}/discharges/{discharge_registration_num}</td>
    <td>
      <p>Retrieve by discharge registration number a Discharge Statement. The account 
      ID used to submit the request must match the account ID used to create the Discharge 
      Statement identified by the discharge registration number. The Discharge registration 
      must be a change to the Financing Statement identified by the registration_num path 
      parameter.</p>
    </td>
  </tr>
  <tr>
    <td>POST /ppr/api/v1/financing-statements/{registration_num}/renewals</td>
    <td>
      <p>Renew a Financing Statement by extending the expiry date. Court order information 
         is required and should only be included when submitting a renewal for a Repairer's 
         Lien (RL) registration type. The Court Order Date must be between the base 
         registration creation date and the request date. Specify lifeYears or lifeInfinite 
         for all registration types except RL. Registrations with an infinite life cannot 
         be renewed.
      </p>
      <p>A Debtor name is required as an additional check on the Financing Statement 
         registration number.
      </p>
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/financing-statements/{registration_num}/renewals/{renewal_registration_num}</td>
    <td>
      <p>Retrieve by renewal registration number a Renewal Statement. The account ID used to 
      submit the request must match the account ID used to create the Renewal Statement 
      identified by the renewal registration number. The Renewal registration must be a 
      change to the Financing Statement identified by the registration_num path parameter.</p>
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/party-codes/{code}</td>
    <td>
      Find the name and address details by client code for a previously created re-usable
      Registering Party or Secured Party.
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/party-codes/accounts</td>
    <td>
      Intended only to be used by the PPR application. Look up Secured Party codes associated 
      with a user when creating or changing a Crown Charge Financing Statement registration. 
      For Crown Charge registrations, the Secured Party must be a code selected from a restricted 
      set. The response is an empty array if no matches are found.
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/party-codes/head-offices/{nameOrCode}</td>
    <td>
      <p>Use this endpoint to look up a party code for a registration Secured Party. You can 
      then provide a party code instead of a name and address when submitting registration 
      requests. This endpoint finds the party code, name and address details of all the 
      branches that belong to a head office. Search either by business name or by head 
      office code. A party code is a concatenation of head office and branch codes. 
      A head office code may be between 0 (or 0000) and 9999.</p>
      <p>If the nameOrCode path parameter value is three or more characters long and all 
      digits, the query is by code; otherwise it is by head office business name.</p>
      <p>The response is an empty array if no matches are found.</p>
    </td>
  </tr>
  <tr>
    <td>POST /ppr/api/v1/searches</td>
    <td>
      <p>Search Step 1</p>
      Executes a new search query as the first of two steps in the search process. 
      The results are a summary list of one or more matches that after review 
      can be filtered as the second step in the search process. The second step 
      returns Financing Statement details. The optional startDateTime and 
      endDateTime may be used to narrow the search. If the search returns no 
      results, the HTTP response code is 422. A service fee is charged for each 
      new search query. The six types of searches are:
        <ul>
            <li>REGISTRATION_NUMBER - Search by Financing Statement, Amendment Statement, or Change Statement Registration Number (exact match)</li>
            <li>MHR_NUMBER - Search by Manufactured Home Registration Number (exact match)</li>
            <li>BUSINESS_DEBTOR - Search by business debtor name</li>
            <li>INDIVIDUAL_DEBTOR - Search by individual debtor name</li>
            <li>SERIAL_NUMBER - Search by vehicle collateral serial number</li>
            <li>AIRCRAFT_DOT - Search by aircraft airframe DOT number for aircraft registered in Canada</li>
        </ul> 
        "SIMILAR" matches are sorted in acending order chronologically be Financing Statement createDateTime.
        BC Registries may impose an upper limit on the total number of results returned (TBD). The response includes 
        <ul>
            <li>returnedResultsSize - the number of results returned.</li>
            <li>totalResultsSize - the number of matches found in the Registry.</li>
            <li>maxResultsSize - the Registry upper limit on number of results returned.</li>
        </ul> 
        If totalResultsSize is greater than returnedResultsSize then you need to
        refine your search criteria such as with start and end timestamps to 
        include the omitted matches.    
    </td>
  </tr>
  <tr>
    <td>PUT /ppr/api/v1/searches/{searchId}</td>
    <td>
      This operation is intended for BCRS application internal use only. It supports 
      application search step 1 autosave of the search selection prior to the execution 
      of search step 2. The added searchSummaryInformation "selected" property indicates 
      if a query result is to be included in the search step 2 details. Note that this 
      operation is a complete replacement of the search step 1 results. The response 
      echoes back the request body..
    </td>
  </tr>
  <tr>
    <td>POST /ppr/api/v1/search-results/{searchId}</td>
    <td>
      <p>Search Step 2</p>
      As the second step in the search two-step process, choose from the summary information 
      returned in the first step which Financing Statements to retrieve detailed information 
      about. Only matchType and baseRegistrationNumber need to be provided to select a Financing 
      Statement. The detail information includes all Change Statement, Amendment Statement, 
      Renewal, and Discharge Statement information in chronological order. Exact match Financing 
      Statements are automatically included in the results. If the request similar match "selected" property 
      is either absent or set to true the associated Financing Statement is included in the 
      response.
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/search-results/{searchId}</td>
    <td>
        After a search has completed, this operation may be used to retrieve the 
        search detail information identified by the searchId path parameter.
    </td>
  </tr>
  <tr>
    <td>GET /ppr/api/v1/search-history</td>
    <td>
        Retrieve a list of previous searches performed by the account ID submitting the 
        request. The list items include the search criteria and summary results (search 
        step 1 responses). The default sort order is by search timestamp starting with the 
        most recent. The results size may be limited by number of items or by number of 
        days in the past (for example, within the last 7 days).     
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
    <td>2020-08-28</td>
    <td>1.0.0</td>
    <td>Initial version</td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td>Updates from implementation.</td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td>Change Date data type to DateTime for expiryDate, surrenderDate, debtor birthDate, and court order orderDate</td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td><p>Search add endpoint to get account search history:</p> 
        <p>1. Add GET /ppr/api/v1/search-history</p>
        <p>2. Update schema searchQueryResults: add exactResultsSize and selectedResultsSize.</p>
    </td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td><p>Search update search results detail:</p> 
        <p>1. Replace PUT /ppr/api/v1/searches/{searchId} with POST /ppr/api/v1/search-results/{searchId}.</p>
        <p>2. Add support to format response data as a PDF: allow request header Accept=application/pdf.</p>
        <p>3. Update response to include summary information with schema searchDetailResults.</p>
        <p>4. Update financingStatementWithChanges schema: add matchType property.</p>
        <p>5. Add GET /ppr/api/v1/searches/{searchId} to fetch previous search detail results (for a limited time).</p>
    </td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td><p>Search change POST /ppr/api/v1/searches no results response:</p> 
        <p>Change the HTTP status response code to 201 (success) when no matches are found for the search criteria. The response does not include any results and totalResultsSize is 0.</p>
    </td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td><p>Search add endpoint to support UI autosave of search selection:</p> 
        <p>1. Update PUT /ppr/api/v1/searches/{searchId}</p>
        <p>2. Update searchSummaryInformation schema: add "selected" property.</p>        
    </td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td><p>Update Financing Statement schema: add registrationDescription, registrationAct, statusType, dischargeDateTime, courtOrderInformation.</p>
    </td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td><p>Update Renewal Statement schema: add lifeYears.</p>
    </td>
  </tr>
  <tr>
    <td>2021-03-30</td>
    <td>1.0.0</td>
    <td><p>Add GET, PATCH /ppr/api/v1/user-profile for maintaining user UI preferences.</p>
    </td>
  </tr>
  <tr>
    <td>2021-04-09</td>
    <td>1.0.0</td>
    <td><p>API Specification updates from search implementation.</p></td>
  </tr>
  <tr>
    <td>2021-05-13</td>
    <td>1.0.0</td>
    <td>
      <p>Add GET /ppr/api/v1/party-codes/head-offices/{nameOrCode}</p>
      <p>Update examples.</p>
    </td>
  </tr>
  <tr>
    <td>2021-07-09</td>
    <td>1.0.0</td>
    <td><p>Update search registration types add TA TG TM</p>
      <p>Update GET account financing statement list.</p>
      <p>New GET individual registration JSON and PDF:</p>
      <p>GET /ppr/api/v1/financing-statements/{registration_num}/amendments/{amendment_registration_num}</p>
      <p>GET /ppr/api/v1/financing-statements/{registration_num}/changes/{change_registration_num}</p>
      <p>GET /ppr/api/v1/financing-statements/{registration_num}/discharges/{discharge_registration_num}</p>
      <p>GET /ppr/api/v1/financing-statements/{registration_num}/renewals/{renewal_registration_num}</p>
      <p>New GET account registrations list. /ppr/api/v1/financing-statements/registrations</p>
      <p>Update examples.</p></td>
  </tr>
  <tr>
    <td>2021-08-20</td>
    <td>1.0.0</td>
    <td><p>Add GET /api/v1/financing-statements/{registration_num}/debtorNames.</p>
      <p>Replace baseDebtor and baseDebtorName with debtorName.</p>
      <p>Add financingStatement.otherTypeDescription.</p></td>
  </tr>
  <tr>
    <td>2021-09-24</td>
    <td>1.0.0</td>
    <td><p>Add POST /ppr/api/v1/financing-statements/registrations/{registration_num}</p>
      <p>Add DELETE /ppr/api/v1/financing-statements/registrations/{registration_num}</p>
      <p>Add GET /ppr/api/v1/party-codes/accounts</p>
      <p>Update change registration responses to return a verification statement.</p>      
    </td>
  </tr>
  <tr>
    <td>2021-10-12</td>
    <td>1.0.0</td>
    <td>
      <p>Add GET /ppr/api/v1/financing-statements/registrations/{registration_num}</p>
      <p>Remove create Change Registration, create and maintain a draft of a Change Registration.</p>
    </td>
  </tr>
  <tr>
    <td>2021-10-22</td>
    <td>1.0.0</td>
    <td>
      <p>Add registrationsTable and miscellaneousPreferences to the UserProfile schema 
         (expand PPR UI user preference settings).</p>
    </td>
  </tr>
  <tr>
    <td>2021-11-02</td>
    <td>1.0.0</td>
    <td>
      <p>Add authorizationReceived to financingStatement, amendmentStatement, 
         dischargeStatement, and renewalStatement schemas.</p>
    </td>
  </tr>
  <tr>
    <td>2021-11-29</td>
    <td>1.0.0</td>
    <td>
      <p>Remove 4000 character limit on single general collateral description.</p>
      <p>Update vehicle collateral, general collateral and party descriptions.</p> 
      <p>Remove general and vehicle collateral schema anyOf, allOf required conditions to 
         resolve a gateway specification rendering issue.</p>
      <p>Add callbackURL request parameter to the /ppr/api/v1/search-results/{searchId} endpoint.</p>
    </td>
  </tr>
  <tr>
    <td>2021-12-31</td>
    <td>1.0.0</td>
    <td>
      <p>Remove upper limit of 1000 on search results.</p>
      <p>Adjust individual and business debtor search algorithms.</p> 
      <p>Fix search result report requests not working with partial selection data.</p>
    </td>
  </tr>
  <tr>
    <td>2022-01-17</td>
    <td>1.0.0</td>
    <td>
      <p>Specification updates to renewalStatement and searchQuery schema descriptions.</p>
      <p>Fix Infinite Renewal report error.</p>
      <p>Allow secured party, debtor names with single quotation marks, commas.</p>
      <p>Change debtor business name search minimum length to 2 characters.</p> 
      <p>Correct/change search result report Amendment Registration badges/labels: ADDED, AMENDED, DELETED, NAME CHANGED, ADDRESS CHANGED.</p>
      <p>Correct Amendment Registration conditional former name values.</p>
      <p>Correct Financing Statement consolidated view of amended general collateral: only include descriptionAdd and descriptionDelete together when adding 1 item and deleting 1 item.</p>
    </td>
  </tr>
  <tr>
    <td>2022-01-19</td>
    <td>1.0.0</td>
    <td>
      <p>Specification updates to the vehicleCollateral schema definition: remove EV; do not allow AP with new registrations.</p>
    </td>
  </tr>
  <tr>
    <td>2022-02-22</td>
    <td>1.0.0 Patch</td>
    <td>
      <p>Handle search result reports with few results but a large data size (large number of serial collateral).
      Generate the report as part of Search Step 2, return an ACCEPTED response, retrieve the report with  a subsequent GET.
      </p>
    </td>
  </tr>
  <tr>
    <td>2022-03-10</td>
    <td>1.0.0 Patch</td>
    <td>
      <p>
        Add query parameters to GET /ppr/api/v1/financing-statements/registrations to filter results.
        Filter by clientReferenceId, registrationNumber, or startDateTime and endDateTime.
        Use to check the status of specific account registrations.
      </p>
    </td>
  </tr>
  <tr>
    <td>2022-07-14</td>
    <td>1.0.0 Patch</td>
    <td>
      <p>Add crown charge registrations type TO (TOBACCO TAX ACT) and SV (SPECULATION AND VACANCY TAX ACT).</p>
    </td>
  </tr>
  <tr>
    <td>2023-01-05</td>
    <td>1.0.9 Patch</td>
    <td>
      <p>Re-organize large search result report with more than 700 registrations into sub-reports to improve performance.</p>
    </td>
  </tr>
  <tr>
    <td>2023-03-23</td>
    <td>1.1.2 Patch</td>
    <td>
      <p>Add three transition related properties to the financingStatement model.
      Transition registrations are active registrations which were re-registered in the electronic registry.
      If the financing statement is for one of these registrations, three additional properties are conditionally included in a response: transitionDescription, transitionDate, and transitionNumber..</p>
    </td>
  </tr>

</table>

---

## Additional Resources

- Refer to the <a href="https://www2.gov.bc.ca/" target="_blank">BC Gov site</a> to answer any PPR business rule related questions including <a href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/businesses-incorporated-companies/forms-corporate-registry" target="_blank">Fees</a>.
- Download a <a href="ppr/apigw-ppr-demo.postman_collection.json.zip" download="apigw-ppr-demo-postman.json" target="_blank">Demo Postman collection</a> to view at least one example of each API path. Provide your own API key and account Id to submit requests and view the responses.
- Download a <a href="ppr/ppr-api-glosssary.pdf" download="PPR-Glossary-of-Terms.pdf" target="_blank">Glossary of Terms</a>
- View the <a href="ppr/ppr-api-property-lengths.pdf" target="_blank">API specification property lengths</a> by model/schema name. _Note that the definitions are not final_.

---

## Page History

Updates of note to this page are recorded here.

<table>
  <tr>
    <th>Date</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>2020-11-09</td>
    <td>Update Postman collection.</td>
  </tr>
  <tr>
    <td>2021-04-09</td>
    <td>Update Postman collection.</td>
  </tr>
  <tr>
    <td>2021-11-05</td>
    <td>Update Postman collection.</td>
  </tr>
  <tr>
    <td>2021-12-31</td>
    <td>
      <p>Update API specification property lengths.</p>
      <p>Add Large Search Reports section.</p>
    </td>
  </tr>
  <tr>
    <td>2022-03-10</td>
    <td>
      <p>Add section Reports for Registrations With a Large Data Size.</p>
    </td>
  </tr>
  <tr>
    <td>2022-05-02</td>
    <td>
      <p>Update API specification vehicleCollateral model/schema description regarding required properties.</p>
    </td>
  </tr>
</table>
