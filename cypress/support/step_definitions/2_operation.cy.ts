import { result } from "cypress/types/lodash";
import { CalculatorPage } from "../../calculatorPage"; 
import { Given, Then, When ,BeforeAll } from '@badeball/cypress-cucumber-preprocessor';

// describe('template spec', () => {
const calculator = new CalculatorPage();

When("Выбираю основание {string} и ввожу число {string} для 1 числа", (base: string, value: string) => {
    calculator.getFirstBase().select(base)
    calculator.getFirstInput().type(value)
    
})

When("Выбираю основание {string} и ввожу число {string} для 2 числа", (base: string, value: string) => {
    calculator.getSecondBase().select(base)
    calculator.getSecondInput().type(value)
    
})

When("Выбираю действие {string}", (operation : string) => {
    calculator.getOperationDropdown().select(operation)
})

When("Нажимаю кнопку подсчета", () => {
    calculator.getResultButton().click()
})

Then("Получаю результат {string}", (result: string) => {
    calculator.getResultText().should("have.text", "Результат: " + result)
})
