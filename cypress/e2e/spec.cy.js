const URL = 'http://localhost:3000/';

let operators = ['+', '-', '*', '/'];


context('Calculator', () => {

  // First of all, visits the app link
  before(() => {
    cy.visit(URL);
  })

  describe('Uses the calculator', () => {
    const TOTAL_BUTTONS = 18;
    const TOTAL_DISPLAYS = 2;

    it('Checks if all buttons and displays were loaded', () => {
      cy.get('#calculator').find('.button').should('have.length', TOTAL_BUTTONS)
      cy.get('#calculator').find('.display').should('have.length', TOTAL_DISPLAYS)
    })

    it('Makes random calculations', () => {
      // Press the first random number button
      cy.contains(selectRandomNumber())
        .click()

      // Press a random operator button
      cy.contains(selectRandomOperator())
        .click()

      // Press the second random number button
      cy.contains(selectRandomNumber())
        .click()

      // Press "equal" button
      cy.contains('=')
        .click()
    })
  })
})

// Function for get a random number
function selectRandomNumber() {
  return Math.floor(Math.random() * 9);
}

// Function for get a random operator
function selectRandomOperator() {
  return operators[Math.floor(Math.random() * operators.length)];
}