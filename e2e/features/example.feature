Feature: Проверка заголовка страницы

Scenario: Проверка заголовка главной страницы Angular
  Given я открываю сайт "https://angular.io"
  When я проверяю заголовок страницы
  Then заголовок должен быть "Angular"