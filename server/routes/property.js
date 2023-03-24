const { Router } = require("express");

const Property = require("../models/Property");

const { validateAdmin, validateAuth } = require("../middleware/auth");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.status(202).send(properties);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findByPk(id);
    res.status(202).send(property);
  } catch (error) {
    res.sendStatus(404);
  }
});

//ADMIN ROUTES FIND AND EDIT PROPERTY

router.post("/", validateAdmin, validateAuth, async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).send(property);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.put("/:id", validateAdmin, validateAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const propertyUpdate = await Property.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(202).send(propertyUpdate);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.delete("/:id", validateAdmin, validateAuth, async (req, res) => {
  const { id } = req.params;
  try {
    await Property.destroy({ where: { id: id } });
    res.status(202);
  } catch (error) {
    res.sendStatus(404);
  }
});
module.exports = router;
