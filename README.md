Тестирование nestjs


Запуск


```
docker copmpose build up -d --build
docker compose up
```

Ручная отладка:

Запустить скрипты для отладки* в разных консолях:

```
python test.py
python test2.py
```

Убедиться, что статус ответа выводится с кодом 201.

```
для python test.py
STATUS_CODE 201 REASON Created TEXT {"answer":"Hi!"} JSON {'answer': 'Hi!'}

для python test2.py
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