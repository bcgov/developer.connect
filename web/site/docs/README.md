# Instructions

This document provides guidelines on contributing your documentation smoothly and efficiently. For detailed information on using Nuxt Content, please refer to the [Nuxt Content](https://content.nuxt.com/) documentation. 

Below, you'll find preset styling options designed to simplify your workflow. These include:

- [Page Metadata](#page-metadata)
- [Table of Contents](#table-of-contents)
- [Internationalization](#internationalization)
- [Product Cards](#product-cards)
- [Links](#links)
- [Images and Files](#images-and-files)
- [Buttons](#buttons)

## Page Metadata

Page metadata includes elements such as the page head, title, and description.

<!-- omit in toc -->
### Page Head

The page head is automatically mapped based on the current markdown file structure.

For example:
- `content/en-CA/products/get-started/account-setup.md` will return the page head as:  
  `Get Started - Account Setup - Service BC Connect API Gateway`.
- `content/en-CA/products/br/overview.md` will return the page head as:  
  `BR - Overview - Service BC Connect API Gateway`.

<!-- omit in toc -->
### Page Title and Description

The page title and description are set at the top of each file in YAML format. Keep in mind that the page titles will become the navigation link labels generated for the file.

Example:
```yaml
---
title: 'My Page Title Here'
description: 'A short description about this page.'
---
```

## Table of Contents

A Table of Contents (TOC) will be automatically generated for each page that has at least one sub-heading. TOC links will be generated for level 2 (`##`) and level 3 (`###`) headings only. You may need to refresh the page when adding or removing headings for the Table of Contents to update.


## Internationalization

As part of our plan to modernize and support multiple languages, you will notice that content directories are located within a 'locale' parent directory. In the future, we will be adding more 'locale' directories with the product summaries inside.

Please **do not** include the locale prefix when using internal links in your markdown. The locale prefix will be automatically handled by the ProseA component.

## Product Cards

In each sub-directory, you will find a `card.yml` file. This information is used to populate the product cards on the all-products page. The card will create a link based on the first file found in the relevant sub-directory. See [ordering](https://content.nuxt.com/usage/content-directory#ordering) for how to customize the order of your files.

The `name` and `description` fields are required, while `bulletPoints` and `badge` are optional.

```yaml
name: Manufactured Home Registry
description: In the beta version of the Manufactured Home Registry, you are currently able to
badge: BETA
bulletPoints:
  - Search for, and download reports for, manufactured homes and personal property liens on manufactured homes.
  - Search by owner name, organization, registration, or serial number.

```

## Links

<!-- omit in toc -->
### Internal

Link to other parts of your documentation or anywhere else in the app using relative paths. The locale prefix will be automatically handled.

Example:
```markdown
[some link](/some-link)
```
Will become '/en-CA/some-link'

<!-- omit in toc -->
### External

To create an external link, you must add target="_blank". Otherwise, it will be localized. All external links will be rendered with an 'open-in-new' icon.

Example:
```markdown
[some link](/some-external-link){target="_blank"}
```

<!-- omit in toc -->
### Download

To create a download link from an internal resource in the public directory, add the download attribute and target="_blank". Do not prefix the href with '/' or 'public'. All download links will be rendered with a 'download' icon.

Example:
```markdown
[Demo Postman Collection](mhr/apigw-mhr-demo.postman_collection.json.zip){download="apigw-mhr-demo-postman.json" target="_blank"}
```

## Images and Files

To add images or files to your documentation, place them in the corresponding sub-directory inside the [public](https://github.com/bcgov/developer.connect/tree/main/web/site/public) directory.

Refer to the [Nuxt Content documentation on images](https://content.nuxt.com/usage/markdown#images) for details on referencing images in your markdown.

Example:
```markdown
![my image](/my-subdirectory/image.png)
```

## Buttons

Use the provided `<ButtonDownloadSpec />` component as a download button for external resources.

Example:
```markdown
::ButtonDownloadSpec{href="https://bcregistry-demo.apigee.io/portals/api/sites/bcregistry-demo/liveportal/apis/businessproxy/download_spec"}::
```