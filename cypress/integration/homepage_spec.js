describe("Testing homepage", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it("Test lab links", () => {
    cy.get('h4').each(($el) => {
        if ($el !== null) {
          expect($el).to.exist;
          cy.get($el).next().click();
          cy.location('pathname').should('include', '/Lab', { message: ''});
        }
        cy.visit('http://localhost:3000/');
      })
    }
  )
})