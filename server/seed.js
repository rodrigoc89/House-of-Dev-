const User = require("./models/User");
const Property = require("./models/Property");
const fakeHouse = require("./fakeData/fakeHouse.json");

const seed = async () => {
  try {
    await Property.bulkCreate(fakeHouse);
    await User.create({
      name: "admin",
      lastName: "superAdmin",
      email: "admin@admin.com",
      password: "352Admin*",
      phone: 13478989851,
      admin: true,
    });
    console.log("Seeded complete");
  } catch (error) {
    console.log(error, "Seeded Failed");
  }
};

seed();

//citas y email
