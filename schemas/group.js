const mongoose = require('mongoose');

const group  = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('group', group);
