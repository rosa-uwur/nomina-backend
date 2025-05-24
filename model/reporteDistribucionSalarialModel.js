const { poolPromise } = require('../config/db');

async function obtenerDistribucionSalarial() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute('sp_DistribucionSalarial');
    return result.recordset;
  } catch (error) {
    console.error('Error en reporteDistribucionSalarialModel:', error);
    throw error;
  }
}

module.exports = { obtenerDistribucionSalarial };