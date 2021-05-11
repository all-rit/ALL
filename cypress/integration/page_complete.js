describe('User lab', () => {
  before(() => {
    // LABX_URL - manually replace 'X' with the lab number you are testing
    cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB5_URL") + "/About");
    cy.wait(500);
  });
  
  beforeEach(() => {
    // Before each test, we can automatically preserve the
    // 'session' cookie. This means it will not be cleared 
    // before the NEXT test starts, thus preserving state.
    Cypress.Cookies.preserveOnce('session');
  })
  
  
  it('About complete', () => {
    cy.window().its('store').invoke('getState').then(state => {
      cy.get('button').contains('Next').click();
      cy.get('h2').contains('Reading').should('be.visible');
      let userid = state.main.user.userid;
      let labid = state.main.lab;
      cy.task('userLabComplete', {labid: labid, userid: userid})
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
      let labid = state.main.lab;
      cy.task('userLabComplete', {labid: labid, userid: userid})
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
  
  it('Game complete', () => {
    cy.window().its('store').invoke('getState').then(state => {
      cy.completeGame(state.main.lab);
    });
    
    cy.get('.btn-change').should('be.visible');
    
    cy.window().its('store').invoke('getState').then(state => {
      // Check redux state for game complete depending on the lab
      if (state.main.lab === 1) {
        expect(state.game1.plays).to.be.greaterThan(0);
        expect(state.game1.state).to.deep.equal('GAME_IDLE');
      }
      
      if (state.main.lab === 5) {
        expect(state.game5.state).to.deep.equal('GAME_IDLE');
      }
    });
    
    cy.get('button').contains('Next - Video').click();
    cy.get('h2').contains('Video').should('be.visible');
    cy.window().its('store').invoke('getState').then(state => {
      // Checks user lab for game complete
      let labid = state.main.lab;
      cy.task('userLabComplete', {labid: labid, userid: state.main.user.userid})
        .then((userlab) => {
          // should not be null
          expect(userlab.gamecompletedtime).to.not.be.null;
          
          // should be of type string 
          expect(userlab.gamecompletedtime).to.be.a('string');
          
          // should be before today
          let date = new Date();
          expect(new Date(userlab.gamecompletedtime).getTime()).to.be.lessThan(date.getTime());
        }
      )
    })
  })
  
  it('Video complete', () => {
    cy.window().its('store').invoke('getState').then(state => {
      cy.get('button').contains('Next').click();
      cy.get('h2').contains('Quiz').should('be.visible');
      let userid = state.main.user.userid;
      let labid = state.main.lab;
      cy.task('userLabComplete', {labid: labid, userid: userid})
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
  
  it('Quiz complete', () => {
    cy.window().its('store').invoke('getState').then(state => {
      cy.testCompleteQuiz(state.main.lab);
    });
    
    cy.window().its('store').invoke('getState').then(state => {
      cy.get('button').contains('Next').should('not.be.visible')
      cy.get('h2').contains('Quiz').should('be.visible');
      let userid = state.main.user.userid;
      let labid = state.main.lab;
      cy.task('userLabComplete', {labid: labid, userid: userid})
        .then((userlab) => {
          // should not be null
          expect(userlab.quizcompletedtime).to.not.be.null;
          
          // should be of type string 
          expect(userlab.quizcompletedtime).to.be.a('string');
          
          // should be before today
          let date = new Date();
          expect(new Date(userlab.quizcompletedtime).getTime()).to.be.lessThan(date.getTime());
        })
    })
  });
})