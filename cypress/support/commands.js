// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// -- Clicks the Google sign-in button and/ ensures authentication  --

Cypress.Commands.add('testLogin', () => {
  cy.intercept(
    {
      method: 'GET',      // Route all GET requests
      url: Cypress.env("SERVER_URL") +'/user',    // that have a URL that matches '/users/*'
    },
    {"userid":4,"firstname":"Saad","image":"https://lh3.googleusercontent.com/a-/AOh14GimRBBc7n7wyE7eCKGSj6pDCqEnjqcYvxFtSXOYxdU=s96-c"} // and force the response to be: []
  ).as("getUser");
  cy.visit(Cypress.env("CLIENT_URL") + Cypress.env("LAB1_URL"));
  cy.wait("@getUser").then((interception) => {
    // Checks for a response
    console.log(interception.response.body)
    assert.isNotNull(interception.response.body, '1st API call has data');
    
    // Checks if response contains image
    assert.isString(interception.response.body.image, '1st API call has profile image URL');
    
    // Checks if profile image element contains the same image url as the response
    cy.get('.welcome__name').within(() => {
      cy.get('img:first').should('have.attr', 'src', `${interception.response.body.image}`);
    })
    
    // Checks if quiz certificate contains the same name as the response
    cy.testCompleteQuiz();
    cy.get('i').contains(interception.response.body.firstname);
  })
});

// mock backend call for logout => null vals
Cypress.Commands.add('testLogout', () => {
  // cy.intercept(
  //   {
  //     method: 'GET',
  //     url: Cypress.env("SERVER_URL") + '/user',
  //   },
  //   null
  // ).as("logout")
  // cy.wait("@logout").then((interception) => {
  //   console.log(interception);
  // })
});

// -- Tests the navigation bar visibility and functionality -- 
Cypress.Commands.add('testLabNavigationBar', (labId) => {
  // Desktop
  cy.viewport('macbook-15');
  cy.wait(200);
  cy.get('nav').contains('About').click();
  cy.location('pathname').should('include', '/About');
  cy.get('nav').contains('Reading').click();
  cy.location('pathname').should('include', '/Reading');
  cy.get('nav').contains('Game').click();
  cy.location('pathname').should('include', '/Game');
  cy.get('nav').contains('Video').click();
  cy.location('pathname').should('include', '/Video');
  cy.get('nav').contains('Quiz').click();
  cy.location('pathname').should('include', '/Quiz');
  cy.get('div[class*="google__button').should('be.visible')
  // google sign in button

  
  // Tablet
  cy.viewport('ipad-2');
  cy.wait(200);
  cy.get('button[class*="navbar-toggler').click();
  cy.get('nav').contains('About').click();
  cy.location('pathname').should('include', '/About');
  cy.get('nav').contains('Reading').click();
  cy.location('pathname').should('include', '/Reading');
  cy.get('nav').contains('Game').click();
  cy.location('pathname').should('include', '/Game');
  cy.get('nav').contains('Video').click();
  cy.location('pathname').should('include', '/Video');
  cy.get('nav').contains('Quiz').click();
  cy.location('pathname').should('include', '/Quiz');
  cy.get('div[class*="google__button').should('be.visible')
  // google sign in button
  
});

Cypress.Commands.add('testNextPage', () => {
  cy.get('button').contains('Next').should('have.class', 'next').then(() => {
    // cy.location('pathname').should('include', '/About'); // going to lab does not change URL
    
    // check Header for page name (i.e. "LAB1: ABOUT")
    
    cy.get('button').contains('Next').click();
    
    cy.location('pathname').should('include', '/Reading');
    cy.get('button').contains('Next').click();
    
    cy.location('pathname').should('include', '/Game');
    cy.get('button').contains('Next').click();
    
    cy.location('pathname').should('include', '/Video');
    cy.get('button').contains('Next').click();
    
    cy.location('pathname').should('include', '/Quiz');
  })
});

Cypress.Commands.add('testPreviousPage', () => {
  cy.get('button').contains('Previous').should('have.class', 'back').then(() => {
    
    // check Header for page name (i.e. "LAB1: ABOUT")
    
    cy.location('pathname').should('include', '/Quiz');
    cy.get('button').contains('Previous').click();
    
    cy.location('pathname').should('include', '/Video');
    cy.get('button').contains('Previous').click();
    
    cy.location('pathname').should('include', '/Game');
    cy.get('button').contains('Previous').click();
    
    cy.location('pathname').should('include', '/Reading');
    cy.get('button').contains('Previous').click();
    
    cy.location('pathname').should('include', '/About');
  })
})

// For each color and font size test, check consistency into another page
Cypress.Commands.add('testChangeBgColor', (expected_rgb_value) => {
  cy.get('body').should('have.css', 'background-color', expected_rgb_value);
  cy.get('button').contains('Next - Reading').click();
  cy.get('body').should('have.css', 'background-color', expected_rgb_value);
  cy.get('button').contains('Next - Game').click();
  cy.get('body').should('have.css', 'background-color', expected_rgb_value);
  cy.get('button').contains('Next - Video').click();
  cy.get('body').should('have.css', 'background-color', expected_rgb_value);
  cy.get('button').contains('Next - Quiz').click();
  cy.get('body').should('have.css', 'background-color', expected_rgb_value);
  cy.get('nav').contains('Home').click(); //go back to the home page
});

Cypress.Commands.add('testChangeTextColor', () => {
  const targetColor = 'rgb(52, 86, 121)';
  const pages = ['About', 'Reading', 'Game', 'Video', 'Quiz'];
  for (let i = 0; i < pages.length; i++){
    cy.get('#all-header-text').should('have.css', 'color', targetColor);
    cy.get('.nav-link').should('exist', 'be.visible').should('have.css', 'color', targetColor);
    cy.get('body').find('h2').should('have.css', 'color', targetColor);
    cy.get('button').should('exist', 'be.visible').should('have.css', 'color', targetColor);
    if (i > 0){ // if we're not on the about page, there should be a previous button
      cy.get('button').contains('Previous - ' + pages[i-1]).should('exist', 'be.visible')  //the previous button's text should remain black
          .should('have.css', 'color', 'rgb(255, 255, 255)');
    }
    if (i < 4){  // if we're not on the quiz page, there should be a next button
      cy.get('body').find('p').should('have.css', 'color', targetColor);
      cy.get('button').contains('Next - ' + pages[i+1]).should('exist', 'be.visible')
          .should('have.css', 'color', 'rgb(64, 64, 64)');
      cy.get('button').contains('Next - ' + pages[i+1]).click();
    }
  }
});


Cypress.Commands.add('testLabFontSizeIncrease', () => {
  // cy.get('body').find('p').should('exist', 'be.visible').should('have.css', 'font-size', '21px'); //todo uncomment this after issue is fixed
  cy.get('.nav-link').should('exist', 'be.visible').should('have.css', 'font-size', '17px');
  cy.get('.navbar-brand').should('exist', 'be.visible').should('have.css', 'font-size', '29px');
  cy.get('button').should('exist', 'be.visible').should('have.css', 'font-size', '21px');
});

Cypress.Commands.add('testLabFontSizeDecrease', () => {
  // cy.get('body').find('p').should('exist', 'be.visible').should('have.css', 'font-size', '19px'); //todo uncomment this after issue is fixed
  cy.get('.nav-link').should('exist', 'be.visible').should('have.css', 'font-size', '15px');
  cy.get('.navbar-brand').should('exist', 'be.visible').should('have.css', 'font-size', '27px');
  cy.get('button').should('exist', 'be.visible').should('have.css', 'font-size', '19px');
});

// Completes quiz in current lab
Cypress.Commands.add('testCompleteQuiz', () => {
  cy.get('nav').contains('Quiz').click();
  cy.fixture("data.json").then((data) => {
    
    // Complete quiz with correct answers
    for (let i in data.quiz1) {
      cy.get('.answerOption').contains(data.quiz1[i]).click({force: true});
      
      // Proceed to next question or complete quiz
      if (i < data.quiz1.length-1) {
        cy.get('button').contains('Next Question').click();
      } else {
        cy.get('button').contains("Complete").click();
      }
    }
  });
});

// Completes Game in current lab
// Assumes that browser is on a lab page
Cypress.Commands.add('completeGame', (labid) => {
  cy.visit(Cypress.env("CLIENT_URL") + Cypress.env(`LAB${labid}_URL`) + "/Game");
  cy.wait(500);
  
  switch(labid) {
    case 1:
      cy.get('button').contains('Start').click();
      
      // Check footer for accessibility feature visibility
      cy.get('.btn-information').should('be.visible');
      cy.get('.btn-change').should('not.be.visible');
      
      // Let the game run without user interactions
      cy.contains('Continue', {timeout: 60000}).click();
    
    case 2:
      return 
    
    case 3:
      return 
    
    case 4:
      return 
    
    case 5:
      cy.get('button').contains('Start').click();
      cy.get('.btn-information').should('be.visible');
      cy.get('.btn-change').should('not.be.visible');
      
      // Run through game and perform necessary user interactions
      cy.get('button').contains('Next').click();
      cy.contains('Increased concentration').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.contains('Stuttering while speaking').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      
      cy.get('button').contains('Repair').click();
      cy.get('.code_editor__line-background--light').find('[type=text]').each(($el, index, $list) => {
        if (index === 0) {
          cy.wrap($list[0]).type('h1');
        } else if (index === 1) {
          cy.wrap($list[1]).type('body');
        } else if (index === 2) {
          cy.wrap($list[2]).type('ul');
        } else if (index === 3) {
          cy.wrap($list[3]).type('16');
        } else {
          cy.wrap($list[4]).type('roboto');
        }
      });
      cy.get('button').contains('Update').click();
      
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      cy.contains('Use acronyms').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Notification').click();
      cy.get('button').contains('Next').click();
      cy.contains('None').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Notification').click();
      cy.get('button').contains('Next').click();
      cy.contains('Know').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      
      cy.get('button').contains('Repair').click();
      cy.get('.code_editor__line-background--light').find('[type=text]').each(($el, index, $list) => {
        if (index === 0) {
          cy.wrap($list[0]).type('4000');
        } 
        if (index === 1) {
          cy.wrap($list[1]).type('20');
        }
      });
      cy.get('button').contains('Update').click();
      
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Notification').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('is').click();
      cy.get('button').contains('Next').click();
      
      cy.get('.form-group').find('[type=text]').each(($el, index, $list) => {
        if (index === 0) {
          cy.wrap($list[0]).type('rabbit');
        } else if (index === 1) {
          cy.wrap($list[1]).type('february 26');
        } else if (index === 2) {
          cy.wrap($list[2]).type('skittles');
        } else {
          cy.wrap($list[3]).type('new york');
        }
      });
      cy.get('input.formButtonSubmit.form-control').click();
      cy.get('input.formButtonHelp.form-control').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Next').click();
      
      cy.get('button').contains('Repair').click();
      cy.get('.code_editor__line-background--light').find('[type=text]').each(($el, index, $list) => {
        if (index === 0) {
          cy.wrap($list[0]).type('Please enter in format: YYYY-MM-DD');
        } else if (index === 1) {
          cy.wrap($list[1]).type('Successful Submission');
        } else {
          cy.wrap($list[2]).type('red');
        }
      });
      cy.get('button').contains('Update').click();
      
      cy.get('button').contains('Next').click();
      cy.get('.form-group').find('[type=text]').each(($el, index, $list) => {
        
        if (index === 0) {
          cy.wrap($list[0]).type('rabbit');
        } else if (index === 1) {
          let today = new Date();
          let dd = String(today.getDate()).padStart(2, '0');
          let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          let yyyy = today.getFullYear();
          today = yyyy + '-' + mm + '-' + dd;
          cy.wrap($list[1]).type(today);
        } else if (index === 2) {
          cy.wrap($list[2]).type('skittles');
        } else {
          cy.wrap($list[3]).type('new york');
        }
      });
      cy.get('input.formButtonSubmit.form-control').click();
      cy.get('button').contains('Next').click();
      cy.get('button').contains('Home').click();
      
      
      
    default:
      return
  }
  
});