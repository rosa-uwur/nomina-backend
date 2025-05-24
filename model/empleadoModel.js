const { poolPromise, sql } = require('../config/db');

async function insertarEmpleado(data) {
  const pool = await poolPromise;
  const request = pool.request();
  request.input('nombre', sql.VarChar(100), data.nombre);
  request.input('apellido', sql.VarChar(100), data.apellido);
  request.input('puesto', sql.VarChar(100), data.puesto);
  request.input('salario_base', sql.Decimal(10, 2), data.salario_base);
  request.input('fecha_ingreso', sql.Date, data.fecha_ingreso);
  request.input('estado', sql.VarChar(20), data.estado);
  request.input('tipo_periodo', sql.VarChar(20), data.tipo_periodo);
  await request.execute('sp_InsertarEmpleado');
}

async function obtenerEmpleados() {
  const pool = await poolPromise;
  const result = await pool.request().execute('sp_ObtenerEmpleados');
  return result.recordset;
}

async function obtenerEmpleadoPorId(id) {
  const pool = await poolPromise;
  const request = pool.request();
  request.input('id_empleado', sql.Int, id);
  const result = await request.execute('sp_ObtenerEmpleadoPorId');
  return result.recordset[0];
}

async function actualizarEmpleado(id, data) {
  const pool = await poolPromise;
  const request = pool.request();
  request.input('id_empleado', sql.Int, id);
  request.input('nombre', sql.VarChar(100), data.nombre);
  request.input('apellido', sql.VarChar(100), data.apellido);
  request.input('puesto', sql.VarChar(100), data.puesto);
  request.input('salario_base', sql.Decimal(10, 2), data.salario_base);
  request.input('fecha_ingreso', sql.Date, data.fecha_ingreso);
  request.input('estado', sql.VarChar(20), data.estado);
  await request.execute('sp_ActualizarEmpleado');
}

async function darDeBajaEmpleado(id) {
  const pool = await poolPromise;
  const request = pool.request();
  request.input('id_empleado', sql.Int, id);
  await request.execute('sp_BajaEmpleado');
}

module.exports = {
  insertarEmpleado,
  obtenerEmpleados,
  obtenerEmpleadoPorId,
  actualizarEmpleado,
  darDeBajaEmpleado
};