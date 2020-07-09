const express = require("express");
const models = require("./models");
const bp = require("body-parser");
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
require("./controllers")(app);

app.listen(process.env.PORT || 3000);