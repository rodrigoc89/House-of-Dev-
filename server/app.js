const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const app = express();
const db = require("./db/db.js");
const port = 3001;

app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
  });
});

module.exports = app;
