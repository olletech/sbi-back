const express = require("express");
const models = require("../models");
const routes = express.Router();

routes.post("/list", async (req, res) => {
  const { id_shopping } = req.body;

  try {
    const loja = await models.v2_tb_loja.findAll({
      where: { id_shopping },
      order:[['nome_loja','ASC']],
    });

    if (!loja)
      return res.status(400).send({ error: 'Loja não cadastrado' });

    res.send({
      loja,
    });

  } catch (err) {

    return res.status(400).send({ error: 'Busca Falhou' });
  }
});

module.exports = app => app.use('/loja', routes);
