describe('Testing font size increase', () => {
  it('tests font size increase on home page', () => {
    cy.visit(Cypress.env("CLIENT_URL"));

    //initial fontsizes
    cy.get('body').find('p').should('exist', 'be.visible').should('have.css', 'font-size', '16px');
    cy.get('.nav-link').should('exist', 'be.visible').should('have.css', 'font-size', '16px');
    cy.get('.navbar-brand').should('exist', 'be.visible').should('have.css', 'font-size', '28px');
    cy.get('button').should('exist', 'be.visible').should('have.css', 'font-size', '20px');

    cy.get('button').contains('Text+').click();
    cy.get('body').find('p').should('exist', 'be.visible').should('have.css', 'font-size', '17px');
    cy.get('.nav-link').should('exist', 'be.visible').should('have.css', 'font-size', '17px');
    cy.get('.navbar-brand').should('exist', 'be.visible').should('have.css', 'font-size', '29px');
    cy.get('button').should('exist', 'be.visible').should('have.css', 'font-size', '21px');
  });
  
  it('tests font size increase persistency into Lab 1 pages', () => {
    cy.get('a').contains('Accessibility to Sound and Speech').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeIncrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeIncrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size increase persistency into Lab 2 pages', () => {
    cy.get('a').contains('Accessibility to Color Blindness').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeIncrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeIncrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size increase persistency into Lab 3 pages', () => {
    cy.get('a').contains('Accessibility with Screen Readers').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeIncrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeIncrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size increase persistency into Lab 4 pages', () => {
    cy.get('a').contains('Accessibility to Dexterity').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeIncrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeIncrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size increase persistency into Lab 5 pages', () => {
    cy.get('a').contains('Accessibility to Cognitive Impairments').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeIncrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeIncrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size increase persistency into the site map page', () => {
    cy.get('a').contains('Site Map').click();
    cy.testLabFontSizeIncrease();
  })
})

describe('Testing font size decrease', () => {
  it('tests font size decrease on the home page', () => {
    cy.visit(Cypress.env("CLIENT_URL"));

    //initial fontsizes
    cy.get('body').find('p').should('exist', 'be.visible').should('have.css', 'font-size', '16px');
    cy.get('.nav-link').should('exist', 'be.visible').should('have.css', 'font-size', '16px');
    cy.get('.navbar-brand').should('exist', 'be.visible').should('have.css', 'font-size', '28px');
    cy.get('button').should('exist', 'be.visible').should('have.css', 'font-size', '20px');

    cy.get('button').contains('Text-').click();
    //test the home page
    cy.get('body').find('p').should('exist', 'be.visible').should('have.css', 'font-size', '15px');
    cy.get('.nav-link').should('exist', 'be.visible').should('have.css', 'font-size', '15px');
    cy.get('.navbar-brand').should('exist', 'be.visible').should('have.css', 'font-size', '27px');
    cy.get('button').should('exist', 'be.visible').should('have.css', 'font-size', '19px');
    cy.testLabFontSizeDecrease();
  })

  it('tests font size decrease persistency into Lab 1 pages', () => {
    cy.get('a').contains('Accessibility to Sound and Speech').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeDecrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeDecrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size decrease persistency into Lab 2 pages', () => {
    cy.get('a').contains('Accessibility to Color Blindness').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeDecrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeDecrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size decrease persistency into Lab 3 pages', () => {
    cy.get('a').contains('Accessibility with Screen Readers').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeDecrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeDecrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size decrease persistency into Lab 4 pages', () => {
    cy.get('a').contains('Accessibility to Dexterity').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeDecrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeDecrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size decrease persistency into Lab 5 pages', () => {
    cy.get('a').contains('Accessibility to Cognitive Impairments').click();
    const buttons = ['Next - Reading', 'Next - Game', 'Next - Video', 'Next - Quiz'];
    for (let btnText of buttons){
      cy.testLabFontSizeDecrease();
      cy.get('button').contains(btnText).click();
    }
    cy.testLabFontSizeDecrease(); // the quiz page
    cy.get('nav').contains('Home').click(); //go back to the home page
  });

  it('tests font size decrease persistency into the site map page', () => {
    cy.get('a').contains('Site Map').click();
    cy.testLabFontSizeDecrease();
  })
})