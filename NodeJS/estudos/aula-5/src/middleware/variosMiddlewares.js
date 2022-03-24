exports.middlewareum = (res, req, next) => {
    console.log('M1');

    next();
}

exports.middlewaredois = (res, req, next) => {
    console.log('M2');

    next();
}

exports.middlewaretres = (res, req, next) => {
    console.log('M3');
    next();
}