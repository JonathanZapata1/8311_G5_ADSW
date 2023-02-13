const express = require('express');
const Customer = require('../models/Product');
const multer = require('multer'); // Requiere multer para manejar la subida de archivos
const path = require('path'); // Requiere el módulo de path de Node.js


const storage = multer.diskStorage({
    destination: '../uploads',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({
    storage: storage
  }).single('imgUrl'); // El nombre 'imgUrl' debe coincidir con el nombre del campo en el formulario
  
// crear producto
exports.create = async (req, res) => {
  const customer = new Customer(req.body)
   

    try {
        await customer.save();
        res.status(201).json({
            message: "Producto creado con exito!"
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error en procesar el producto!'
        });  
    }
}



// listar producto

exports.index = async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.json(customers); 
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};


// producto por id

exports.show = async (req, res, next) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if(!customer){
            res.status(404).json({
                message: "El producto no existe!"
            });    
        }
        res.json(customer);
    } catch (error) {
        res.status(400).json({
            message: 'Error en la consulta'
        });
    }
};

// actualizar prodcuto

exports.update = async (req, res, next) => {
    try {
        const customer = await Customer.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );

        res.json({
            message: 'Producto actualizado con exito'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la consulta'
        });
    }
};

// Eliminar producto

exports.delete = async (req, res, next) => {
    try {
        await Customer.findOneAndDelete({
            _id: req.params.id
        });

        res.json({
            message: 'Producto borrado con exito!'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la consulta'
        });
    }
};
