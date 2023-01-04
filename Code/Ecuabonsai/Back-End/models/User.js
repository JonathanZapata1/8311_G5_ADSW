const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombreusuario: {
        type: String,
        trim: true,
        require: true
    },
    contraseña: {
        type: String,
        trim: true,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);