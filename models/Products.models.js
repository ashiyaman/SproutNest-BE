const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const plantProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'PlantCategory',
        required: true
    }],
    subCategory: String,
    price: {
        type: Number,
        required: true
    },
    details: String,    
    tags: [String],
    images: {
        type: [String],
        required: true
    },
    rating: Number,
    reviews: [String],
    stock: {
        type: Number,
        default: 0
    }
},
{timestamps: true, discriminatorKey: 'productType'})

const PlantProduct = mongoose.model('PlantProduct', plantProductSchema)

module.exports = PlantProduct