'use strict';

const Product = require('../models/products');

exports.get = (req, res, next) => {
    Product.find({}).then(function(products) {
        res.status(200).send(products);
    });
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    Product.findOne({"id":id}).then(function(product){
        if (product) {
            res.status(200).send(product);
        }
        else {
            res.status(404).send();
        }
    });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    let prod;
    Product.findOne({"id":id}).then(function(product){
        prod = product;
    });
    if (prod) {
        Product.findByIdAndDelete(prod._id);
    }
    Product(req.body).save();
    res.status(201).send(req.body);
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    Product.findOneAndDelete({"id":id}).then(function(product){
        if (product) {
            res.status(204).send();
        }
        else {
            res.status(404).send();
        }
    });
};