const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routes/loginRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const nominaRoutes = require('./routes/nominaRoutes');
const prestacionRoutes = require('./routes/prestacionRoutes');
const productividadRoutes = require('./routes/productividadRoutes');
const reportePlanillaRoutes = require('./routes/reportePlanillaRoutes');
const reporteRotacionRoutes = require('./routes/reporteRotacionRoutes');
const reporteDistribucionSalarialRoutes = require('./routes/reporteDistribucionSalarialRoutes');
const sql = require('mssql');
const db = require('./config/db');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: '*', 
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'] 
};

var options = {
  "origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "Accept": "application/json"

}

app.use(cors(options));


app.use(express.json());




// Rutas
app.use('/api/admin', loginRoutes);
app.use('/api/empleado', empleadoRoutes);
app.use('/api/nomina', nominaRoutes);
app.use('/api/prestacion', prestacionRoutes);
app.use('/api/productividad', productividadRoutes);
app.use('/api/Planilla', reportePlanillaRoutes);
app.use('/api/Rotacion', reporteRotacionRoutes);
app.use('/api/Salario', reporteDistribucionSalarialRoutes);

app.get('/', (req, res) => {
    res.send('Hola mundo uwu');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));