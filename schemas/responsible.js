const mongoose = require('mongoose');

const responsible  = mongoose.Schema({
    firstname: String,
    lastname: String,
    professorID: String,
    email: String,
    group: String
})

module.exports = mongoose.model('responsible', responsible);
