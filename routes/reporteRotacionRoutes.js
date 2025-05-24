const express = require('express');
const router = express.Router();
const controller = require('../controller/reporteRotacionController');

router.get('/', controller.getReporteRotacionPersonal);

module.exports = router;