context('Calculator', () => {

  before(() => {
    cy.visit(Cypress.env('URL'));
  })


  describe('Uses the calculator', () => {
    const totalButtons = 18;
    const totalDisplays = 2;


    it('Checks if all buttons and displays were loaded', () => {
      cy.get('#calculator').find('.button').should('have.length', totalButtons);
      cy.get('#calculator').find('.display').should('have.length', totalDisplays);
    })


    it('Checks if all number buttons have a value between 0 and 10', () => {
      cy.get('.numberButton').then((numberButtons) => {
        numberButtons.each((i, numberButton) => {
          expect(parseInt(numberButton.value)).to.be.within(0, 10);
        })
      })
    })


    it('Makes random calculations', () => {
      let firstRandomNumber = Math.floor(Math.random() * 9);
      let secondRandomNumber = Math.floor(Math.random() * 9);

      const operators = ['+', '-', '*', '/', '%'];
      let randomOperator = operators[Math.floor(Math.random() * operators.length)];


      describe('Select the first number button', () => {

        // Press the first (random) number button
        cy.contains('button', firstRandomNumber)
          .click();

        // Check if the first number was written in the "First values" input
        cy.get('.firstValue').should('have.value', firstRandomNumber);

        // Press "Del" button
        cy.contains('button', 'Del').should('have.class', 'specialButton')
          .click();

        // Check if the first number was deleted from the "First values" input
        cy.get('.firstValue').should('not.have.value', firstRandomNumber);

        // Press again the first (random) number button
        cy.contains('button', firstRandomNumber)
          .click();

        // Check again if the first number was written in the "First values" input
        cy.get('.firstValue').should('have.value', firstRandomNumber);
      })


      describe('Select the operator button', () => {

        // Press a random operator button
        cy.contains('button', randomOperator)
          .click();
  
        // Check if the operator is on the "First values" input with the first number
        cy.get('.firstValue').should('have.value', firstRandomNumber + randomOperator);
      })


      describe('Select the first number button', () => {

        // Press the second random number button
        cy.contains('button', secondRandomNumber)
          .click();
  
        cy.get('.firstValue').should('have.value', firstRandomNumber + randomOperator + secondRandomNumber);
      })


      describe('Uses the currently data given until now', () => {
        
        // Return a simple calculation with all the currently data...
        function finalResult() {

          switch (randomOperator) {

            case '+':
              return firstRandomNumber + secondRandomNumber;
              break;

            case '-':
              return firstRandomNumber - secondRandomNumber;
              break;

            case '*':
              return firstRandomNumber * secondRandomNumber;
              break;

            case '/':
              return firstRandomNumber / secondRandomNumber;
              break;

            case '%':
              return firstRandomNumber % secondRandomNumber;
              break;

            default:
              'Something is wrong :/';
          }
        }


        describe('... And then makes the final calculation', () => {
        
          // Press "=" button
          cy.contains('button', '=').should('have.class', 'specialButton')
            .click();
    
          // Check if the final result is correct and if it appears inside the ".result" input
          cy.get('.result').should('have.value', finalResult());
        })
      })


      describe('Done? Then now just delete all :)', () => {

        // Press "C" button
        cy.contains('button', 'C').should('have.class', 'specialButton')
          .click();
      })
    })
  })
})