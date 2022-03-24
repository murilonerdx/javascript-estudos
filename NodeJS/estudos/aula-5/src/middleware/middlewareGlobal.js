module.exports = (req, res, next) => {
    if(req.body.cliente){
        console.log(`Vi que você colocou o nome do cliente como ${req.body.cliente}`);
    }
    next();
}