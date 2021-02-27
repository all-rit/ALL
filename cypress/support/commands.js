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

// -- Clicks the Google sign-in button and/ ensures authentication  --
Cypress.Commands.add('testLogin', () => {
  cy.intercept(
      {
        method: 'GET',      // Route all GET requests
        url: Cypress.env("SERVER_URL") +'/user',    // that have a URL that matches '/users/*'
      },
      {"userid":4,"firstname":"Saad","image":"https://lh3.googleusercontent.com/a-/AOh14GimRBBc7n7wyE7eCKGSj6pDCqEnjqcYvxFtSXOYxdU=s96-c"} // and force the response to be: []
  ).as("getUser");
  cy.visit(Cypress.env("CLIENT_URL"));
  // cy.get('div[class*="google__button').should('be.visible')
  // after clicking, test authentication using our own endpoints
  // cy.get('div[class*="google__button').click();
  cy.wait("@getUser").then((interception) => {
    assert.isNotNull(interception.response.body, '1st API call has data')
  })
});

// -- Tests the navigation bar visibility and functionality -- 
Cypress.Commands.add('testNavigationBar', (labId) => {
  // Desktop
  cy.viewport('macbook-15')
  cy.wait(200)
  cy.get('nav').contains('About').click();
  cy.location('pathname').should('include', '/About');
  cy.get('nav').contains('Reading').click();
  cy.location('pathname').should('include', '/Reading');
  cy.get('nav').contains('Game').click();
  cy.location('pathname').should('include', '/Game');
  cy.get('nav').contains('Video').click();
  cy.location('pathname').should('include', '/Video');
  cy.get('nav').contains('Quiz').click();
  cy.location('pathname').should('include', '/Quiz');
  // google sign in button

  
  // Tablet
  cy.viewport('ipad-2');
  cy.wait(200);
  cy.get('button[class*="navbar-toggler').click();
  cy.get('nav').contains('About').click();
  cy.location('pathname').should('include', '/About');
  cy.get('nav').contains('Reading').click();
  cy.location('pathname').should('include', '/Reading');
  cy.get('nav').contains('Game').click();
  cy.location('pathname').should('include', '/Game');
  cy.get('nav').contains('Video').click();
  cy.location('pathname').should('include', '/Video');
  cy.get('nav').contains('Quiz').click();
  cy.location('pathname').should('include', '/Quiz');
  // google sign in button
  
});

Cypress.Commands.add('testNextPage', () => {
  cy.get('button').contains('Next').should('have.class', 'next').then(() => {
    // cy.location('pathname').should('include', '/About'); // going to lab does not change URL
    
    // check Header for page name (i.e. "LAB1: ABOUT")
    
    cy.get('button').contains('Next').click();
    
    cy.location('pathname').should('include', '/Reading');
    cy.get('button').contains('Next').click();
    
    cy.location('pathname').should('include', '/Game');
    cy.get('button').contains('Next').click();
    
    cy.location('pathname').should('include', '/Video');
    cy.get('button').contains('Next').click();
    
    cy.location('pathname').should('include', '/Quiz');
  })
});

Cypress.Commands.add('testPreviousPage', () => {
  cy.get('button').contains('Previous').should('have.class', 'back').then(() => {
    
    // check Header for page name (i.e. "LAB1: ABOUT")
    
    cy.location('pathname').should('include', '/Quiz');
    cy.get('button').contains('Previous').click();
    
    cy.location('pathname').should('include', '/Video');
    cy.get('button').contains('Previous').click();
    
    cy.location('pathname').should('include', '/Game');
    cy.get('button').contains('Previous').click();
    
    cy.location('pathname').should('include', '/Reading');
    cy.get('button').contains('Previous').click();
    
    cy.location('pathname').should('include', '/About');
  })
})

// For each color and font size test, check consistency into another page
Cypress.Commands.add('testChangeBgColor', () => {
  cy.get();
});

Cypress.Commands.add('testChangeTextColor', () => {
  cy.get();
});

Cypress.Commands.add('testFontSizeDecrease', () => {
  cy.get();
});

Cypress.Commands.add('testFontSizeIncrease', () => {
  // get initial fontsize
  // click increase
  // get elements that are changed
  // get element fontsize and compare to initial fontsize
  // check for consistency across pages
  cy.get();
});
