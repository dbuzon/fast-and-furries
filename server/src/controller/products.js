'use strict';

const mongoose = require('mongoose')

const conn = 'mongodb+srv://fandf:h4ha_y0U-don"7_kN0w@agravain.jl2re.mongodb.net/agravain'
mongoose.connect(conn, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'erro de conexao: '));
db.once('open', function(){
	console.log('conexao estabelecida! rodando...')
	//nessa linha aqui vc faz rodar o server (?)
	//a database tem que estar pronta antes de poder cadastrar os produtos
    //tentar tratar erro aqui...
});

const Schema = mongoose.Schema;

const productSchema = new Schema({
	id: {
		type: Number,
		index: true,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	category: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	sold: {
		type: Number,
		required: true,
		min: 0
	}

})

const Product = mongoose.model('Product', productSchema);

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
    })
};

exports.put = (req, res, next) => {
    //const id = req.params.id;
    //db[id] = req.body;
    const product = Product(req.body);
    product.save()
        .then((prod) => {
            //tudo ok
        })
        .catch((err) => {
            //console.log(err)
        })
    res.status(200).send(product);
};

exports.delete = (req, res, next) => {
    const id = req.params.id;

    if (db.hasOwnProperty(id)) {
        delete db[id];
        res.status(204).send();
    }
    else {
        res.status(404).send();
    }
};