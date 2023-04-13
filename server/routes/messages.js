const { Router } = require("express");
const Messages = require("../models/Messages");

const { validateAuth, validateAdmin } = require("../middleware/auth");

const router = Router();

router.get("/:receiverId", validateAuth, validateAdmin, async (req, res) => {
  const { receiverId } = req.params;
  try {
    const messages = await Messages.findAll({
      where: { receiverId: receiverId },
    });
    res.status(200).send(messages);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/:receiverId", validateAuth, validateAdmin, async (req, res) => {
  const { receiverId } = req.params;
  const { senderId, text } = req.body;
  try {
    const message = await Messages.create({ receiverId, senderId, text });
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
