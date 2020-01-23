require('dotenv').config()
const jwt = require('jsonwebtoken');

const User = require('../models/user.model.js');


exports.register = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({ message: "Name can not be empty" });
    }
    if (!req.body.email) {
        return res.status(400).send({ message: "Email can not be empty" });
    }
    if (!req.body.password) {
        return res.status(400).send({ message: "Password can not be empty" });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while Register."
        });
    });
};


exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).send({ message: "Email is required" });
    }
    if (!password) {
        return res.status(400).send({ message: "Password is required" });
    }
    let token = jwt.sign({ email }, process.env.JWT_TOKEN);
    res.send({
        access_token: token
    });
}
