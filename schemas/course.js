const mongoose = require('mongoose');

const course  = mongoose.Schema({
    name: String,
    type: {type: String, default: ""},
    professor: {type: Array},
    semester: {type: String, default: ""},
    covered: {type: Boolean, default: false},
    hoursPerGroup: {type: Number, default: 0},
    nbrOfGroup: {type: Number, default: 0},
    group: {type: String, default: ""},
    hoursDone: {type: Number, default: 0},
})

module.exports = mongoose.model('course', course);
