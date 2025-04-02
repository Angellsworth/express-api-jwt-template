const mongoose = require('mongoose')


//build Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    }
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword
    }
})

//register the model
const User = mongoose.model('User', userSchema)


// Makes it available in your app (like in controllers)
module.exports = User