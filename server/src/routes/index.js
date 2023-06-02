const express = require('express')
const morgan = require('morgan')
const userRouter = require('./user.route')
const loginRouter = require('./login.route')
const charRouter = require('./char.route')
const server = express()


// Middle wares
server.use(morgan('dev'))
server.use(express.json())

// Routes

server.use("/user", userRouter)
server.use("/login", loginRouter)
server.use("/character", charRouter)

// Handle requests to unknown routes
server.all('*', (req, res) => {
    res.status(404).send(`Unknown route: ${req.originalUrl}`);
});


module.exports = server