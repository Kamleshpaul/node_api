
exports.auth = (req, res, next) => {
    if (req.body.id == "112633") {
        next();
    } else {
        res.send({ message: 'Unauthorized' });
    }

};