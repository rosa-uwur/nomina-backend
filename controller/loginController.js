const adminModel = require('../model/loginModel');

async function login(req, res) {
  const { usuario, clave, rol } = req.body;

  if (!usuario || !clave) {
    return res.status(400).json({ mensaje: 'Usuario y clave son requeridos' });
  }

  try {
    const {esValido, rol } = await adminModel.autenticarAdministrador(usuario, clave);

    if (esValido) {
      res.json({ mensaje: 'Acceso concedido', usuario, rol });
    } else {
      res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error del servidor', error: error.message });
  }
}

async function registrar(req, res) {
  const { nombre, usuario, clave, rol } = req.body;

  if (!nombre || !usuario || !clave || !rol) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    const resultado = await adminModel.registrarAdministrador(nombre, usuario, clave, rol);
    if (resultado) {
      res.json({ mensaje: 'Administrador registrado correctamente' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar administrador', error: error.message });
  }
}

module.exports = {
  login,
  registrar
};