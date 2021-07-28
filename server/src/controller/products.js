'use strict';

const mongoose = require('mongoose');
const Product = require('../models/products');
const Account = require('../models/accounts');

const conn = 'mongodb+srv://fandf:h4ha_y0U-don"7_kN0w@agravain.jl2re.mongodb.net/agravain'

mongoose.connect(conn, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'erro de conexao: '));
db.once('open', function(){
	console.log('Mongoose connected! Ya-hoo...')
	//nessa linha aqui vc faz rodar o server (?)
	//a database tem que estar pronta antes de poder cadastrar os produtos
    //trata erro aqui?
});


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
        //tem que tratar os erros aqui?
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