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
  
  // Testing only the frontend for now
  it('tests logout', () => {
    cy.intercept(
      {
        method: 'GET',      // Route all GET requests
        url: Cypress.env("SERVER_URL") +'/user',    // that have a URL that matches '/users/*'
      },
      {"userid":4,"firstname":"Saad","image":"https://lh3.googleusercontent.com/a-/AOh14GimRBBc7n7wyE7eCKGSj6pDCqEnjqcYvxFtSXOYxdU=s96-c"} // and force the response to be: []
    ).as("getUser");
    cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB1_URL"));
    cy.wait("@getUser").then((interception) => {
      // Checks for a response
      assert.isNotNull(interception.response.body, '1st API call has data');
      cy.get('.welcome__name').within(() => {
        cy.get('img:first').click();
        cy.wait(200);
      })
      cy.get('.welcome__menu').within(() => {
        cy.get('a:first').click();
        cy.wait(200);
      })
      cy.testCompleteQuiz();
      
       // cross origin error here
      cy.get('i').contains('This is to certify that you have completed the course:');
    })
  })
  
})