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
      <Grid />
    </div>
  );
};

export default Home;
