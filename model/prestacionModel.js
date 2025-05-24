const { poolPromise, sql } = require('../config/db');

const insertarPrestacion = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute("sp_CalcularPrestaciones");
    return result.recordset;
  } catch (error) {
    console.error("Error al insertar prestación:", error);
    throw error;
  }
};

const obtenerPrestaciones = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().execute("sp_ConsultarPrestaciones");
    return result.recordset;
  } catch (error) {
    console.error("Error al obtener prestaciones:", error);
    throw error;
  }
};

const obtenerPorEmpleado = async (id_empleado) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input("id_empleado", sql.Int, id_empleado)
      .execute("sp_ConsultarPrestacionesPorEmpleado"); // Llamada al SP
    return result.recordset;
  } catch (error) {
    console.error("Error al obtener prestaciones por empleado:", error);
    throw error;
  }
};

const editarPrestacion = async ({ id_prestacion, tipo_prestacion, monto, fecha }) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input("id_prestacion", sql.Int, id_prestacion)
      .input("tipo_prestacion", sql.VarChar(50), tipo_prestacion)
      .input("monto", sql.Decimal(10, 2), monto)
      .input("fecha", sql.Date, fecha)
      .execute("sp_EditarPrestacion");
    return result.recordset;
  } catch (error) {
    console.error("Error al editar prestación:", error);
    throw error;
  }
};

const eliminarPrestacion = async (id_prestacion) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input("id_prestacion", sql.Int, id_prestacion)
      .execute("sp_EliminarPrestacion");
    return result.recordset;
  } catch (error) {
    console.error("Error al eliminar prestación:", error);
    throw error;
  }
};

module.exports = {
  insertarPrestacion,
  obtenerPrestaciones,
  obtenerPorEmpleado,
  editarPrestacion,
  eliminarPrestacion
};