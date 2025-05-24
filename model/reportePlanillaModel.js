const { poolPromise, sql } = require('../config/db');

async function obtenerReportePlanillaActual() {
  try {
    const pool = await poolPromise;

    const result = await pool.request().execute('sp_PlanillaActual');
    return result.recordset;
  } catch (error) {
    console.error('Error en reportePlanillaModel:', error);
    throw error;
  }
}

module.exports = { obtenerReportePlanillaActual };