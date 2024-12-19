Feature: Проверка полей для ввода
  Scenario: Проверка возможности ввода корректных в инпутах
    Given Открыл интерфейс
    When Выбираю действие "<action>"
    And  Ввожу число "<number>" для 2 числа
    Then Текст инпута получается "<result>" 

    Examples:
    | action | number | result | 
    | divide | 0 | 1 | 
    | divide | 2 | 2 | 
    | plus | 0 | 0 | 