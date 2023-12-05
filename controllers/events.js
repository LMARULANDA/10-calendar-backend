const { response } = require("express");

const getEventos = (req,res = response) => {
  
   res.json({
    ok: true,
    message: "getEventos"
  });
};

const crearEvento = (req, res = response) => {
  res.json({
    ok: true,
    message: "crearEvento"
  });
};

const actualizarEvento = (req, res = response) => {
   res.json({
    ok: true,
    message: "actualizarEvento"
  });
};

const eliminarEvento = (req, res = response) => {
 res.json({
    ok: true,
    message: "eliminarEvento"
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
