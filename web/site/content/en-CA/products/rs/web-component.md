# Web Component

A framework-agnostic simple to use web component to handle business searches.

---

## Installation

```bash
npm install bcros-search
```
```bash
pnpm add bcros-search
```
```bash
yarn add bcros-search
```

## Basic Usage
```js
<script type="module">
  import "bcros-search";
</script>

<bcros-search></bcros-search>
```

## Properties

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>limit</td>
    <td>Limit the length of the result set.</td>
    <td>number</td>
    <td>false</td>
    <td>10</td>
  </tr>
  <tr>
    <td>legalType</td>
    <td>Filter the search results by the business's legal type.</td>
    <td>string</td>
    <td>false</td>
    <td>all</td>
  </tr>
  <tr>
    <td>status</td>
    <td>Filter the search results by the business's status.</td>
    <td>string</td>
    <td>false</td>
    <td>'active,historical'</td>
  </tr>
  <tr>
    <td>columns</td>
    <td>Customize the displayed columns in the dropdown. 
    The order can also be altered using this property. This does not affect the search result set.</td>
    <td>String</td>
    <td>false</td>
    <td>
      'name,
      identifier,
      bn,
      legalType,
      status,
      goodStanding'
    </td>
  </tr>
  <tr>
    <td>width</td>
    <td>Changes the width of the input and dropdown element.</td>
    <td>string</td>
    <td>false</td>
    <td>'100%'</td>
  </tr>
  <tr>
    <td>visualLabel</td>
    <td>Changes the inputs label text.</td>
    <td>string</td>
    <td>false</td>
    <td>'Business Name, Incorporation/Registration Number or CRA Business Number'</td>
  </tr>
  <tr>
    <td>a11yLabel</td>
    <td>Changes the inputs aria-label text.</td>
    <td>string</td>
    <td>false</td>
    <td>'Start typing to search for ' + visualLabel</td>
  </tr>
  <tr>
    <td>inputHint</td>
    <td>Changes the inputs hint text.</td>
    <td>string</td>
    <td>false</td>
    <td>'Example: "Test Construction Inc.", "BC0000123", "987654321"'</td>
  </tr>
</table>

## Events

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>select</td>
    <td>Emits the selected business's data object.</td>
  </tr>
</table>

## Frameworks

### Vue/Nuxt

See the <a href="https://vuejs.org/guide/extras/web-components.html" target="_blank">Vue Docs</a> for more information on using web components.

#### Vue Config
```js
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags starting with 'bcros-' as custom elements
          isCustomElement: (tag) => tag.startsWith('bcros-')
        }
      }
    })
  ]
}
```

#### Nuxt Config
```js
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // get environment variables from .env file
    xApiKey: '',
    accountID: ''
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          // treat all tags starting with 'bcros-' as custom elements
          isCustomElement: (tag) => tag.startsWith('bcros-')
        }
      }
    }
  }
})
```

#### Usage

```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'

  function handleSelect (event: CustomEvent) {
    console.log(event.detail)
  }
</script>
<template>
  <bcros-search @select="handleSelect"></bcros-search>
</template>
```

### React

React does not require any special config but it does require a wrapper component to render correctly.

```js
// app.js
import { BcrosSearchReact } from 'bcros-search';

export default function App () {
  function handleSelect (event: CustomEvent) {
    console.log(event.detail)
  }

  return (
    <BcrosSearchReact onSelect={handleSelect} />
  )
}
```

## Resources

<a href="https://github.com/daxiom/bcros-search" target="_blank">Github Repo</a>