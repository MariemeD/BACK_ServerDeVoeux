const mongoose = require('mongoose');

const prime  = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('prime', prime);
