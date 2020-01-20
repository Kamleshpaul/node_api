const notes = require('../controllers/note.controller.js');

module.exports = function (app) {

	app.get('/', function(req, res){
		res.send({
			'message' : 'this is simple node api'
		})
	});
    
    // Note Routes;
    app.post('/notes', notes.create);
    app.get('/notes', notes.findAll);
    app.get('/notes/:id', notes.findOne);
    app.put('/notes/:id', notes.update);
    app.delete('/notes/:id', notes.delete);
}


