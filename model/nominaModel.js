const { poolPromise, sql } = require('../config/db');

async function insertarNomina() {
  try {
    const pool = await poolPromise;
    const request = pool.request();

    const result = await request.execute('sp_InsertarNomina');
    return result.recordset; // o simplemente `return result` si el SP no devuelve resultados
  } catch (error) {
    console.error('Error en modelo nomina:', error);
    throw error;
  }
}

async function obtenerTodasNominas() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute('sp_ObtenerNominas');
    return result.recordset;
  } catch (error) {
    throw error;
  }
}

async function obtenerNominasPorEmpleado(id_empleado) {
  try {
    const pool = await poolPromise;
    const request = pool.request();
    request.input('id_empleado', sql.Int, id_empleado);
    const result = await request.execute('sp_ObtenerNominasPorEmpleado');
    return result.recordset;
  } catch (error) {
    throw error;
  }
}

module.exports = { insertarNomina,  obtenerTodasNominas, obtenerNominasPorEmpleado };