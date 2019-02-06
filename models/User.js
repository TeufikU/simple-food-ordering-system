    const mongoose = require("mongoose")
    const Schema = mongoose.Schema

    //Creating user schema for importing data to database with down written key names
    const UserSchema = new Schema({
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    })

    module.exports = User = mongoose.model('users', UserSchema)