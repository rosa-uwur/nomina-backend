const nominaModel = require('../model/nominaModel');


async function insertarNomina(req, res) {
  try {
    const resultado = await nominaModel.insertarNomina(); // sin argumentos
    res.status(201).json({
      mensaje: 'Nómina generada exitosamente',
      detalle: resultado
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al generar la nómina',
      error: error.message
    });
  }
}


async function obtenerTodasNominas(req, res) {
  try {
    const nominas = await nominaModel.obtenerTodasNominas();
    res.status(200).json(nominas);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener las nóminas',
      error: error.message
    });
  }
}

async function obtenerNominasPorEmpleado(req, res) {
  const { id } = req.params;
  try {
    const nominas = await nominaModel.obtenerNominasPorEmpleado(parseInt(id));
    res.status(200).json(nominas);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener las nóminas del empleado',
      error: error.message
    });
  }
}

module.exports = { insertarNomina,   obtenerTodasNominas, obtenerNominasPorEmpleado};