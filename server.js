// bring in express
const express = require('express');

// create a server
const server = express()

// middleware
server.use(helmet());
server.use(express.json());
server.use(logger);
server.use(cors());

// router
// const DishRouter = require('./router/dish_router')

// server.use('./api/dish', DishRouter);

server.get('/', (req, res) => {
    res.send('This is a test page')
});

function logger(req, res, next){
    console.log(`${req.method} Request`)
    next();
}

module.exports = server;