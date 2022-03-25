require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.connectionString)
    .then(() => {
        console.log('Conectado a base de dados');
        app.emit('done');
    });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');



const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middleware/middlewareGlobal.js');
// const { middlewareum, middlewaredois, middlewaretres } = require('./src/middleware/variosMiddlewares.js');

app.on('done', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
      });
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'meu-secredo',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 3600 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({
        mongoUrl: process.env.connectionString,
    })
});

app.set('views', path.resolve(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use(middleware);
app.use(sessionOptions);
app.use(flash())
// app.use(middlewareum);
// app.use(middlewaredois);
// app.use(middlewaretres);
app.use(routes);

