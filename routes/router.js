const express = require('express');
const router = express.Router();
const controller = require('../controller/scontroller');

router.get('/', controller.index);
router.get('/sharon', controller.sharon);
router.get('/shawi', controller.shawi);
router.get('/sha', controller.sha);
router.get('/caballero', controller.caballero);

module.exports = router;
