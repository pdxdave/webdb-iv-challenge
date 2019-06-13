const knex = require('knex')

// const knexConfig = require('../knexfile.js')

// const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    update,
    add,
    remove
}

function find(){
    return db('dish')
}

function findById(id){
    return db('dish')
    .where({id})
}

function add(newPost){
    return db('dish')
    .insert(newPost)
}

function update(id, change){
    return db('dish')
    .where({id})
    .update(change)
}

function remove(id){
    return db('dish')
    .where({id})
    .del()
}