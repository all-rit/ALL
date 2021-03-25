describe('Testing Lab 1', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB1_URL"));
  });
  
  it('tests navigation bar', () => {
    cy.testLabNavigationBar();
  });
  
  it('tests footer navigation', () => {
    cy.testNextPage();
    cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB1_URL") + Cypress.env("QUIZ_URL"));
    cy.testPreviousPage();
  });

  it('tests login', () => {
    cy.testLogin();
  });
  
})