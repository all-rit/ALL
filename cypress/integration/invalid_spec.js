describe('Testing error 404', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL"));
  });
  
  it('tests invalid page', () => {
    cy.visit(Cypress.env("CLIENT_URL") + '/qwerty');
    cy.get();
  });
  
})