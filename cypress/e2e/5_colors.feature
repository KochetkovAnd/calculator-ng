Feature: Проверка цветов
  Scenario: Проверка цветов
    Given Открыл интерфейс
    When Выбираю основание "<base1>" и ввожу число "<value1>" для 1 числа
    And Выбираю основание "<base2>" и ввожу число "<value2>" для 2 числа
    And Выбираю действие "<action>"
    And Нажимаю кнопку подсчета
    Then Результат окрашен в "<color>"
  
  Examples:
    | base1 | value1 | base2 | value2 | action | color |
    | 10 | 0 | 10 | 0 | plus | rgb(0, 0, 0) |
    | 10 | 1 | 10 | 0 | plus | rgb(0, 128, 0) |
    | 10 | 0 | 10 | 1 | minus | rgb(255, 0, 0) |
    | 2 | 1 | 16 | AA | divide | rgb(0, 128, 0) |