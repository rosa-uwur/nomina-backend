const reporteModel = require('../model/reportePlanillaModel');

async function getReportePlanillaActual(req, res) {
  try {
    const data = await reporteModel.obtenerReportePlanillaActual();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener el reporte de planilla actual',
      error: error.message
    });
  }
}

module.exports = { getReportePlanillaActual };