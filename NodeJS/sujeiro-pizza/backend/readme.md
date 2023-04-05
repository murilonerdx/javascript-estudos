>yarn init -y: cria a estrutura padrão package.json

>yarn add typescript -D : instalando typescript em modo desenvolvimento já que depois o ambiente ele transfere tudo para javascript.

>yarn add express: adiciona express para node.js

>yarn add @types/express -D: instalando tipos para que o ambiente entenda que é express e ter um auto complete

>yarn tsc --init: inicia projeto typescript tsconfig


>yarn add ts-node-dev -D: recurso para inicializar node.js
em scripts coloque -> "dev": "ts-node-dev --transpile-only src/server.ts"
agora apenas rodar yarn dev

> yarn prisma migrate dev


>migration com prisma

>npm install @prisma/client

>npx prisma init

>yarn add bcryptjs

> yarn add @types/bcrypt -D: cryptografar senha

> yarn add jsonwebtoken: jwt token para gerar

> yarn add @types/jsonwebtoken -D

> yarn add dotenv: Para conseguir acessar dados .env

> yarn add multer: Serve para ajudar a salvar imagens no backend

> yarn add @types/multer -D

> yarn prisma generate
