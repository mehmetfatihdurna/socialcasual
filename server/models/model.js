const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name :{
        required: true,
        type: String
    },

    category:{
        required: true,
        type: String
    },

    price: {
        required:true,
        type: String
    },

    description:{
        reqired: false,
        type: String
    }
});

module.exports = mongoose.model('Menu',dataSchema);