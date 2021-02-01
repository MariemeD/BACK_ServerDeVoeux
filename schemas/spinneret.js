const mongoose = require('mongoose');

const spinneret  = mongoose.Schema({
    name: String,
    idgroup: String,
    modules: Array
})

module.exports = mongoose.model('spinneret', spinneret);
