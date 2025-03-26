const mongoose = require('mongoose');

const labour = new mongoose.Schema({
    no: {
        type: Number,
        required:true,
    },
    date: {
        type: String,
        required: true,
    },
    products :{
        type: Array,
        required: true,
    }
})

module.exports = mongoose.model('labour', labour)