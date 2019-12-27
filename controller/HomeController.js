const db = require('../database/mysql');


module.exports = {

    index: function (req, res) {
       res.send("Home Page ...");
    }
}
