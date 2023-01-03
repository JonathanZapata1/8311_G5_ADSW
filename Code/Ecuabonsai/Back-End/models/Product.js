const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema = new Schema({
    tipo: {
        type: String,
        trim: true,
        require: true
    },
    descripcion: {
        type: String,
        trim: true,
        require: true
    },
    precio: {
        type: String,
        trim: true,
        require: true
    },
    cantidad: {
        type: String,
        trim: true,
        require: true
    },
    tamanio: {
        type: String,
        trim: true,
        require: true
    },
    edad: {
        type: String,
        trim: true,
        require: true
    },
    especie: {
        type: String,
        trim: true,
        require: true
    },
    idPromocion:{
        type: String,
        trim: true,
        require: true
    }
});

module.exports = mongoose.model('Product', customersSchema);