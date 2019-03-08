    const mongoose = require("mongoose")
    const Schema = mongoose.Schema

    //Creating schema for restaurants, so We can import new restaurants in database with written key names as shown below
    const RestaurantSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        workinghours: {
            type: String,
            required: true
        }
    })

    module.exports = Restaurant = mongoose.model('restaurants', RestaurantSchema)