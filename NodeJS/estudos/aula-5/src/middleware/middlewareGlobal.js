exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente){
        console.log(`Vi que você colocou o nome do cliente como ${req.body.cliente}`);
    }
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code == 'EBADCSRFTOKEN') {
        return res.send('BAD CSRF');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}