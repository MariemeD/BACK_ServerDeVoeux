const mongoose = require('mongoose');

const user  = mongoose.Schema({
    name: String,
    mandatoryHours: Number,
    extraHours: Number
})

module.exports = mongoose.model('user', user);
