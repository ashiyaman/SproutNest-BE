const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Indoor Plants', 'Outdoor Plants', 'Flowering Plants', 'Air Purifying Plants', 'Plant Care', 'Pots and Planters'],
        required: true
    }
},
{timestamps: true}
)

const PlantCategory = mongoose.model('PlantCategory', categorySchema)

module.exports = PlantCategory