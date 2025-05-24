const express = require('express');
const router = express.Router();
const empleadoController = require('../controller/empleadoController');

router.post('/', empleadoController.crearEmpleado);
router.get('/', empleadoController.listarEmpleados);
router.get('/:id', empleadoController.obtenerEmpleado);
router.put('/:id', empleadoController.actualizarEmpleado);
router.patch('/:id/baja', empleadoController.darDeBaja);

module.exports = router;