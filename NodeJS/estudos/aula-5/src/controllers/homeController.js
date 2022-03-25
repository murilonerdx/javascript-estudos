const HomeModel = require('../model/HomeModel.js');

// HomeModel.create({titulo: 'Eu sou lindo', descricao: 'Eu sou muito lindo é verdade!'})
  // .then(dados => console.log(dados))
  // .catch(e => console.log(e));//

exports.paginaInicial = (req, res, next) => {
  // Essa mensagem vai ficar salva no cookie por 7 dias, mesmo fechando a aplicação e o navegador e tudo mais.
  req.session.usuario = {nome: 'Murilo', logado: true};
  req.flash('info', 'Informação salva - 1');
  console.log(req.session.usuario);

  //Pegando alguma informação
  console.log(req.flash('info'));
  res.render('index');
};

exports.trataPost = (req, res, next) => {
  res.send(req.body);
};