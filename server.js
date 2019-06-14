// bring in express
const express = require('express');

// create a server
const server = express()

// bring in extra tools
const helmet = require('helmet');
const cors = require('cors');

// middleware
server.use(helmet());
server.use(express.json());
server.use(logger);
server.use(cors());

// router
const DishRouter = require('./router/dish-router');

server.use('/api/dish', DishRouter);

server.get('/', (req, res) => {
    res.send('This is a test page')
});

function logger(req, res, next){
    console.log(`${req.method} Request`)
    next();
}

module.exports = server;