const express = require("express");
const router = express.Router();

const models = require("../models");
const db = require("../models");
const { sequelize, Sequelize } = require("../models");

router.post("/list-groupby-checklist", async (req, res) => {
  const { place_id, platform_id } = req.body;
  try {
    let checklist = await makeQuery(platform_id, place_id);

    let result = checklist.reduce(function (r, a) {
      if (!r[a.checklist]) {
        r[a.checklist] = [];
      }
      r[a.checklist].push(a);
      return r;
    }, {});

    res.send(result);
  } catch (err) {
    return res.status(400).send({ error: "Busca Falhou" });
  }
});

router.post("/list-groupby-grupo", async (req, res) => {
  const { place_id, platform_id } = req.body;
  try {
    let checklist = await makeQuery(platform_id, place_id);

    let result = checklist.reduce(function (r, a) {
      if (!r[a.grupo]) {
        r[a.grupo] = [];
      }
      r[a.grupo].push(a);
      return r;
    }, {});

    res.send(result);
  } catch (err) {
    return res.status(400).send({ error: "Busca Falhou" });
  }
});

// Retorna a listagem com os checklists por plataforma e imóvel
function makeQuery(platformId, placeId) {
  const checklist = sequelize.query(
    "select cc.id, cc.nome as checklist, ci.id, ci.descricao, ci.risco, ci.norma, cg.nome as grupo from console_checklist cc " +
      "inner join console_checklist_itens cci on cci.checklist_id = cc.id " +
      "inner join console_itemgrupo ci on ci.id = cci.itemgrupo_id " +
      "inner join console_grupo cg on cg.id = ci.grupo_id " +
      "inner join console_shoppingchecklists_checklist csc on csc.checklist_id = cc.id " +
      "inner join console_shoppingchecklists cs on cs.id = csc.shoppingchecklists_id " +
      "inner join v2_tb_shopping s on s.id = cs.shopping_id " +
      "where cc.plataforma_id = ? " +
      "and ci.status_id = 1 " +
      "and s.id = ? ",
    {
      replacements: [platformId, placeId],
      type: Sequelize.QueryTypes.SELECT,
    }
  );

  return checklist;
}

module.exports = (app) => app.use("/checklist", router);
