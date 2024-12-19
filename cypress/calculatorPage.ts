export class CalculatorPage {
    // Локаторы
    getFirstInput() {
      return cy.get('#first-input input');
    }

    getFirstBase() {
      return cy.get('#first-input select');
    }
  
    getSecondInput() {
      return cy.get('#second-input input');
    }

    getSecondBase() {
      return cy.get('#second-input select');
    }
  
    getOperationDropdown() {
      return cy.get('#operation');
    }
  
    getResultBlock() {
      return cy.get('#res-block');
    }
  
    getResultButton() {
      return cy.get('#res-button');
    }

    getResultText() {
      return cy.get('#res-block p');
    }
}