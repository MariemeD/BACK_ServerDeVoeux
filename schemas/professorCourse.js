const mongoose = require('mongoose');

const professorCourse  = mongoose.Schema({
    name: Array
})

module.exports = mongoose.model('professorCourse', professorCourse);
