'use strict';

var db = {};

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
    res.status(200).send(dbmock);
};

exports.getById = (req, res, next) => {
    const id = req.params.id;

    res.send(dbmock[id-1]);
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