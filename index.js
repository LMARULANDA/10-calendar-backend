const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require('cors');
require("dotenv").config();

//crear el servidor de express
const app = express();

//base de datos
dbConnection();

//CORS
app.use(cors())

//directorio publico
app.use(express.static("public"));

//lectura y parseo del body
//app.use middleware
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
