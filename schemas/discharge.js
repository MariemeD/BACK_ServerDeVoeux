const mongoose = require('mongoose');

const discharge  = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('discharge', discharge);
