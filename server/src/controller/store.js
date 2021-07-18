'use strict';

var db = {};

exports.get = (req, res, next) => {
    const key = req.params.key;
    res.status(200).send(db[key]);
};

exports.put = (req, res, next) => {
    const key = req.params.key;
    db[key] = req.body;
    res.status(200).send(db[key]);
};

exports.delete = (req, res, next) => {
    const key = req.params.key;
    db[key] = null;
    res.status(200).send(db[key]);
};