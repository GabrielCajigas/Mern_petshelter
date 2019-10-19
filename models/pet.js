const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');



const PetSchema = new mongoose.Schema
({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be 2 characters or longer"],
        unique:true
    },
    type: {
        type: String,
        required: [true, "type is required"],
    },
    description:{
        type:String,
        required:[true,"description is required"],

    },

    skill1:{
        type:String,
        default:""
    },
    skill2:{
        type:String,
        default:""

    },
    skill3:{
        type:String,
        default:""

    },

    likes : {type: Number,
        default : 0
    }
}, {timestamps:true});

PetSchema.plugin(uniqueValidator, { message: '{PATH} is already in the database' });
mongoose.model("Pet", PetSchema);
module.exports = PetSchema;