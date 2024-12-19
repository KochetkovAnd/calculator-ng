import { CalculatorPage } from "../../calculatorPage"; 
import { Given, Then, When, BeforeAll } from '@badeball/cypress-cucumber-preprocessor';

// describe('template spec', () => {
const calculator = new CalculatorPage();

Then("Результат окрашен в {string}", (color : string) => {
    calculator.getResultBlock().should('have.css', 'background-color', color);
})