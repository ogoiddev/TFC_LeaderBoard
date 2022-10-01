# 🚧 README em construção 🚧

* Uma API RestFull NodeJs Express, com MySql by Docker, em TypeScript, com Classes (POO) e princípios S.O.L.I.D. aplicados.

* o FrondEnd foi aplicado pela Trybe, meu trabalho foi disponibilizar uma API para salvar gerenciar e fornecer informacoes de uma tabela com resultados de jogos de um campeonato de futebol.

## Passo a passo executado - Como eu trabalhei nesse projeto!

## README

* Leitura atenta das orientações iniciais;

## Instalações e configurações iniciais

* Bibliotecas instaladas no BackEnd:

```
$ npm i joi cors @types/cors express-async-errors uuidv4
```

* Bibliotecas declaradas em **`packages.npm`** para os testes:

```
joi
cors
@types/cors
uuidv4
express-async-errors
```

* Variaveis configuradas em **`.env`**:

```
JWT_SECRET=jwt_secret
APP_PORT=3001
DB_USER=root
DB_PASS=123456
DB_HOST=db 
DB_PORT=3002
```

* rodando o comando **`npm run build`** na pasta do back-end para fazer o build da aplicação;


## Configurando Dockerfile de Front-End e Back-End

* Front-End:

```
FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package* ./

RUN npm install

COPY . .

CMD ["npm", "start"]
```

* Back-End:

```
FROM node:16.14-alpine

WORKDIR /app-backend

COPY package* ./

RUN npm install

COPY . .

RUN npx tsc

CMD ["npm", "start"]
```

## Bcrypt - Password

$ npm install bcrypt

## API secure (Helmet)

$ npm install helmet


## Swagger

$ npm i

* @types/swagger-ui-express

* swagger-autogen

* swagger-ui-express

