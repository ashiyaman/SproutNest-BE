const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI

const initializeDatabase = async() => {
    try{
        await mongoose
            .connect(MONGODB_URI)
            .then(() => console.log('Connected to Database successfully.'))
    }
    catch(error){
        console.log('Error while connecting to database', error)
    }
}

module.exports = initializeDatabase