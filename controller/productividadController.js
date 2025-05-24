const indicadorModel = require('../model/productividadModel');

async function crearIndicador(req, res) {
  try {
    await indicadorModel.insertarIndicador(req.body);
    res.status(201).json({ mensaje: 'Indicador registrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerIndicadores(req, res) {
  try {
    const indicadores = await indicadorModel.obtenerIndicadores();
    res.json(indicadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function actualizarIndicador(req, res) {
  try {
    const id = parseInt(req.params.id);
    await indicadorModel.actualizarIndicador(id, req.body);
    res.json({ mensaje: 'Indicador actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function eliminarIndicador(req, res) {
  try {
    const id = parseInt(req.params.id);
    await indicadorModel.eliminarIndicador(id);
    res.json({ mensaje: 'Indicador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  crearIndicador,
  obtenerIndicadores,
  actualizarIndicador,
  eliminarIndicador,
};