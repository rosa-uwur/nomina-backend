const express = require("express");
const router = express.Router();
const prestacionController = require("../controller/prestacionController");

router.post('/', prestacionController.insertarPrestacion);
router.get('/', prestacionController.obtenerPrestaciones);
router.get('/empleado/:id', prestacionController.obtenerPorEmpleado);
router.put('/:id', prestacionController.editarPrestacion);
router.delete('/:id', prestacionController.eliminarPrestacion);

module.exports = router;