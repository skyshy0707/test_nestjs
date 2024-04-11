Задание на изучение основ nestjs `REST-API сервер`

Cервер принимает POST запрос на /api/v1/request, payload запроса это JSON:

```
{wait: <n>, answer: <answ>}
```

где n — количество секунд ожидания, answer — ответ, который должен вернуть сервер

1. Cервер валидирует входные параметры (все поля обязательны; wait >=0; len(answer) >= 3)
2. Ждёт <n> секунд
3. Возвращает json {answer: <answ>} (в зависимости от payload и пункта 1.)

Условия:

1) Запросы от нескольких клиентов не блокируют друг друга.
2) Использовать NestJS
3) Результат выполнения - ссылка на репо в github


Запуск сборки:


```
docker-compose up -d --build
docker-compose up
```

Ручная отладка:

1. Запустить скрипты для отладки* в разных консолях:

```
python test.py
python test2.py
```

2. Убедиться, что статус ответа выводится с кодом 201.

```
для python test.py:
STATUS_CODE 201 REASON Created TEXT {"answer":"Hi!"} JSON {'answer': 'Hi!'}

для python test2.py:
STATUS_CODE 201 REASON Created TEXT {"answer":"Hey!"} JSON {'answer': 'Hey!'}
```

*Скрипты для отладки (test.py, test2.py) находятся в корне проекта.


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">