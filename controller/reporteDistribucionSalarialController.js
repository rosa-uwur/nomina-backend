const distModel = require('../model/reporteDistribucionSalarialModel');

async function getDistribucionSalarial(req, res) {
  try {
    const data = await distModel.obtenerDistribucionSalarial();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener la distribución salarial',
      error: error.message
    });
  }
}

module.exports = { getDistribucionSalarial };