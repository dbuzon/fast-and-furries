'use strict';

const Product = require('../models/products');


var dbmock = [
    {
        id: "1",
        img: "cachorro.png",
        title: "golden retriever",
        price: 2000,
        description: "um papagaio, dois papagaios xd dale",
        category: 0,
    },
    {
        id: "2",
        img: "papagaio.png",
        title: "papagaio",
        price: 5.5,
        description: "um papagaio, dois papagaios xd dale",
        category: 1,
    },
    {
        id: "3",
        img: "papagaio.png",
        title: "papagaio",
        price: 5.5,
        description: "um papagaio, dois papagaios xd dale",
        category: 1,
    },
    {
        id: "4",
        img: "papagaio.png",
        title: "papagaio",
        price: 5.5,
        description: "um papagaio, dois papagaios xd dale",
        category: 0,
    },
    {
        id: "5",
        img: "papagaio.png",
        title: "papagaio",
        price: 5.5,
        description: "um papagaio, dois papagaios xd dale",
        category: 1,
    },
];

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