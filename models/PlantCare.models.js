const mongoose = require('mongoose')
const PlantProduct = require('./Products.models')

const plantCareSchema = new mongoose.Schema({
        weights: [String],
        usageInstructions: String,
        dosage: String,
        sizes: [String],
        colors: [String]
    })

const PlantCare = PlantProduct.discriminator('PlantCare', plantCareSchema)

module.exports = PlantCare
