const { Appointment, User } = require("../models");

const gettAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).send(appointments);
  } catch (error) {
    res.sendStatus(402);
  }
};

const createAAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    console.log(req.body, "soy del back");
    const data = {
      date: req.body.date,
      address: req.body.address,
      UserId: id,
      image: req.body.image,
      userPhone: req.body.userPhone,
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userLastName: req.body.userLastName,
    };
    const appointment = await Appointment.create(data);
    res.status(201).send(appointment);
  } catch (error) {
    console.log(error);
  }
};

const getAllYourAppointment = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      where: { UserId: req.params.id },
    });
    res.status(200).send(appointments);
  } catch (error) {
    res.sendStatus(402);
  }
};
module.exports = {
  gettAllAppointments,
  createAAppointment,
  getAllYourAppointment,
};
