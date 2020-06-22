const express = require("express");
const jwt = require("jsonwebtoken");
const models = require("../models");
const bp = require("body-parser");
const routes = express.Router();
const authconfig = require("../../config/authconfig");

routes.use(
  bp.urlencoded({
    extended: true
  })
);

routes.get("/lojaInfo", async (req, res) => {
  const { token, id } = req.headers;
  let decoded;
  console.log({ token: token, id: id });
  try {
    decoded = jwt.decode(token, authconfig.publicKey);
    console.log(decoded);
  } catch (err) {
    console.log(err);
    res.status(403).send({ error: err });
  }
  const loja = await models.v2_tb_loja.findByPk(id);
  console.log(loja);
  if (!loja) res.status(404).send({ status: "loja not found" });
  else res.send(loja);
  return;
});

routes.get("/userInfo", async (req, res) => {
  const { token } = req.headers;
  let decoded;
  console.log({ token: token });
  try {
    decoded = jwt.decode(token, authconfig.publicKey);
    console.log(decoded);
  } catch (err) {
    console.log(err);
    res.status(403).send({ error: err });
  }

  models.v2_users.findByPk(decoded.id).then(user => res.send(user));
});

module.exports = app => app.use("/general", routes);
