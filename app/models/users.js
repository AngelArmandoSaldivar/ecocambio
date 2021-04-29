const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String,
    },
    lastname: {
        require: true,
        type: String,        
    },
    email: {
        require: true,
        type: String,
    },
    password: {
        require: true,
        type: String
    },
    age: {
        require: true,
        type: Number
    },
    gender: {
        require: true,
        type: String,
        enum: ['Masculino', 'Femenino','Otro']
    },
    phone: {
        require: true,
        type: String
    },    
    address: [{        
        postalCode:{
        require: true,
        type: Number }
        /*delegation: {
            require: true,
            type: String
        },
        colony: {
            require: true,
            type: String
        },
        street: {
            require: true,
            type: String
        }*/ 
    }],
    garments: [{
        usageClassification: {
            require: true,
            type: String,
            enum: ['En perfecto estado', 'En buen estado','Con un detalle',"otro"]
        },

        garmentClassification: {
            require: true,
            type: String,
            enum: ['Hombre', 'Mujer','Unisex']
        },
        garmentStyle: {
            require: true,
            type: String,
     
        },
        garmentcolor: {
            require: true,
            type: String
        },
        size: {
            require: true,
            type: String
        },
        price: {
            require: true,
            type: Number,
        },

    }],
    date: {
        type: Date,
        default: Date.now
    },
})

const users = mongoose.model('users', userSchema);

module.exports = users; 