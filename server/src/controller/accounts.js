'use strict';

var db = {};

var dbmock = [
    {
        id: 1,
        nome: "admin",
        email: "admin",
        password: "admin",
        cpf: "123",
        phone: "4002-8922",
        address: "tatui"
    }
]

exports.get = (req, res, next) => {
    res.status(200).send(dbmock);
};

exports.getById = (req, res, next) => {
    const id = req.params.id;

    if (db[id] == null) {
        res.status(404).send();
    }
    else {
        res.status(200).send(db[id]);
    }
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    db[id] = req.body;
    res.status(200).send(db[id]);
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