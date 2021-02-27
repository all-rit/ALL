describe("Testing homepage", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL"));
  });
  
  it("tests Lab 1 link", () => {
    cy.get('h4').eq(0).should('be.visible');
    cy.get('h4').eq(0).children().should('have.attr', 'href', '# ')
  })
  
  it("tests Lab 2 link", () => {
    cy.get('h4').eq(1).should('be.visible');
    cy.get('h4').eq(1).children().should('have.attr', 'href', '# ')
  })
  
  it("tests Lab 3 link", () => {
    cy.get('h4').eq(2).should('be.visible');
    cy.get('h4').eq(2).children().should('have.attr', 'href', '# ')
  })
  
  it("tests Lab 4 link", () => {
    cy.get('h4').eq(3).should('be.visible');
    cy.get('h4').eq(3).children().should('have.attr', 'href', '# ')
  })
  
  // homepage navbar here
  
  // sitemap
  
})