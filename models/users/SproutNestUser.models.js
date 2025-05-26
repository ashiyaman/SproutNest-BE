const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const UserAddress = require('./UserAddress.models')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please a valid Email address']
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