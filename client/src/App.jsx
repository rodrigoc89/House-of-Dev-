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

function App() {
  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/me", { withCredentials: true })
      .then((user) => {
        if (!userLoged.name) {
          console.log(user.data.user), dispatch(setUser(user.data.user));
        }
      });
  }, [userLoged]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}

export default App;
