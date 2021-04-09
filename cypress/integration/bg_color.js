describe('Testing background color change', () => {
    it('tests background color changed to the specified color', () => {
        cy.visit(Cypress.env("CLIENT_URL"));
        // get initial color, should be white
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('button').contains('Change Background Color').click();

        cy.get('.rc-color-picker-panel');
        cy.get('input[type=text]').type('345679{enter}');
        cy.get('body').should('have.css', 'background-color', 'rgb(52, 86, 121)');

    })

    it('tests background color change consistency into Lab 1 pages', () => {
        cy.get('a').contains('Accessibility to Sound and Speech').click();
        cy.testChangeBgColor('rgb(52, 86, 121)');
    })

    it('tests background color change consistency into Lab 2 pages', () => {
        cy.get('a').contains('Accessibility to Color Blindness').click();
        cy.testChangeBgColor('rgb(52, 86, 121)');
    })

    it('tests background color change consistency into Lab 3 pages', () => {
        cy.get('a').contains('Accessibility with Screen Readers').click();
        cy.testChangeBgColor('rgb(52, 86, 121)');
    })

    it('tests background color change consistency into Lab 4 pages', () => {
        cy.get('a').contains('Accessibility to Dexterity').click();
        cy.testChangeBgColor('rgb(52, 86, 121)');
    })

    it('tests background color change consistency into Lab 5 pages', () => {
        cy.get('a').contains('Accessibility to Cognitive Impairments').click();
        cy.testChangeBgColor('rgb(52, 86, 121)');
    })

    it('tests background color change consistency into the site map page', () => {
        cy.get('a').contains('Site Map').click();
        cy.get('body').should('have.css', 'background-color', 'rgb(52, 86, 121)');
    })
})