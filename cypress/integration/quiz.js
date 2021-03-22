describe('Testing quiz and quiz results', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL") + '/Lab1');
    cy.testCompleteQuiz();
  });
  
  it("tests correct quiz answers, styling, and result percentage", () => {
    cy.get('.answer-correct').then(($answer) => {
      expect($answer).to.have.css('background-color', 'rgb(161, 255, 183)');
      expect($answer).to.have.css('color', 'rgb(12, 53, 21)');
    })
    cy.get('.answer-wrong').then(($answer) => {
      expect($answer).to.have.css('background-color', 'rgb(160, 92, 98)');
      expect($answer).to.have.css('color', 'rgb(255, 245, 98)');
    })
    cy.get('strong').should(($strong) => {
      expect($strong).to.contain('Score: 80%');
    })
  })
})