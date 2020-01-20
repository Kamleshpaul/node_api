const chai = require('chai');
var should = chai.should();
const chaiHttp = require('chai-http');
const host = "http://localhost:3000";


const Note = require('../models/note.model.js');

chai.use(chaiHttp);

describe('Notes Unit Test Cases', () => {

    it('Note create test', (done) => {
        chai.request(host).post('/notes').send({"title": 'test title', "content": 'test content'}).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('content');
            res.body.should.have.property('createdAt');
            res.body.should.have.property('updatedAt');
        })
        done();
    })

    it('Get all Notes test', (done) => {
        chai.request(host).get('/notes').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('Array');
            done();
        })

    })

    it('Get Single Note test', (done) => {
        const note = new Note({"title": 'test title', "content": 'test content'});
        note.save();        
        chai.request(host).get('/notes/' + note._id).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('content');
            res.body.should.have.property('createdAt');
            res.body.should.have.property('updatedAt');
            res.body.should.have.property('_id').eql(note._id);
        });

        done();
    })
})
