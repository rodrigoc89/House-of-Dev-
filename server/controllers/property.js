const { Property } = require("../models");
const { Op } = require("sequelize");

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.status(200).send(properties);
  } catch (error) {
    res.status(400);
  }
};

const infoProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findByPk(id);
    res.status(200).send(property);
  } catch (error) {
    res.status(400);
  }
};

const searchBar = async (req, res) => {
  try {
    const { textSearch } = req.params;
    const result = await Property.findAll({
      where: {
        [Op.or]: [
          {
            address: {
              [Op.like]: `${textSearch}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${textSearch}%`,
            },
          },
        ],
      },
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400);
  }
};

const filterSellOrRent = async (req, res) => {
  try {
    const { options } = req.params;
    const result = await Property.findAll({
      where: {
        options: {
          [Op.like]: `%${options.toLocaleLowerCase()}%`,
        },
      },
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400);
  }
};

const filterPrice = async (req, res) => {
  const { filterMajorToMinor } = req.params;
  console.log(filterMajorToMinor);
  try {
    const result = await Property.findAll();
    if (filterMajorToMinor == "minor") {
      const minorToMajor = result.sort((a, b) => a.price - b.price);
      res.status(200).send(minorToMajor);
    }
    if (filterMajorToMinor == "major") {
      const majorToMinor = result.sort((a, b) => b.price - a.price);
      res.status(200).send(majorToMinor);
    }
  } catch (error) {
    res.status(400);
  }
};

const createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).send(property);
  } catch (error) {
    res.status(400);
  }
};

const editInfoProperty = async (req, res) => {
  const { id } = req.params;

  try {
    const propertyUpdate = await Property.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(202).send(propertyUpdate);
  } catch (error) {
    res.status(400);
  }
};

const deleteAProperty = async (req, res) => {
  const { id } = req.params;
  try {
    await Property.destroy({ where: { id: id } });
    res.status(202);
  } catch (error) {
    res.status(400);
  }
};

module.exports = {
  getAllProperties,
  infoProperty,
  searchBar,
  filterSellOrRent,
  filterPrice,
  createProperty,
  editInfoProperty,
  deleteAProperty,
};
