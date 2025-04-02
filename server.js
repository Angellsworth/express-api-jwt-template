// Load environment variables from a .env file into process.env
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

const testJwtRouter = require('./controllers/test-jwt')
const authRouter = require('./controllers/auth')

// Connect to your MongoDB database using the URI stored in your .env file
mongoose.connect(process.env.MONGODB_URI)

// When the connection to MongoDB is successful, this message will log in the terminal
mongoose.connection.on('connected', () => {
    console.log(`Angela! You are connected to MongoDB ${mongoose.connection.name}`)
})

// Mount Middleware
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

// Routes would be defined here
app.use('/auth', authRouter)
app.use('/test-jwt', testJwtRouter)


// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Angela! The express app is ready!')
})