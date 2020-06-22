const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const models = require("../models");
const routes = express.Router();
const authconfig = require("../../config/authconfig");

var salt = bcrypt.genSaltSync(10);

function generateToken(params = {}) {
  return jwt.sign(params, authconfig.privateKey, {
    expiresIn: 3600
  });
}

models.sequelize.authenticate().then(
  function() {
    console.log("Connection has been established successfully.");
  },
  function(err) {
    console.log("Unable to connect to the database:", err);
  }
);


routes.post("/list", async (req, res) => {
  const { id_shopping } = req.body;

  try {
    const loja = await models.v2_tb_loja.findAll({ where: { id_shopping } });

    if (!loja)
      return res.status(400).send({ error: 'Deposito não cadastrado' });

    res.send({
      loja,
    });

  } catch (err) {

    return res.status(400).send({ error: 'Busca Falhou' });
  }
});

module.exports = app => app.use('/deposito', routes);
