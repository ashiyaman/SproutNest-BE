const mongoose = require('mongoose')
const express = require('express')
const fs = require('fs')
const cors = require('cors')

const initializeDatabase = require('./db/db.connect')
const PlantCategory = require('./models/PlantCategories.models')
const Plant = require('./models/Plants.models')
const PlantCare = require('./models/PlantCare.models')
const Planter = require('./models/Planters.models')
const PlantProduct = require('./models/Products.models')
const User = require('./models/users/User.models')
const UserAddress = require('./models/users/UserAddress.models')
const app = express()

app.use(express.json())
app.use(cors())

/*const jsonPData = fs.readFileSync('./plants.json')
const plantsData = JSON.parse(jsonPData)

const jsonPlData = fs.readFileSync('./plantCare.json')
const plantsCareData = JSON.parse(jsonPlData)

const jsonData = fs.readFileSync('./planters.json')
const plantersData = JSON.parse(jsonData)*/

initializeDatabase()

app.get('/', (req, res) => {
    try{
        res.send('Welcome to SproutNest - Online plant store where nature meets convenience.')
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})

const seedCategoryData = async() => {
    try{
        for(const categoryData of categoriesData){
            const category = new PlantCategory({
                name: categoryData.name
            })
            await category.save()
        }
    }
    catch(error){
        console.log(error)
    }
}

const seedPlantData = async() => {
    try{
        for(const plantData of plantsData){
            const plant = new Plant({
                name: plantData.name,
                category: plantData.category,
                subCategory: plantData.subCategory,
                price: plantData.price,
                details: plantData.details,    
                tags: plantData.tags,
                images: plantData.images,
                rating: plantData.rating,
                reviews: plantData.reviews,
                stock: plantData.stock,
                size: plantData.size,
                waterIntake: plantData.waterIntake,
                sunlightRequired: plantData.sunlightRequired,
                careDifficulty: plantData.careDifficulty,
                fertilizer: plantData.fertilizer
            })
            await plant.save()
        }
    }
    catch(error){
        console.log(error)
    }
}

const seedPlantCareData = () => {
    try{
        for(const plantCareData of plantsCareData){
            const plantCare = new PlantCare({
                name: plantCareData.name,
                category: plantCareData.category,
                subCategory: plantCareData.subCategory,
                price: plantCareData.price,
                details: plantCareData.details,    
                tags: plantCareData.tags,
                images: plantCareData.images,
                rating: plantCareData.rating,
                reviews: plantCareData.reviews,
                stock: plantCareData.stock,
                size: plantCareData.size,
                weight: plantCareData.weight,
                usageInstructions: plantCareData.usageInstructions,
                dosage: plantCareData.dosage,
                color: plantCareData.color
            })
            plantCare.save()
        }
    }
    catch(error){
        console.log(error)
    }
}


const seedPlanterData = () => {
    try{
        for(const planterData of plantersData){
            const planter = new Planter({
                name: planterData.name,
                category: planterData.category,
                subCategory: planterData.subCategory,
                price: planterData.price,
                details: planterData.details,    
                tags: planterData.tags,
                images: planterData.images,
                rating: planterData.rating,
                reviews: planterData.reviews,
                stock: planterData.stock,
                size: planterData.size,
                material: planterData.material,
                shape: planterData.material,
                color: planterData.color
            })
            planter.save()
        }
    }
    catch(error){
        console.log(error)
    }
}

//seedCategoryData()
//seedPlantData()
//seedPlantCareData()
//seedPlanterData()

app.get('/categories', async(req, res) => {
    try{
        const categories = await PlantCategory.find()
        if(!categories){
            res.status(404).json({error: 'Categories not found. Please add One.'})
        }
        res.status(200).json(categories)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/products', async(req, res) => {
    try{
        const products = await PlantProduct.find()
        if(!products){
            res.status(404).json({error: 'Products not found. Please add One.'})
        }
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/categories/:categoryId', async(req, res) => {
    try{
        const products = await PlantProduct.find({category: req.params.categoryId})
        if(!products){
            res.status(404).json({error: 'Products not found. Please add One.'})
        }
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/products/:productId', async(req, res) => {
    try{
        const product = await PlantProduct.findById(req.params.productId)
        if(!product){
            res.status(404).json({error: 'Product not found.'})
        }
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/products/category/:categoryId', async(req, res) => {
    try{
        const products = await PlantProduct.find({category: req.params.categoryId})
        if(!products){
            res.status(404).json({error: 'Products not found.'})
        }
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/user', async(req, res) => {
    try{
        const user = await User.find()
        console.log(user)
        if(!user){
            res.status(404).json({error: 'User not found'})
        }
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.post('/user', async(req, res) => {
    const { name, designation, phoneNo, street, city, country, zip, addressType } = req.body;
    try{
        const address = new UserAddress({
            addressType, street, city, zip, country
        })
        const userAddress = await address.save()

        const user = new User({
            name ,
            addresses: userAddress._id,
            designation,
            phoneNo
        })
        await user.save()
        res.status(201).json({ message: "User created successfully", user: user });
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})

const PORT = process.env.PORT
app.listen(PORT, (() => console.log('Server  is running on port', PORT)))

