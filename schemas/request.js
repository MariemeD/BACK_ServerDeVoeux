const mongoose = require('mongoose');

const request  = mongoose.Schema({
    requestor : String,
    emailRequestor : String,
    detailRequest : String,
    groupRequested : String,
    courseRequested : String,
    response : Boolean
})

module.exports = mongoose.model('request', request);
