const express = require('express');
const router = express.Router();
const controller = require('../controller/reporteDistribucionSalarialController');

router.get('/', controller.getDistribucionSalarial);

module.exports = router;