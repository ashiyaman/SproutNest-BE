const mongoose = require('mongoose')

const plantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    size: {
        type: String,
        enum: ['20-25cm', '30-40cm', '45-60cm', '55-70cm'],
        required: true
    },
    tags: [String],
    images: {
        type: [String],
        required: true
    }
},
{timestamps: true}
)

const Plants = mongoose.model('Plants', plantsSchema)

module.exports = Plants