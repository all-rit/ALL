describe('User lab', () => {
  before(() => {
    cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB1_URL") + "/About");
    cy.wait(500);
  });
  
  beforeEach(() => {
    // before each test, we can automatically preserve the
    // 'session'. this means they will not be cleared 
    // before the NEXT test starts.
    //
    // the name of your cookies will likely be different
    // this is an example
    Cypress.Cookies.preserveOnce('session');
  })
  
  
  it('About complete', () => {
    cy.window().its('store').invoke('getState').then(state => {
      cy.get('button').contains('Next').click();
      cy.get('h2').contains('Reading').should('be.visible');
      let userid = state.main.user.userid;
      cy.task('userLabComplete', {section: 'about', userid: userid})
        .then((userlab) => {
          // should not be null
          expect(userlab.aboutcompletedtime).to.not.be.null;
          
          // should be of type string 
          expect(userlab.aboutcompletedtime).to.be.a('string');
          
          // should be before today
          let date = new Date();
          expect(new Date(userlab.aboutcompletedtime).getTime()).to.be.lessThan(date.getTime());
        })
    })
  })
  
  it('Reading complete', () => {
    cy.window().its('store').invoke('getState').then(state => {
      cy.get('button').contains('Next').click();
      cy.get('h2').contains('Game').should('be.visible');
      let userid = state.main.user.userid;
      cy.task('userLabComplete', {section: 'about', userid: userid})
        .then((userlab) => {
          // should not be null
          expect(userlab.readingcompletedtime).to.not.be.null;
          
          // should be of type string 
          expect(userlab.readingcompletedtime).to.be.a('string');
          
          // should be before today
          let date = new Date();
          expect(new Date(userlab.readingcompletedtime).getTime()).to.be.lessThan(date.getTime());
        })
    })
  })
  
  // it('Game complete', () => {
  //   cy.get('button').contains('Next').click();
  //   cy.get('h2').contains('Video').should('be.visible');
  //   cy.window().its('store').invoke('getState').then(state => {
  //     cy.task('userLabComplete', {section: 'about', userid: state.main.user.userid})
  //       .then((userlab) => {
  //         // should not be null
  //         expect(userlab.gamecompletedtime).to.not.be.null;
          
  //         // should be of type string 
  //         expect(userlab.gamecompletedtime).to.be.a('string');
          
  //         // should be before today
  //         let date = new Date();
  //         expect(new Date(userlab.gamecompletedtime).getTime()).to.be.lessThan(date.getTime());
  //       })
  //   })
  // })
  
  it('Video complete', () => {
    cy.window().its('store').invoke('getState').then(state => {
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.get('h2').contains('Quiz').should('be.visible');
      let userid = state.main.user.userid;
      cy.task('userLabComplete', {section: 'about', userid: userid})
        .then((userlab) => {
          // should not be null
          expect(userlab.videocompletedtime).to.not.be.null;
          
          // should be of type string 
          expect(userlab.videocompletedtime).to.be.a('string');
          
          // should be before today
          let date = new Date();
          expect(new Date(userlab.videocompletedtime).getTime()).to.be.lessThan(date.getTime());
        })
    })
  })
  
  // it('Quiz complete', () => {
  //   // run command here
  // });
  
})