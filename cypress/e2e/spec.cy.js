let operators = ['+', '-', '*', '/'];
let randomOperator = operators[Math.floor(Math.random() * operators.length)];


describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')

    // Function for press the first random number button
    cy.contains(Math.floor(Math.random() * 9))
      .click()

    // Function for random operator button
    cy.contains(randomOperator)
      .click()

    // Function for press the second random number button
    cy.contains(Math.floor(Math.random() * 9))
      .click()

    // Just a function to press the "equal" button :)
    cy.contains('=').click()
  })
})