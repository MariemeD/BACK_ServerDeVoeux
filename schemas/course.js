const mongoose = require('mongoose');

const course  = mongoose.Schema({
    name: String,
    type: {type: String, default: ""},
    professor: {type: String, default: ""},
    semester: {type: String, default: ""},
    covered: {type: Boolean, default: false}
})

module.exports = mongoose.model('course', course);
