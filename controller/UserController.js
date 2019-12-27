const db = require('../database/mysql');

const UserModel = require('../model/UserModel');

module.exports = {

    index: function (req, res) {

        UserModel.all(db, (err, data) => {
            if (err) {
                return console.error(err);
            }

            res.send(data);

        })

    },
    show: function (req, res) {
        UserModel.findById(db, req.params.id, (err, data) => {
            if (err) {
                return console.error(err);
            }

            res.send(data);

        })
    }
}
