const mongoose = require('mongoose');

const course  = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('course', course);
