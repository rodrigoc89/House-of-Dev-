const S = require("sequelize");
const db = require("../db/db");

class Message extends S.Model {}

Message.init(
  {
    text: {
      type: S.STRING,
      allowNull: false,
    },
    senderId: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "Message" }
);

module.exports = Message;
