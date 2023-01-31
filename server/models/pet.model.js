const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    pet:{
        type:String,
        required:[true,"please enter name"],
        minLength:[3,"please add more"]
    },
    type:{
        type:String,
        required:[true,"please enter type"],
        minLength:[3,"please add more"]
    },
    description:{
        type:String,
        required:[true,"please enter a description"],
        minLength:[3,"please add more"]
    },
    skill1:{
        type:String
    },
    skill2:{
        type:String
    },
    skill3:{
        type:String
    }
    
})

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;