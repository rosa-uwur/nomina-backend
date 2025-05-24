const prestacionModel = require('../model/prestacionModel');

async function insertarPrestacion(req, res) {
  try {
    const resultado = await prestacionModel.insertarPrestacion();
    res.status(201).json({
      mensaje: 'Prestaciones calculadas exitosamente',
      detalle: resultado
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al calcular prestaciones',
      error: error.message
    });
  }
}

async function obtenerPrestaciones(req, res) {
  try {
    const prestaciones = await prestacionModel.obtenerPrestaciones();
    res.status(200).json(prestaciones);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener las prestaciones',
      error: error.message
    });
  }
}

async function obtenerPorEmpleado(req, res) {
  const { id } = req.params;
  try {
    const prestaciones = await prestacionModel.obtenerPorEmpleado(parseInt(id));
    if (prestaciones.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron prestaciones para este empleado' });
    }
    res.status(200).json(prestaciones);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener las prestaciones del empleado',
      error: error.message
    });
  }
}

async function editarPrestacion(req, res) {
  const { id } = req.params;
  const { tipo_prestacion, monto, fecha } = req.body;

  try {
    await prestacionModel.editarPrestacion({
      id_prestacion: parseInt(id),
      tipo_prestacion,
      monto,
      fecha
    });
    res.status(200).json({ mensaje: 'Prestación actualizada correctamente.' });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al editar la prestación',
      error: error.message
    });
  }
}

async function eliminarPrestacion(req, res) {
  const { id } = req.params;

  try {
    await prestacionModel.eliminarPrestacion(parseInt(id));
    res.status(200).json({ mensaje: 'Prestación eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al eliminar la prestación',
      error: error.message
    });
  }
}

module.exports = {
  insertarPrestacion,
  obtenerPrestaciones,
  obtenerPorEmpleado,
  editarPrestacion,
  eliminarPrestacion
};