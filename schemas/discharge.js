const mongoose = require('mongoose');

const discharge  = mongoose.Schema({
    name: String,
    object : String,
    hours : Number,
    comment : String,
    professor : String
})

module.exports = mongoose.model('discharge', discharge);
