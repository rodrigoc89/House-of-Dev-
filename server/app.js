const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const cors = require("cors");
const { User, Property, Favorites, Appointment, Message } = require("./models");

const app = express();
const db = require("./db/db.js");
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
  });
});

module.exports = app;
