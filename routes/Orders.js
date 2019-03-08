const express = require("express")
const orders = express.Router()
const cors = require("cors")

const Order = require("../models/Orders")
orders.use(cors())


//Adding new restaurant names to the MongoDB
orders.post('/', (req, res) => {
    const newListItem = new Order({
        user: req.body.user,
        restaurantName: req.body.restaurantName,
        foodName: req.body.foodName,
        orderDate: req.body.orderDate,
    })

    newListItem.save().then(item=>res.json(item)).catch((err)=>{
        console.log(err)
    })
})

orders.get('/', (req, res) => {
    Order.find().then(list=> res.json(list));
})

orders.delete('/delete/:orderID', (req, res) => {
    Order.deleteOne(
        {
            _id:req.params.orderID
        }
    ).then(console.log("You have deleted order " + req.params.orderID));
})

//Getting data from MongoDB
orders.get('/:orderDate', (req, res) => {
    Order.find(
        {
            orderDate:{$eq:req.params.orderDate}
        }
    ).then(list=> res.json(list));
})

module.exports = orders