const mongoose = require('mongoose');

const professor  = mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    isSupervisor: Boolean,
    isAdmin: Boolean,
    status: String,
    origin: String,
    hoursDone: Number,
    lastConnection: Date,
    lastWishUpdate: Date,
    modules: Array
})

module.exports = mongoose.model('professor', professor);
