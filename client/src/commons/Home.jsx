import { Routes, Route } from "react-router";
import Grid from "../ components/Grid";
import NavbarUser from "../ components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setFavorite } from "../state/favorites";
import axios from "axios";

const Home = () => {
  return (
    <div>
      <NavbarUser />
      <Routes>
        <Route path="/" element={<Grid />} />
      </Routes>
    </div>
  );
};

export default Home;
