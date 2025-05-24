const { poolPromise } = require('../config/db');

async function obtenerReporteRotacionPersonal() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute('sp_RotacionPersonal');
    return result.recordset;
  } catch (error) {
    console.error('Error en reporteRotacionModel:', error);
    throw error;
  }
}

module.exports = { obtenerReporteRotacionPersonal };