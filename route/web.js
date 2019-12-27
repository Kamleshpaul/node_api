const HomeController = require('../controller/HomeController');
const UserController = require('../controller/UserController');

module.exports = function (app) {
    app.get('/', HomeController.index);
    app.get('/user', UserController.index);
    app.get('/user/:id', UserController.show);

}
