# Cypress‑Basic

A beginner‑friendly UI and API test automation framework using **Cypress**, built for modern web applications. Ideal for quick setup, fast test execution, and readable syntax.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation & Setup](#installation--setup)
5. [Project Structure](#project-structure)
6. [Writing Test Cases](#writing-test-cases)
7. [Running Tests](#running-tests)
8. [Reporting](#reporting)
9. [Contributing](#contributing)
10. [License](#license)

---

## Overview

This repository demonstrates the basics of end‑to‑end (E2E) test automation with **Cypress**, covering UI interaction and API validation. Built with simplicity and clarity in mind to help new QA engineers get started.

---

## Features

* Easy setup using Cypress CLI.
* UI testing with automatic DOM waiting.
* API request testing using `cy.request()`.
* Clear folder structure following Cypress best practices.
* Supports both headed (UI) and headless (CLI) execution.

---

## Prerequisites

* **Node.js** v14 or higher
* **npm** or **yarn**
* OS: macOS, Windows, or Linux

---

## Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/zuchalbastian/Cypress-Basic.git
   cd Cypress-Basic
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Run Cypress UI**:

   ```bash
   npx cypress open
   ```

   or run headlessly:

   ```bash
   npx cypress run
   ```

---

## Project Structure

```plaintext
Cypress-Basic/
├── cypress/
│   ├── e2e/                   # E2E test cases (UI/API)
│   ├── fixtures/              # Static test data (JSON)
│   ├── support/
│   │   ├── commands.js        # Custom Cypress commands
│   │   └── e2e.js             # Test setup hooks
├── cypress.config.js         # Main Cypress configuration
├── package.json              # Project metadata & scripts
└── README.md                 # Project documentation
```

---

## Writing Test Cases

Example UI test in `cypress/e2e/login.cy.js`:

```javascript
describe('Login Page', () => {
  it('should show error for invalid credentials', () => {
    cy.visit('https://example.com/login')
    cy.get('#username').type('invalidUser')
    cy.get('#password').type('wrongPass')
    cy.get('form').submit()
    cy.contains('Invalid credentials').should('be.visible')
  })
})
```

Example API test:

```javascript
describe('GET Users API', () => {
  it('should return status 200 and user data', () => {
    cy.request('https://reqres.in/api/users/2')
      .its('status').should('eq', 200)
  })
})
```

---

## Running Tests

* **UI Runner (Interactive)**:

  ```bash
  npx cypress open
  ```
* **CLI Runner (Headless)**:

  ```bash
  npx cypress run
  ```
* **Specific Spec File**:

  ```bash
  npx cypress run --spec "cypress/e2e/login.cy.js"
  ```

---

## Reporting

* Default terminal output for headless runs
* Screenshots and videos saved to:

  * `cypress/screenshots/`
  * `cypress/videos/`
* Extend reporting using [Mochawesome](https://www.npmjs.com/package/mochawesome) or other plugins if needed

---

## Contributing

1. Fork this repo
2. Create your branch: `git checkout -b feature/new-test`
3. Commit changes: `git commit -m 'add new feature'`
4. Push to branch: `git push origin feature/new-test`
5. Open a Pull Request

---

## License

Distributed under the [MIT License](LICENSE)

---

*Created with ❤️ by Zuchal Ari Bastian*
