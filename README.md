# Інструкції для запуску проекту

## Запуск серверної частини

1. Знаходячись у корені проекту в консолі перейти в папку сервера:

   - `cd server`

2. Завантажити необхідні пакети для серверної частини (один раз перед першим запуском):

   - `npm i`

3. Запустити серверну частину:

   - `npm start`

## Запуск клієнтської частини

1. Знаходячись у корені проекту в консолі перейти в папку клієнта:

   - `cd client`

2. Завантажити необхідні пакети для клієнтської частини (один раз перед першим запуском):

   - `npm i`

3. Запустити клієнтську частину:

   - `npm start`

- Додаток буде доступний у браузері за адресою [http://localhost:3000](http://localhost:3000) (або на іншому вільному порту).

## Додатки

- Під час роботи з додатком в dev-режимі будуть потдібні дані банківських карт:

  - для оплати роботи з карти buyer`а при створенні контеста:
    - Card number: 4111111111111111
    - Expires end: 09/26
    - cvc/cvv: 505
  - для виведення коштів на карту creator`а:
    - Card number: 5105105105105100
    - Expires end: 09/26
    - cvc/cvv: 510

- Дані користувачів:

  - для ролі buyer (він же customer):
    - email: buyer@gmail.com
    - password: buyer@gmail.com
  - для ролі creative (він же creator):
    - email: creative@gmail.com
    - password: creative@gmail.com
