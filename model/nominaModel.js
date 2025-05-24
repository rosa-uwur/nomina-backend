const { poolPromise, sql } = require('../config/db');

async function insertarNomina(data) {
  try {
    const pool = await poolPromise; // Espera a que se conecte
    const request = pool.request();

    request.input('id_empleado', sql.Int, data.id_empleado);
    request.input('tipo_periodo', sql.VarChar(20), data.tipo_periodo);
    request.input('fecha_inicio', sql.Date, data.fecha_inicio);
    request.input('fecha_fin', sql.Date, data.fecha_fin);
    request.input('fecha_pago', sql.Date, data.fecha_pago);
    request.input('horas_trabajadas', sql.Int, data.horas_trabajadas);
    request.input('total_pago', sql.Decimal, data.total_pago);
    request.input('horas_extra', sql.Int, data.horas_extra || 0);

    const result = await request.execute('sp_InsertarNomina');
    return result.recordset;
  } catch (error) {
    console.error('Error en modelo nomina:', error); // Para depuración
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