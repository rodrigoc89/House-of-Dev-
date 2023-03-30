import { Route, Routes } from "react-router";
import Login from "./ components/Login";
import Home from "./commons/Home";
import FormRegister from "./ components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import Perfil from "./ components/Perfil";
import ModalABM from "./ components/ModalABM";
import ModalUser from "./ components/ModalUser";
import ModalProperty from "./ components/ModalProperty";

function App() {
  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/me", { withCredentials: true })
      .then((user) => {
        console.log(user.data.user), dispatch(setUser(user.data.user));
      });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/ABM" element={<ModalABM />} />
        <Route path="/ADMIN" element={<ModalUser />} />
        <Route path="/PROPERTY" element={<ModalProperty />} />
      </Routes>
    </div>
  );
}

export default App;
