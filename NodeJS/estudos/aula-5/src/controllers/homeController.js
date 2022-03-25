const HomeModel = require('../model/HomeModel.js');

HomeModel.create({titulo: 'Eu sou lindo', descricao: 'Eu sou muito lindo é verdade!'})
  .then(dados => console.log(dados))
  .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
  res.render('index');
};

exports.trataPost = (req, res, next) => {
  res.send(req.body);
};