const mongoose = require('mongoose');

const origin  = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('origin', origin);
