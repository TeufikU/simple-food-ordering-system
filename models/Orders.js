const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Creating schema for restaurants, so We can import new restaurants in database with written key names as shown below
const OrderSchema = new Schema({
    user: {
        type: String,
    },
    restaurantName: {
        type: String,
    },
    foodName: {
        type: String,
    },
    orderDate: {
        type: String,
    },
})

module.exports = Orders = mongoose.model('orders', OrderSchema)