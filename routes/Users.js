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
                            .then(() => {
                                res.json({status: 'You have successfully registered!' })
                            })
                            .catch(() => {
                                res.send({error: 'Ooops, something went wrong'})
                            })
                    })
                } else {
                    res.json({error: 'That user already exists!' })
                }
            })
            .catch(() => {
                res.send({error: 'Ooops, something went wrong'})
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
                        res.send({ error: "User password don't match" })
                    }
                } else {
                    res.send({ error: "Oooops, that user does not exist." })
                }
            })
            .catch(err => {
                err.json({error: "Oooops, something went wrong"})
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
                    res.send({error: "User does not exist"})
                }
            })
            .catch(err => {
                res.send({error: 'Something went wrong'})
            })
    })

    module.exports = users