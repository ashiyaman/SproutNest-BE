const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: [String],
        enum: ['Indoor Plants', 'Outdoor Plants', 'Air Purifying Plants', 'Plant Care', 'Pots and Planters'],
        required: true
    }
},
{timestamps: true}
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category