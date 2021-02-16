const mongoose = require('mongoose');

const course  = mongoose.Schema({
    name: String,
    type: String,
    professor: String,
    semester: String,
    covered: Boolean
})

module.exports = mongoose.model('course', course);
