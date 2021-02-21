// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// -- Clicks the Google sign-in button and ensures authentication  --
Cypress.Commands.add('testLogin', () => {
  cy.get('div[class*="google__button').should('be.visible')
  // after clicking, test authentication using our own endpoints
  cy.get('div[class*="google__button').click();
});

// -- Tests the navigation bar visibility -- 
Cypress.Commands.add('testNavigationBar', (labId) => {
  // Desktop
  cy.viewport('macbook-15')
  cy.wait(200)
  cy.get('nav').contains('About').click();
  cy.get('nav').contains('Reading').click();
  cy.get('nav').contains('Game').click();
  cy.get('nav').contains('Video').click();
  cy.get('nav').contains('Quiz').click();
  
  // Tablet
  cy.viewport('ipad-2');
  cy.wait(200);
  cy.get('button[class*="navbar-toggler').click();
  cy.get('nav').contains('About').click();
  cy.get('nav').contains('Reading').click();
  cy.get('nav').contains('Game').click();
  cy.get('nav').contains('Video').click();
  cy.get('nav').contains('Quiz').click();
});

Cypress.Commands.add('testFooterNavigation', () => {
  cy.get();
});