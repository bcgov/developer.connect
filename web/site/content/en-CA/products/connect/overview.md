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

---

## API Quick Reference

### Common (passcode / magic link / delegation)
<table>
  <tr>
    <th>Endpoint Path</th>
    <th>Description</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>GET /auth/api/v1/orgs/{account_id}/affiliations</td>
    <td>
      Get affiliations
    </td>
    <td>
      Views all affiliation for an org. An affiliation is a relationship between an account (org) and an entity. It determines access to a business from an account (org).
    </td>
  </tr>
  <tr>
  <td>GET /auth/api/v1/entities/{business_identifier}/authentication</td>
  <td>
    Get authentication 
  </td>
  <td>
    Check for authentication, hasValidPassCode (passcode) or contactEmail (magic link) to see if they are available.
  </td>
  </tr>
 
</table>


### By passcode
<table>
  <tr>
    <th>Endpoint Path</th>
    <th>Description</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>POST /auth/api/v1/orgs/{account_id}/affiliations</td>
    <td>
      Create affiliation by passcode
    </td>
    <td>
    For SP (Sole Proprieter) and GP (General Partnership) passcode is organization name or in the format of: last, first middleinitial (middle initial optional).
    For other entity types, it should just be a code.
    </td>
  </tr>
</table>

### By magic link
<table>
  <tr>
    <th>Endpoint Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET /auth/api/v1/orgs/{account_id}/affiliations</td>
    <td>
      Get Affiliations
    </td>
  </tr>
  <tr>
    <td>GET /auth/api/v1/affiliationInvitations</td>
    <td>
      Get Affiliation Invitations (delegation or magic link requests).
    </td>
  </tr>
  <tr>
    <td>PUT /auth/api/v1/entities/{business_identifier}/contacts</td>
    <td>
      Update business contact email (can be used for magic link).
    </td>
  </tr>
  <tr>
    <td>POST /auth/api/v1/affiliationInvitations</td>
    <td>
      Create Magic Link {"fromOrgId":520,"businessIdentifier":"BC1023203","toOrgId":null}
    </td>
  </tr>
    <tr>
    <td>GET /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
    <tr>
    <td>PATCH /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
  <tr>
    <td>DELETE /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
  <tr>
    <td>PUT /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}/token/{affiliation_invitation_token}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
  <tr>
    <td>PATCH /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}/authorization/{authorize_action}</td>
    <td>
    go
    </td>
  </tr>
</table>


### By delegation
<table>
  <tr>
    <th>Endpoint Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET /auth/api/v1/orgs/{account_id}/affiliations</td>
    <td>
      Get Affiliations
    </td>
  </tr>
  <tr>
    <td>GET /auth/api/v1/affiliationInvitations</td>
    <td>
      Get delegation or magic links.
    </td>
  </tr>
  </tr>
    <tr>
    <td>POST /auth/api/v1/affiliationInvitations</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
    <tr>
    <td>GET /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
    <tr>
    <td>PATCH /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
  <tr>
    <td>DELETE /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
  <tr>
    <td>PUT /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}/token/{affiliation_invitation_token}</td>
    <td>
      Get fee details based on the type business type and filing type.
    </td>
  </tr>
  <tr>
    <td>PATCH /auth/api/v1/affiliationInvitations/{affiliation_invitation_id}/authorization/{authorize_action}</td>
    <td>
    go
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
