const express = require('express');
const router = express.Router();
const controller = require('../controller/reportePlanillaController');

router.get('/', controller.getReportePlanillaActual);

module.exports = router;