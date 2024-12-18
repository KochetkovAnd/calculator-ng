import { CalculatorPage } from "../../calculatorPage"; 
import { Given, Then, BeforeAll } from '@badeball/cypress-cucumber-preprocessor';

// describe('template spec', () => {
  
  BeforeAll(() => {
    cy.visit('http://localhost:4200')
  })

  Given('Открыл интерфейс', () => {
    cy.visit('http://localhost:4200')
  });

  Then('Должен увидеть кнопку', () => {
    const calculator = new CalculatorPage();
    calculator.getOperationDropdown().should('be.visible');
  });


  // it('Доступность интерфеса', () => {
  //   calculator.getFirstInput().should('be.visible');
  //   calculator.getSecondInput().should('be.visible');
  //   calculator.getOperationDropdown().should('be.visible');
  //   calculator.getResultBlock().should('be.visible');
  //   calculator.getResultButton().should('be.visible');
  // })
// })