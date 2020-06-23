const express = require("express");
const router = express.Router();

const models = require("../models");
const db = require("../models");
const { sequelize, Sequelize } = require("../models");


router.post("/list", async (req, res) => {
  const { shopping_id, platform_id } = req.body;

  try {
    const shopping = await sequelize.query(
        "select cc.id, cc.nome as checklist, ci.id, ci.descricao, ci.risco, ci.norma, cg.nome as grupo from console_checklist cc " + 
        "inner join console_checklist_itens cci on cci.checklist_id = cc.id " + 
        "inner join console_itemgrupo ci on ci.id = cci.itemgrupo_id " + 
        "inner join console_grupo cg on cg.id = ci.grupo_id " + 
        "inner join console_shoppingchecklists_checklist csc on csc.checklist_id = cc.id " + 
        "inner join console_shoppingchecklists cs on cs.id = csc.shoppingchecklists_id " + 
        "inner join v2_tb_shopping s on s.id = cs.shopping_id " + 
        "where cc.plataforma_id = ? " + 
        "and ci.status_id = 1 " + 
        "and s.id = ? ", {
            replacements: [platform_id, shopping_id],
            type: Sequelize.QueryTypes.SELECT
        }
    );

    let result = shopping.reduce(function(r, a) {        
        r[a.checklist] = [r[a.checklist], a];
        return r;
    }, {});

    console.log(result);

    // res.send({
    //   result,     
    // });

  } catch (err) {

    return res.status(400).send({ error: 'Busca Falhou' });
  }
});

module.exports = app => app.use("/checklist", router);
