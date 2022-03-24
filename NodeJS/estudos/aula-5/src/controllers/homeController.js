exports.paginaInicial = (req, res, next) => {
  res.render('index');
};

exports.trataPost = (req, res, next) => {
  res.send(req.body);
};