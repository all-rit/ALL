describe('Testing background color change', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("CLIENT_URL"));
    })

    it('tests background color changed to the specified color', () => {
        // get initial color, should be white
        // click on change background color
        // change the color
        // get elements that are changed
        // ensure bgcolor is changed
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('button').contains('Change Background Color').click();
        cy.get('.rc-color-picker-panel-board span').invoke('attr', 'style', '{left: 0%, top: 0%}');

        cy.get('.rc-color-picker-panel');
        cy.get('input[type=text]').type('345679{enter}');
        cy.get('body').should('have.css', 'background-color', 'rgb(52, 86, 121)');
        // check for consistency across pages

    })
  
})