import { Routes,Route } from "react-router";
import Grid from "../ components/Grid";
import NavbarUser from "../ components/Navbar";
import Perfil from "../ components/Perfil";

const Home = () => {
  return (
    <div> 
      <NavbarUser/>
        <Grid/>
    </div>
  );
};

export default Home;
