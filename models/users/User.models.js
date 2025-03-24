const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const UserAddress = require('./UserAddress.models')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: String,
    addresses: [{
        type: Schema.Types.ObjectId,
        ref: 'UserAddress',
        required: true
    }],
    phoneNo: String
},
{timestamps: true}
)

const User = mongoose.model('User', userSchema)

module.exports = User