const rotacionModel = require('../model/reporteRotacionModel');

async function getReporteRotacionPersonal(req, res) {
  try {
    const data = await rotacionModel.obtenerReporteRotacionPersonal();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener el reporte de rotación de personal',
      error: error.message
    });
  }
}

module.exports = { getReporteRotacionPersonal };