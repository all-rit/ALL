describe('Testing Lab 2', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB2_URL"));
    });

    it('tests navigation bar', () => {
        cy.testLabNavigationBar();
    });

    it('tests footer navigation', () => {
        cy.testNextPage();
        cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB2_URL") + Cypress.env("QUIZ_URL"));
        cy.testPreviousPage();
    });

    it('tests login', () => {
        cy.testLogin();
    });

})