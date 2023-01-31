const { create, findAll, deleteOne, update, findOne } = require('../controllers/pet.controller');

const express = require('express');
const petRouter = express.Router();

petRouter
    .route('/')
    .get(findAll)
    .post(create)
petRouter
    .route('/:id')
    .put(update)
    .delete(deleteOne)
    .get(findOne)
    
module.exports = petRouter;