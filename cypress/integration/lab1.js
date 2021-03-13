describe('Testing Lab 1', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL") + 'Lab1/');
  });
  
  it('tests navigation bar', () => {
    cy.testLabNavigationBar();
  });
  
  it('tests footer navigation', () => {
    cy.testNextPage();
    cy.visit(Cypress.env("CLIENT_URL") + 'Lab1/Quiz');
    cy.testPreviousPage();
  });

  it('tests login', () => {
    cy.testLogin();
  });
  
})