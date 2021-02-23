describe('Testing Lab 1', () => {
  beforeEach(() => {
    cy.fixture('data.json').as('data');
    cy.visit('http://localhost:3000/Lab1/');
  });
  
  it('tests navigation bar', () => {
    cy.testNavigationBar();
  });
  
  it('tests footer navigation', () => {
    cy.testNextPage();
    cy.visit('http://localhost:3000/Lab1/Quiz/');
    cy.testPreviousPage();
  });

  it('tests login', () => {
    // cy.testLogin();
  });
  
})