FROM node:21-alpine3.18
RUN apk update && apk add --update npm
RUN apk add nano


WORKDIR /code
COPY ./request_consumer/ ./request_consumer
WORKDIR /code/request_consumer
RUN chmod +x /code/request_consumer/package.json
RUN npm install