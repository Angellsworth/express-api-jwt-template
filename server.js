// Load environment variables from a .env file into process.env
const dotenv = require('dotenv')
dotenv.config()

// Import the Express library (used to build web apps and APIs)
const express = require('express')
// Create an instance of an Express app
const app = express()

// Import Mongoose (used to connect and interact with MongoDB)
const mongoose = require('mongoose')

// Import CORS middleware (allows your frontend and backend to talk to each other, even if they're on different ports)
const cors = require('cors')

// Import Morgan (a logging tool that shows HTTP request info in the terminal)
const logger = require('morgan')

// Connect to your MongoDB database using the URI stored in your .env file
mongoose.connect(process.env.MONGODB_URI)

// When the connection to MongoDB is successful, this message will log in the terminal
mongoose.connection.on('connected', () => {
    console.log(`Angela! You are connected to MongoDB ${mongoose.connection.name}`)
})

// ====================
// Mount Middleware
// ====================
// enable CORS (Cross-Origin Resource Sharing)
app.use(cors())
// parse incoming JSON data in requests (so you can access req.body)
app.use(express.json())
// log HTTP requests to the terminal in 'dev' format
app.use(logger('dev'))

// ====================
// Routes would be defined here
// Example: app.use('/api/users', userRoutes)
// ====================

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Angela! The express app is ready!')
})