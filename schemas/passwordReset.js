const { Schema, model } = require('mongoose')
const passwordReset = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    token: {
        type: Schema.Types.String,
        required: true
    }
}, {
    timestamps: true
})
passwordReset.index({ 'updatedAt': 1 }, { expireAfterSeconds: 300 })
const PasswordReset = model('passwordReset', passwordReset)
module.exports = PasswordReset
