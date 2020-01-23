require('dotenv').config()
const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {

    if (req.headers.authorization) {
        let access_token = req.headers.authorization;
        let token = access_token.split(' ')[1];

        const { email } = jwt.verify(token, process.env.JWT_TOKEN);
        req.email = email
        next();

    } else {
        res.send({ message: 'Unauthorized' });
    }

};