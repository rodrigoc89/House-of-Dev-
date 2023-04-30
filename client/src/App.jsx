import { Route, Routes } from "react-router";
import Login from "./ components/Login";
import Home from "./ components/Home";
import FormRegister from "./ components/Register";
import Favorites from "./ components/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import Profile from "./ components/Profile";
import NavbarAdmin from "./ components/admin/adminNavbar";
import TableAdmin from "./ components/admin/adminTablas";
import { setFavorite } from "./state/favorites";
import { setAppointment } from "./state/appointment";
import CardIndividual from "./ components/Card";
import Appointments from "./ components/Appointments";
import AdminCitas from "./ components/admin/AdminCitas";


function App() {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.user);


  useEffect(() => {
    if (!userLogged.id) {
      axios
        .get("http://localhost:3001/api/user/me", { withCredentials: true })
        .then((usera) => {
          dispatch(setUser(usera.data.user));
        });
    }
    if (userLogged.id) {
      axios
        .get(`http://localhost:3001/api/favorite/${userLogged.id}`, {
          withCredentials: true,
        })
        .then((favorito) => {
          dispatch(setFavorite(favorito.data));
        });
      axios
        .get(`http://localhost:3001/api/appointment/${userLogged.id}`, {
          withCredentials: true,
        })
        .then((appointments) => {
          dispatch(setAppointment(appointments.data));
        });
    }
  }, [userLogged]);
  return (
    <div>
      {userLogged.admin == true ? (
        <>
          <NavbarAdmin />
          <Routes>
            <Route path="/" element={<TableAdmin />} />
            <Route path="/adminCitas" element={<AdminCitas/>} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/card/:id" element={<CardIndividual />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
