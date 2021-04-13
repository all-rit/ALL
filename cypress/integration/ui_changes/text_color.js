describe('Testing font size increase', () => {
    it('tests font color change on home page', () => {
        cy.visit(Cypress.env("CLIENT_URL"));

        //initial font colors
        cy.get('#all-header-text').should('have.css', 'color', 'rgb(254, 209, 54)');
        cy.get('#goals-button').should('have.css', 'color', 'rgb(254, 209, 54)');
        cy.get('#labs-button').should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('body').find('p').should('exist', 'be.visible').should('have.css', 'color', 'rgb(33, 37, 41)');
        cy.get('a').contains('Accessibility to Sound and Speech').should('have.css', 'color', 'rgb(1, 68, 213)');
        cy.get('#connect-text').should('have.css', 'color', 'rgb(254, 209, 54)');
        cy.get('button').should('exist', 'be-visible').should('have.css', 'color', 'rgba(255, 255, 255, 0.5)');

        cy.get('button').contains('Change Text Color').click();
        cy.get('.rc-color-picker-panel');
        cy.get('input[type=text]').type('345679{enter}');

        cy.get('body').find('p').should('exist', 'be.visible').should('have.css', 'color', 'rgb(52, 86, 121)');
        cy.get('#goals-button').should('exist', 'be.visible').should('have.css', 'color', 'rgb(52, 86, 121)');
        cy.get('#all-header-text').should('exist', 'be.visible').should('have.css', 'color', 'rgb(52, 86, 121)');
        cy.get('#labs-button').should('exist', 'be.visible').should('have.css', 'color', 'rgb(52, 86, 121)');
        cy.get('a').should('exist', 'be.visible').contains('Accessibility to Sound and Speech').should('have.css', 'color', 'rgb(52, 86, 121)');
        cy.get('#connect-text').should('exist', 'be.visible').should('have.css', 'color', 'rgb(52, 86, 121)');
        cy.get('button').should('exist', 'be-visible').should('have.css', 'color', 'rgb(52, 86, 121)');
    });

    it('tests text color change persistency into Lab 1 pages', () => {
        cy.get('a').contains('Accessibility to Sound and Speech').click();
        cy.testChangeTextColor();
        cy.get('nav').contains('Home').click(); //go back to the home page
    });

    it('tests text color change persistency into Lab 2 pages', () => {
        cy.get('a').contains('Accessibility to Color Blindness').click();
        cy.testChangeTextColor();
        cy.get('nav').contains('Home').click(); //go back to the home page
    });

    it('tests text color change persistency into Lab 3 pages', () => {
        cy.get('a').contains('Accessibility with Screen Readers').click();
        cy.testChangeTextColor();
        cy.get('nav').contains('Home').click(); //go back to the home page
    });

    it('tests text color change persistency into Lab 4 pages', () => {
        cy.get('a').contains('Accessibility to Dexterity').click();
        cy.testChangeTextColor();
        cy.get('nav').contains('Home').click(); //go back to the home page
    });

    it('tests text color change persistency into Lab 5 pages', () => {
        cy.get('a').contains('Accessibility to Cognitive Impairments').click();
        cy.testChangeTextColor();
        cy.get('nav').contains('Home').click(); //go back to the home page
    });

    it('tests text color change persistency into the site map page', () => {
        cy.get('a').contains('Site Map').click();
        const targetColor = 'rgb(52, 86, 121)';
        cy.get('#all-header-text').should('have.css', 'color', targetColor);
        cy.get('.nav-link').should('exist', 'be.visible').should('have.css', 'color', targetColor);
        cy.get('body').find('h2').should('have.css', 'color', targetColor);
        cy.get('button').should('exist', 'be.visible').should('have.css', 'color', targetColor);

    })
})