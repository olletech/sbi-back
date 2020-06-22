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

routes.post("/register", async (req, res) => {
  const {
    name,
    email,
    password,
    remember_token,
    document_number,
    phone,
    gender,
    shopping_id,
    status,
    confirmation_code,
    confirmed,
    mestre
  } = req.body;

  models.v2_users
    .findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        password: bcrypt.hashSync(password, salt),
        remember_token,
        document_number,
        phone,
        gender,
        shopping_id,
        status,
        confirmation_code,
        confirmed,
        mestre
      }
    })
    .then(([user, created]) => {
      console.log(
        user.get({
          plain: true
        })
      );
      console.log(created);
      delete user.password;
      created
        ? res.send({ user, token: generateToken({ id: user.id }), created })
        : res.status(403).send({"Error": "Email already exists"});
    });
});

routes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // const { email, password } = req.body;
    const user = await models.v2_users.findOne({ where: { email } });

    if (!user)
      return res.status(400).send({ error: 'Usuario não cadastrado' });
    if (!await bcrypt.compareSync(password, user.password))
      return res.status(400).send({ error: 'Senha Incorreta' });

    res.send({
      user,
      token: generateToken({ id: user.id })
    });

  } catch (err) {

    return res.status(400).send({ error: 'Login Falhou' });
  }
});
//   const user = await models.v2_users.findOne({ where: { email } });
//   if (!user) {
//     res.status(404).send({ error: "Usuário não encontrado" });
//     return;
//   }
//
//   if (await bcrypt.compare(password, user.password))
//     res.send({
//       status: "success",
//       user,
//       token: generateToken({ id: user.id })
//     });
//   else res.status(401).send({ status: "Erro de password" });
// });

module.exports = app => app.use('/auth', routes);
