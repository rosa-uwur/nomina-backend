const { poolPromise, sql } = require('../config/db');
const bcrypt = require('bcrypt');

async function registrarAdministrador(nombre, usuario, clave, rol) {
  try {
    const saltRounds = 10;
    const claveHash = await bcrypt.hash(clave, saltRounds);

    const pool = await poolPromise;
    const request = pool.request();
    request.input('nombre', sql.VarChar(100), nombre);
    request.input('usuario', sql.VarChar(50), usuario);
    request.input('clave', sql.VarChar(255), claveHash);
    request.input('rol', sql.VarChar(50), rol);

    await request.execute('sp_RegistrarAdministrador');
    return true;
  } catch (err) {
    throw new Error('Error al registrar administrador: ' + err.message);
  }
}

async function autenticarAdministrador(usuario, clave) {
  try {
    const pool = await poolPromise;
    const request = pool.request();
    request.input('usuario', sql.VarChar(50), usuario);

    const result = await request.execute('sp_ObtenerHashAdministrador');

    if (result.recordset.length === 0) {
      return {esValido: false };
    }

    const {clave: hashAlmacenado, rol} = result.recordset[0];

    const esValido = await bcrypt.compare(clave, hashAlmacenado);

    return {esValido, rol};
  } catch (err) {
    throw new Error('Error al autenticar: ' + err.message);
  }
}

module.exports = {
  registrarAdministrador,
  autenticarAdministrador
};