const express = require('express');
const router = express.Router();
const nominaController = require('../controller/nominaController');

router.get('/insNomina', nominaController.insertarNomina);
router.get('/', nominaController.obtenerTodasNominas);
router.get('/empleado/:id', nominaController.obtenerNominasPorEmpleado);

module.exports = router;