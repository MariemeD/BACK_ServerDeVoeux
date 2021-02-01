const mongoose = require('mongoose');

const status  = mongoose.Schema({
    name: String,
    mandatoryHours: Number,
    extraHours: Number
})

module.exports = mongoose.model('status', status);
