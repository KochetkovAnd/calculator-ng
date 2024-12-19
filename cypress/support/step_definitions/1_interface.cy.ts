import { CalculatorPage } from "../../calculatorPage"; 
import { Given, Then, BeforeAll } from '@badeball/cypress-cucumber-preprocessor';

// describe('template spec', () => {
const calculator = new CalculatorPage();


Then('Должен увидеть первый ввод', () => {  
  calculator.getFirstInput().should('be.visible');
});

Then('Должен увидеть второй ввод', () => {  
  calculator.getSecondInput().should('be.visible');
});

Then('Должен увидеть выбор операции', () => {  
  calculator.getOperationDropdown().should('be.visible');
});

Then('Должен увидеть результирующий блок', () => {  
  calculator.getResultBlock().should('be.visible');
});

Then('Должен увидеть кнопку получения результата', () => {  
  calculator.getResultBlock().should('be.visible');
});
