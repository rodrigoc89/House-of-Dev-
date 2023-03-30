import { Route, Routes } from "react-router";
import Login from "./ components/Login";
import Home from "./commons/Home";
import FormRegister from "./ components/Register";
import Favorites from "./ components/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import Perfil from "./ components/Perfil";
import NavbarAdmin from "./ components/admin/adminNavbar";
import TableAdmin from "./ components/admin/adminTablas";
import { setFavorite } from "./state/favorites";

function App() {
  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorite);

  useEffect(() => {
    if (!userLoged.id) {
      axios
        .get("http://localhost:3001/api/user/me", { withCredentials: true })
        .then((user) => {
          console.log(user.data.user), dispatch(setUser(user.data.user));
        });
    }
    if (userLoged.id) {
      axios
        .get("http://localhost:3001/api/favorite/${userLoged.id}", {
          withCredentials: true,
        })
        .then((favorito) => {
          console.log(favorito);
          dispatch(setFavorite(favorito.data));
        });
    }
  }, [userLoged]);
  return (
    <div>
      {userLoged.admin == true ? (
        <>
          <NavbarAdmin />
          <Routes>
            <Route path="/" element={<TableAdmin />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
