const Pet = require('../models/pet.model')

const create = (req, res) => {
    Pet.create(req.body)
    .then(pet => res.status(201).json(pet))
    .catch(err => res.status(400).json(err))
};

const findAll = (req, res) => {
    Pet.find()
    .then(pet => res.status(200).json(pet))
    .catch(err => res.status(400).json(err))
};

const deleteOne = (req,res) => {
    Pet.findByIdAndDelete(req.params.id )
    .then(pet => res.status(201).json(pet))
    .catch(err => res.status(400).json(err))
};

const update = (req, res) => {
    Pet.findByIdAndUpdate(req.params.id ,req.body,{new:true,runValidators:true})
    .then(pet => res.status(201).json(pet))
    .catch(err => res.status(400).json(err))
};

const findOne = (req, res) => {
    Pet.findById({ _id: req.params.id })
    .then(pet => res.status(200).json(pet))
    .catch(err => res.status(400).json(err))  
};

module.exports = {create,findAll,update,deleteOne,findOne}