const express = require("express")
const restaurants = express.Router()
const cors = require("cors")

const Restaurant = require("../models/Restaurant")
restaurants.use(cors())


//Adding new restaurant names to the MongoDB
restaurants.post('/list', (req, res) => {
    const newListItem = new Restaurant({
        name: req.body.name,
        location: req.body.location,
        workinghours: req.body.workinghours,
    })

    newListItem.save().then(item=>res.json(item)).catch((err)=>{
        console.log(err)
    })
})

//Getting data from MongoDB
restaurants.get('/list', (req, res) => {
    Restaurant.find().then(list=> 
       { 
           if(list.length>0){
                res.json(list)
            }else{
                res.json({status: 'There is no restaurants added'})  
            }
        }
    )
})

module.exports = restaurants