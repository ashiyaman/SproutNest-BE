const mongoose = require('mongoose')
const PlantProduct = require('./Products.models')

const planterSchema = new mongoose.Schema({
        size: String,
        color: String,
        material: String,
        shape: String
    })

const Planter = PlantProduct.discriminator('Planter', planterSchema)

module.exports = Planter