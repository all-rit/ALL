describe('Testing Lab 1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Lab1/');
  });
  
  it('tests navigation', () => {
    cy.testNavigationBar();
  });

  it('tests login', () => {
    // cy.testLogin();
  });
  
})