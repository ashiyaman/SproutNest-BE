const mongoose = require('mongoose')
const express = require('express')

const initializeDatabase = require('./db/db.connect')
const app = express()

app.use(express.json())

initializeDatabase()

app.get('/', (req, res) => {
    try{
        res.send('Welcome to SproutNest - Online plant store where nature meets convenience.')
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
})



const PORT = process.env.PORT
app.listen(PORT, (() => console.log('Server  is running on port', PORT)))

