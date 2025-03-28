const mongoose = require('mongoose')
const PlantProduct = require('./Products.models')

const plantSchema = new mongoose.Schema({
        sizes: {
            type: String,
            enum: ['S', 'M', 'L', 'XL', 'XXL'],
            required: true
        },
        waterIntake:String,
        sunlightRequired: String,
        careDifficulty: String,
        fertilizer: String
    })

const Plant = PlantProduct.discriminator('Plant', plantSchema)

module.exports = Plant