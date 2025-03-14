const mongoose = require('mongoose')
const PlantProduct = require('./Products.models')

const plantCareSchema = new mongoose.Schema({
        weight: [String],
        usageInstructions: String,
        dosage: String,
        size: String,
        color: String
    })

const PlantCare = PlantProduct.discriminator('PlantCare', plantCareSchema)

module.exports = PlantCare
