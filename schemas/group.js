const mongoose = require('mongoose');

const group  = mongoose.Schema({
    name: String,
    idgroup: String,
    modules: Array
})

module.exports = mongoose.model('group', group);
