const express = require("express");
const router = express.Router();

const models = require("../models");


router.post("/list", async (req, res) => {
  const { shopping_id } = req.body;
  const id = shopping_id;
  try {
    const shopping = await models.v2_tb_shopping.findByPk(id);
    const rede = await models.v2_tb_rede.findOne({where:{id:shopping.id_rede}});
    const regional = await models.tb_regional.findOne({where:{id:shopping.id_regional}});
    const status = await models.v2_tb_status.findOne({where:{id:shopping.id_status}});

    res.send({
      shopping,
      rede,
      regional,
      status,
    });

  } catch (err) {

    return res.status(400).send({ error: 'Busca Falhou' });
  }
});

module.exports = app => app.use("/shopping", router);
