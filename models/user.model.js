const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', NoteSchema);