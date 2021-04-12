describe('User lab', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB1_URL") + "/About");
    
  });
  
  
  it('About complete', () => {
    cy.get('button').contains('Next').click();
    cy.task('userLabComplete', 'about')
    let cookie = cy.getCookie('session')
    console.log("Cookie: ", cookie)
    console.log("Usersessionid: ", cookie.token)
    
    
  })
})