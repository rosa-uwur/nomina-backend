const { poolPromise, sql } = require('../config/db');

async function insertarIndicador(data) {
  const pool = await poolPromise;
  const request = pool.request();
  request.input('id_empleado', sql.Int, data.id_empleado);
  request.input('tareas_realizadas', sql.Int, data.tareas_realizadas);
  request.input('fecha', sql.Date, data.fecha);
  await request.execute('sp_InsertarIndicadorProductividad');
}

async function obtenerIndicadores() {
  const pool = await poolPromise;
  const result = await pool.request().execute('sp_ConsultarIndicadoresProductividad');
  return result.recordset;
}

async function actualizarIndicador(id, data) {
  const pool = await poolPromise;
  const request = pool.request();
  request.input('id_indicador', sql.Int, id);
  request.input('tareas_realizadas', sql.Int, data.tareas_realizadas);
  request.input('fecha', sql.Date, data.fecha);
  await request.execute('sp_EditarIndicadorProductividad');
}

async function eliminarIndicador(id) {
  const pool = await poolPromise;
  const request = pool.request();
  request.input('id_indicador', sql.Int, id);
  await request.execute('sp_EliminarIndicadorProductividad');
}

module.exports = {
  insertarIndicador,
  obtenerIndicadores,
  actualizarIndicador,
  eliminarIndicador,
};