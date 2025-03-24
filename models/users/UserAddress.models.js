const mongoose = require('mongoose')

const userAddressSchema = new mongoose.Schema({
    addressType: {
        type: String,
        enum: ['Home', 'Work', 'Other'],
        required: true,
        default: 'Home'
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        default: 'India'
    }    
},
{timestamps: true}
)

const UserAddress = mongoose.model('UserAddress', userAddressSchema)

module.exports = UserAddress