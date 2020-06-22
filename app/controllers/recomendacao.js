const express = require("express");
const router = express.Router();

const models = require("../models");


router.post("/list", async (req, res) => {
  const { shopping_id } = req.body;
  const id_shopping = shopping_id;
  try {
    const recomendacao = await models.v2_tb_recomendacao.findAll({
      where:{id_shopping:id_shopping,id_tipo_vistoria:1},
      order:[['grupo_recomendacao','ASC']],
    });

    res.send({
      recomendacao,
    });

  } catch (err) {

    return res.status(400).send({ error: 'Busca Falhou' });
  }
});

module.exports = app => app.use("/recomendacao", router);
