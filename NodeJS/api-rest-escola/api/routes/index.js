const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes')

module.exports = app => {
    app.use(bodyParser.json());
    app.get('/', (req, res) => res.status(200).send({message: 'boas-vindas a API'}));
    app.use(pessoas);
}