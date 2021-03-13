describe('Testing error 404', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL"));
  });
  
  it('tests invalid page', () => {
    cy.visit(Cypress.env("CLIENT_URL") + '/qwerty');
    cy.url().should('eq', Cypress.env("CLIENT_URL") + '/qwerty');
    cy.get('h1').should('be.visible').and('have.text', 'Invalid Page');
    cy.get('button').contains('Return Home').click();
    cy.url().should('eq', Cypress.env("CLIENT_URL"));
  });
  
})