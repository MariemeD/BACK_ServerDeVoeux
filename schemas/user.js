const mongoose = require('mongoose');

const user  = mongoose.Schema({
    email: String,
    password: String,
    profile: String
})

module.exports = mongoose.model('user', user);
