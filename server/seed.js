const User = require("./models/User");
const Property = require("./models/Property");
const fakeHouse = require("./fakeData/fakeHouse.json");

const seed = () => {
  Property.bulkCreate(fakeHouse)
    .then(() => {
      console.log("Properties inserted in the database");
    })
    .catch((error) => {
      console.error("Error inserting records: ", error);
    });

  User.create({
    name: "admin",
    lastName: "superAdmin",
    email: "admin@gmail.com",
    password: "admin",
    admin: true,
  })
    .then(() => {
      console.log("ADMIN CREATED");
    })
    .catch((error) => {
      console.error("Error inserting records: ", error);
    });
};

seed();
