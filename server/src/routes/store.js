'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/store');

router.get('/:key', controller.get);
router.put('/:key', controller.put);
router.delete('/:key', controller.delete);

module.exports = router; 