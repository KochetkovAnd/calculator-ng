import { CalculatorPage } from "../../calculatorPage"; 
import { Given, Then, When, BeforeAll } from '@badeball/cypress-cucumber-preprocessor';

// describe('template spec', () => {
const calculator = new CalculatorPage();


When("Ввожу число {string} для 2 числа", (number : string) => {
    calculator.getSecondInput().clear().type(number)
})

Then("Текст инпута получается {string}", (result : string) => {
    calculator.getSecondInput().invoke('val').then((value) => {
        expect(value).to.equal(result); 
      });
})