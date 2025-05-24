const express = require('express');
const router = express.Router();
const indicadorController = require('../controller/productividadController');

router.post('/', indicadorController.crearIndicador);
router.get('/', indicadorController.obtenerIndicadores);
router.put('/:id', indicadorController.actualizarIndicador);
router.delete('/:id', indicadorController.eliminarIndicador);

module.exports = router;