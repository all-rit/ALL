describe('User lab', () => {
  before(() => {
    cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB1_URL") + "/About");
    cy.wait(500);
  });
  
  
  it('About complete', () => {
    cy.get('button').contains('Next').click();
    cy.get('h2').contains('Reading').should('be.visible');
    cy.window().its('store').invoke('getState').then(state => {
      cy.task('userLabComplete', {section: 'about', userid: state.main.user.userid})
        .then((userlab) => {
          console.log(userlab.aboutcompletedtime);
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
    cy.get('button').contains('Next').click();
    cy.get('h2').contains('Game').should('be.visible');
    cy.window().its('store').invoke('getState').then(state => {
      cy.task('userLabComplete', {section: 'about', userid: state.main.user.userid})
        .then((userlab) => {
          console.log(userlab.readingompletedtime);
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
  
  it('Game complete', () => {
    cy.get('button').contains('Next').click();
    cy.get('h2').contains('Video').should('be.visible');
    cy.window().its('store').invoke('getState').then(state => {
      cy.task('userLabComplete', {section: 'about', userid: state.main.user.userid})
        .then((userlab) => {
          console.log(userlab.gamecompletedtime);
          // should not be null
          expect(userlab.gamecompletedtime).to.not.be.null;
          
          // should be of type string 
          expect(userlab.gamecompletedtime).to.be.a('string');
          
          // should be before today
          let date = new Date();
          expect(new Date(userlab.gamecompletedtime).getTime()).to.be.lessThan(date.getTime());
        })
    })
  })
  
  it('Video complete', () => {
    cy.get('button').contains('Next').click();
    cy.get('h2').contains('Quiz').should('be.visible');
    cy.window().its('store').invoke('getState').then(state => {
      cy.task('userLabComplete', {section: 'about', userid: state.main.user.userid})
        .then((userlab) => {
          console.log(userlab.aboutcompletedtime);
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