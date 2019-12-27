const db = require('../database/mysql');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send("Home page working");
    });

    app.get('/user', function (res, res) {
        db.connect();
        db.query('SELECT * FROM users limit 10', function (error, results) {
            if (error) {
                console.error(error)
            }
            res.send(results);
        });

        db.end();
    });

}
