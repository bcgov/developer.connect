# Contributing to `developer.connect`

First off, thank you for taking the time to contribute! ❤️

> **⚠️ IMPORTANT: Central Governance**
> 
> We govern all our product and documentation repositories centrally. Before proceeding, you **must** read and understand our **[Organization Contributing Guidelines](https://github.com/bcgov/connect/blob/main/CONTRIBUTING.md)**.
> 
> The central guidelines cover our mandatory Issue-first engagement model, the Fork-Clone-Branch-PR workflow, Conventional Commits requirements, and the path to maintainership.

This document provides the local environment details, code standards, and architectural philosophy specifically required to work on the `developer.connect` site.

---

## 🚧 Pending Architecture Upgrade Notice

Please note that `developer.connect` is currently undergoing a structural upgrade to align with our latest target web stack.

While the site runs on Nuxt, **it has not yet been upgraded to Nuxt 4 or migrated to Nuxt UI**.

- If you are submitting content, documentation, or Markdown updates, please proceed as normal.
    
- If you are proposing significant UI changes, component refactors, or dependency upgrades, please ensure you have explicitly discussed this in an Issue with the core team first, as these changes may conflict with the pending migration.
    
---
## 📝 Code Style & Architecture Standards

We maintain a strict standard for code quality and user experience across this platform.

### Development Standards

- **Framework:** All code should be written in Vue 3 using the [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html).
    
- **Language:** Ensure all components, composables, utilities, and other code are written in strictly typed **TypeScript**.
    
- **Structure:** Follow the recommended [Nuxt file structure](https://nuxt.com/docs/guide/directory-structure/nuxt).
    
- **Styling:** Use [Tailwind CSS](https://tailwindcss.com/) for styling. Follow the project's established design system and utility classes.
    
- **Documentation:** Document all composables and utilities with JSDoc comments.
    
### Internationalization (i18n)

- Ensure all text content is translated using the i18n framework.
    
- Use the `$t` function for translation strings within your components.
    
- Add new translation keys to the appropriate language files in the locales directory following established naming patterns.
    
### Accessibility & Responsive Design

- **Mobile-First:** Design and implement components with a mobile-first approach using CSS media queries and relative units (%, em, rem).
    
- **WCAG AA Compliance:** Follow accessibility best practices. Use semantic HTML elements, ensure interactive elements are keyboard accessible, and provide appropriate ARIA roles.
    
- **Contrast:** Use color contrast checkers to ensure text meets WCAG AA guidelines.
    
---
## 👥 Code Owners

As a [Code Owner](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners), you play a crucial role in maintaining the quality and structure of your designated section. Your responsibilities include:

1. **Adding Documentation:** Create and update documentation files within your assigned subdirectory to ensure comprehensive coverage.
    
2. **Maintaining Standards:** Ensure that all documentation adheres to the project's style, Docs-as-Code philosophy, and formatting guidelines.
    
3. **Reviewing Contributions:** Review and provide feedback on Pull Requests related to your code areas to maintain accuracy and consistency.
    
---
## 💻 Local Development Setup

The source code for the site is located in the `/web/site` directory.

### Option 1: Devcontainer (Recommended)

This repository is configured with a Devcontainer to ensure a consistent environment.

1. Open this repository in VS Code.
    
2. Ensure the Dev Containers extension is installed.
    
3. Click **"Reopen in Container"** when prompted.
    
### Option 2: Manual Setup (Fallback)

If you are running the environment manually, please navigate to the site directory. You must use `pnpm` to ensure lockfile consistency.

Bash

```
cd web/site

# 1. Install dependencies
pnpm install

# 2. Run the local development server 
pnpm run dev
```

---
## 🧪 Testing and Linting

Before pushing your branch and opening a Pull Request against the upstream repository, ensure all local checks pass.

We use ESLint for formatting and [Vitest](https://vitest.dev/) with [Nuxt Test Utils](https://nuxt.com/docs/getting-started/testing) for unit testing. We aim for high test coverage.

Bash

```
cd web/site

# Run linters
make lint # (or pnpm run lint)

# Run tests
make test # (or pnpm run test)
```

---
## 🐛 Issue Tracking & Branching

If you spot a gap in the documentation, a bug on the site, or want to suggest an enhancement, please ensure an issue exists in this repository's Issue Tracker before starting work. Issues are tracked in the central Entity repo.

When using the GitHub CLI to create your feature branch, use the local switch command:

Bash

```
git switch -c feat/issue#-your-feature-or-doc-name
```
