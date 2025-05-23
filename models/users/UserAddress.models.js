const mongoose = require('mongoose')

const userAddressSchema = new mongoose.Schema({
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
    }  ,
    phoneNo: String ,
    isShippingAddress: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SproutNestUser',
        required: true
    }
},
{timestamps: true}
)

const UserAddress = mongoose.model('UserAddress', userAddressSchema)

module.exports = UserAddress