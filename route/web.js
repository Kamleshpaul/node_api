const Auth = require("../middleware/auth")

const notes = require('../controllers/note.controller.js');
const user = require('../controllers/user.controller.js');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.send({
            'message': 'this is simple node api'
        })
    });

    app.post('/register', user.register);
    app.post('/login', user.login);

    app.post('/notes', notes.create);
    app.get('/notes', Auth.auth, notes.findAll);
    app.get('/notes/:id', notes.findOne);
    app.put('/notes/:id', notes.update);
    app.delete('/notes/:id', notes.delete);
}


