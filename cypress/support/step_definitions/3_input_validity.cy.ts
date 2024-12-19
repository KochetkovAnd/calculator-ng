import { CalculatorPage } from "../../calculatorPage"; 
import { Given, Then, When, BeforeAll } from '@badeball/cypress-cucumber-preprocessor';

// describe('template spec', () => {
const calculator = new CalculatorPage();

When("Дописываю символ {string}", (symbol : string) => {
    calculator.getFirstInput().type(symbol)
})

Then("Конечный текст получается {string}", (result : string) => {
    calculator.getFirstInput().invoke('val').then((value) => {
        expect(value).to.equal(result); 
      });
})