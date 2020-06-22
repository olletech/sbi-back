const express = require("express");
const jwt = require("jsonwebtoken");
const authconfig = require("../../config/authconfig");
const router = express.Router();

const models = require("../models");

router.post("/add", async (req, res) => {
  const {id_usuario, id_loja, observacao, year, month, current_risk} = req.body;
  try{
    const user = await models.v2_users.findOne({ where: { id: id_usuario } });
    console.log(user, "fim do usuario");
    const newVistoria = await models.v2_tb_vistoria.create({
      id_usuario: user.id,
      id_shopping: user.shopping_id,
      id_loja,
      id_tipo_vistoria: 1,
      dt_vistoria: Date.now(),
      observacao,
      year,
      month,
      mail_addresses1: user.email,
    });
    const loja = await models.v2_tb_loja.findOne({ where: { id: id_loja } });
    const update = await loja.update({
        last_survey: Date.now(),
        current_risk: current_risk,
        local: observacao,
    });

    res.send({
      user,
      newVistoria,
      loja,
    });
  }catch(err){
    return res.status(400).send({ error: 'Registro Falhou' });
  }

});
router.post("/list", async (req, res) => {
  const { shopping_id , id_loja } = req.body;
  try {
    const vistoria = await models.v2_tb_vistoria.findAll(
        {
          where:{id_shopping:shopping_id,id_loja:id_loja},
          order:[['id','DESC']],
          offset: 10,
          limit: 10,
        });
    //const usuario = await models.v2_users.findOne({where:{id: vistoria.id_usuario}});
    const loja = await models.v2_tb_loja.findOne({where:{id: id_loja}});
    res.send({
      vistoria,
      loja

    });

  } catch (err) {

    return res.status(400).send({ error: 'Busca Falhou' });
  }
});

router.post("/list2", async (req, res) => {
  const { last_survey_id, id_loja } = req.body;
  try {
    const vistoria = await models.v2_tb_vistoria.findAll(
        {
          where:{id:last_survey_id}
        });
    //const usuario = await models.v2_users.findOne({where:{id: vistoria.id_usuario}});
    const loja = await models.v2_tb_loja.findOne({where:{id: id_loja}});
    res.send({
      vistoria,
      loja

    });

  } catch (err) {

    return res.status(400).send({ error: 'Busca Falhou' });
  }
});

module.exports = app => app.use("/vistoria", router);
