const express = require("express");

const app = express();
const db = require("./db/db.js");
const port = 3001;

app.use(express.json());

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
  });
});

module.exports = app;
