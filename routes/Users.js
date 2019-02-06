    const express = require("express")
    const users = express.Router()
    const cors = require("cors")
    const jwt = require("jsonwebtoken")
    const bcrypt = require("bcrypt")

    const User = require("../models/User")
    users.use(cors())

    process.env.SECRET_KEY = 'secret'

    //Arrow function for registering a new user in MongoDB
    users.post('/register', (req, res) => {
        const userData = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        }

        //Determines if choosen mail already exists
        User.findOne({
            email: req.body.email
        })
            .then(user => {
                if (!user) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        userData.password = hash
                        User.create(userData)
                            .then(user => {
                                res.json({ status: user.email + ' registered!' })
                            })
                            .catch(err => {
                                res.send('error: ' + err)
                            })
                    })
                } else {
                    res.json({ error: 'User already exists' })
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    })

    //Arrow function for checking user data from which We can be logged in to the Web APP
    users.post('/login', (req, res) => {
        User.findOne({
            email: req.body.email
        })
            .then(user => {
                if (user) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        const payload = {
                            _id: user._id,
                            fullname: user.fullname,
                            email: user.email
                        }
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        res.send(token)
                    } else {
                        res.json({ error: "User does not exist" })
                    }
                } else {
                    res.json({ error: "User does not exist" })
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    })

    //Sending some data to dashboard to be used later
    users.get('/dashboard', (req, res) => {
        var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

        User.findOne({
            _id: decoded._id
        })
            .then(user => {
                if (user) {
                    res.json(user)
                } else {
                    res.send("User does not exist")
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    })

    module.exports = users