import { CalculatorPage } from "../../calculatorPage"; 
import { Given, Then, BeforeAll } from '@badeball/cypress-cucumber-preprocessor';

// describe('template spec', () => {
const calculator = new CalculatorPage();

BeforeAll(() => {
  cy.visit('http://localhost:4200')
})

Given('Открыл интерфейс', () => {
    cy.visit('http://localhost:4200')
});
  