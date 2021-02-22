const mongoose = require('mongoose');

const serveur  = mongoose.Schema({
    id: {type: String, default: "SDV"},
    name: {type: String, default: "Serveur de voeux"},
    anneeScolaire: {type: String, default: "2020 - 2021"},
    status: {type: Boolean, default: true}
})

module.exports = mongoose.model('serveur', serveur);
