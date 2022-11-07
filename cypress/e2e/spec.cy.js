const URL = 'http://localhost:3000/';

const operators = ['+', '-', '*', '/', '%']


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

    it('Checks if all number buttons have a value between 0 and 10', () => {
      cy.get('.numberButton').then((numberButtons) => {
        numberButtons.each((i, numberButton) => {
          expect(parseInt(numberButton.value)).to.be.within(0,10)
        })
      })
    })

    it('Makes random calculations', () => {

      // Press the first random number button
      cy.contains('button', selectRandomNumber())
        .click()

      // Press "Del" button
      cy.contains('button', 'Del').should('have.class', 'specialButton')
        .click()

        // Press the first random number button, again
      cy.contains('button', selectRandomNumber())
        .click()

      // Press a random operator button
      cy.contains('button', selectRandomOperator())
        .click()

      // Press the second random number button
      cy.contains('button', selectRandomNumber())
        .click()

      // Press "=" button
      cy.contains('button', '=').should('have.class', 'specialButton')
        .click()

      // Press "C" button
      cy.contains('button', 'C').should('have.class', 'specialButton')
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