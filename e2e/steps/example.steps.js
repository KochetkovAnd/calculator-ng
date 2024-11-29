const { Given, When, Then } = require ('@cucumber/cucumber');
const { browser, element, by } = require('protractor');
const expect = require('chai').expect; // Используем chai для assert'ов

Given('я открываю сайт {string}', async (url) => {
  await browser.get(url);
});

When('я проверяю заголовок страницы', async () => {
  this.title = await browser.getTitle();
});

Then('заголовок должен быть {string}', async (expectedTitle) => {
  expect(this.title).to.equal(expectedTitle);
});