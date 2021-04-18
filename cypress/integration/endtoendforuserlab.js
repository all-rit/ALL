describe('User lab', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB1_URL") + "/About");
    
  });
  
  
  it('About complete', () => {
    cy.get('button').contains('Next').click();
    cy.wait(200);
    cy.window().its('store').invoke('getState').then(state => {
      cy.task('userLabComplete', {section: 'about', userid: state.main.user.userid})
        .then((userlab) => {
          console.log("Connection successful: ", userlab);
        }) 
    })
    // need to get usersessionid from task result
    // check db for column value 
    
  })
  
  // it('Reading complete', () => {
    
  // });
  
  // it('Game complete', () => {
    
  // });
  
  // it('Video complete', () => {
    
  // });
  
  // it('Quiz complete', () => {
  //   // run command here
  // });
  
})