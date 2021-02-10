const mongoose = require('mongoose');

const course  = mongoose.Schema({
    name: String,
    type: String,
    professor: String
})

module.exports = mongoose.model('course', course);
