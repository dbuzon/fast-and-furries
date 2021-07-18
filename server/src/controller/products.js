'use strict';

var db = {};

exports.get = (req, res, next) => {
    res.status(200).send(db);
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