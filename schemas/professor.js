const mongoose = require('mongoose');

const professor  = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    status: String,
    service: String,
    department: String,
    composante: String
})

module.exports = mongoose.model('professor', professor);
