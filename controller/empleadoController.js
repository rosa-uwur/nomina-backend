const empleadoModel = require('../model/empleadoModel');

async function crearEmpleado(req, res) {
  try {
    await empleadoModel.insertarEmpleado(req.body);
    res.status(201).json({ mensaje: 'Empleado registrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function listarEmpleados(req, res) {
  try {
    const empleados = await empleadoModel.obtenerEmpleados();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerEmpleado(req, res) {
  try {
    const id = parseInt(req.params.id);
    const empleado = await empleadoModel.obtenerEmpleadoPorId(id);

    if (empleado) {
      res.json(empleado);
    } else {
      res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function actualizarEmpleado(req, res) {
  try {
    const id = parseInt(req.params.id);
    await empleadoModel.actualizarEmpleado(id, req.body);
    res.json({ mensaje: 'Empleado actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function darDeBaja(req, res) {
  try {
    const id = parseInt(req.params.id);
    await empleadoModel.darDeBajaEmpleado(id);
    res.json({ mensaje: 'Empleado dado de baja correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  crearEmpleado,
  listarEmpleados,
  obtenerEmpleado,
  actualizarEmpleado,
  darDeBaja
};