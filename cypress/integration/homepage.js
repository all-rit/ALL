describe("Testing homepage", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("CLIENT_URL"));
  });
  
  it("tests Lab 1 link", () => {
    cy.get('h4').eq(0).should('be.visible');
    cy.get('h4').eq(0).children().should('have.attr', 'href', '# ')
  })
  
  it("tests Lab 2 link", () => {
    cy.get('h4').eq(1).should('be.visible');
    cy.get('h4').eq(1).children().should('have.attr', 'href', '# ')
  })
  
  it("tests Lab 3 link", () => {
    cy.get('h4').eq(2).should('be.visible');
    cy.get('h4').eq(2).children().should('have.attr', 'href', '# ')
  })
  
  it("tests Lab 4 link", () => {
    cy.get('h4').eq(3).should('be.visible');
    cy.get('h4').eq(3).children().should('have.attr', 'href', '# ')
  })
  
  it("tests the homepage navigation bar", () => {
    cy.viewport('macbook-15');
    cy.wait(200);
    
    cy.get('nav').contains('Goals').click();
    cy.url().should('eq', Cypress.env("CLIENT_URL") + "/#goals");
    cy.get('#goals-button').should('have.css', 'color', 'rgb(254, 209, 54)');
    
    cy.get('nav').find('.nav-link:contains("Labs")').click()
    cy.url().should('eq', Cypress.env("CLIENT_URL") + "/#labs");
    cy.get('#labs-button').should('have.css', 'color', 'rgb(254, 209, 54)');
    
    cy.get('nav').contains('Contact').click();
    cy.url().should('eq', Cypress.env("CLIENT_URL") + "/#contact");
    cy.get('#contact-button').should('have.css', 'color', 'rgb(254, 209, 54)');
    
  })
  
  it("tests the homepage hamburger menu", () => {
    cy.viewport('ipad-2');
    cy.wait(200);
    
    cy.get('button[class*="navbar-toggler').click();
    
    cy.get('nav').contains('Goals').click();
    cy.url().should('eq', Cypress.env("CLIENT_URL") + "/#goals");
    cy.get('#goals-button').should('have.css', 'color', 'rgb(254, 209, 54)');
    
    cy.get('nav').find('.nav-link:contains("Labs")').click()
    cy.url().should('eq', Cypress.env("CLIENT_URL") + "/#labs");
    cy.get('#labs-button').should('have.css', 'color', 'rgb(254, 209, 54)');
    
    cy.get('nav').contains('Contact').click();
    cy.url().should('eq', Cypress.env("CLIENT_URL") + "/#contact");
    cy.get('#contact-button').should('have.css', 'color', 'rgb(254, 209, 54)');
  })
  
  it('tests sitemap visibility on the homepage', () => {
    cy.get('footer').contains('SiteMap').should('be.visible');
    cy.get('footer').contains('SiteMap').click();
    cy.url().should('eq', Cypress.env("CLIENT_URL") + "/#sitemap");
  });
  
  it('tests sitemap page', () => {
    // cy.visit(Cypress.env("CLIENT_URL") + "/#sitemap"); // what it should be in production
    cy.visit(Cypress.env("CLIENT_URL") + "/SiteMap#");
    cy.get('h2').should('be.visible').and('have.text', 'Site Map');
    cy.get('h4').eq(0).should('have.text', 'Home').and('be.visible')
    cy.get('h4').eq(1).should('have.text', 'Lab 1').and('be.visible')
    cy.get('h4').eq(2).should('have.text', 'Lab 2').and('be.visible')
    cy.get('h4').eq(3).should('have.text', 'Lab 3').and('be.visible')
    cy.get('h4').eq(4).should('have.text', 'Lab 4').and('be.visible')
    cy.get('h4').eq(5).should('have.text', 'Lab 5').and('be.visible')
    
    // Check page links under headers
    // cy.get('h4 > ul li').each(($ul))
  });
})