export class CalculatorPage {
    // Локаторы
    getFirstInput() {
      return cy.get('#first-input input');
    }
  
    getSecondInput() {
      return cy.get('#second-input input');
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
}