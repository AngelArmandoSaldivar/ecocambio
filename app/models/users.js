const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    lastname: {
        require: true,
        type: String,        
    },
    age: {
        require: true,
        type: Number
    },
    gender: {
        require: true,
        type: String,
        enum: ['Masculino', 'Femenino']
    },
    phone: {
        require: true,
        type: String
    },    
    address: [{        
        delegation: {
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
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

const users = mongoose.model('users', userSchema);

module.exports = users; 