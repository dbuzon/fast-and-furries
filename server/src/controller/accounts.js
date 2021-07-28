'use strict';

const Account = require('../models/accounts');


exports.get = (req, res, next) => {
    Account.find({}).then(function(accounts) {
        res.status(200).send(accounts);
    });
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    Account.findOne({"id":id}).then(function(account){
        if (account) {
            res.status(200).send(account);
        }
        else {
            res.status(404).send();
        }
    });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    let acc;
    Account.findOne({"id":id}).then(function(account){
        acc = account;
    });
    if (acc) {
        Account.findByIdAndDelete(acc._id);
    }
    Account(req.body).save();
    res.status(201).send(req.body);
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    Account.findOneAndDelete({"id":id}).then(function(account){
        if (account) {
            res.status(204).send();
        }
        else {
            res.status(404).send();
        }
    });
};