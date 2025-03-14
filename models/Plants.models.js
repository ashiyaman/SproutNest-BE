const mongoose = require('mongoose')
const PlantProduct = require('./Products.models')

const plantSchema = new mongoose.Schema({
        size: {
            type: String,
            enum: ['20-30cm', '30-45cm', '45-60cm', '55-70cm'],
            required: true
        },
        waterIntake:String,
        sunlightRequired: String,
        careDifficulty: String,
        fertilizer: String
    })

const Plant = PlantProduct.discriminator('Plant', plantSchema)

module.exports = Plant