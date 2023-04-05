const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const cors = require("cors");
const { User, Property, Favorites, Appointment } = require("./models");

const app = express();
const db = require("./db/db.js");
const port = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", routes);

db.sync({ force: false  }).then(() => {
  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
  });
});

module.exports = app;
