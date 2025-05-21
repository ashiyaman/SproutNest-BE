const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const UserAddress = require('./UserAddress.models')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addresses: [{
        type: Schema.Types.ObjectId,
        ref: 'UserAddress'
    }]
},
{timestamps: true}
)

const SproutNestUser = mongoose.model('SproutNestUser', userSchema)

module.exports = SproutNestUser