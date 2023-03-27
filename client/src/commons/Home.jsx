import { Routes,Route } from "react-router";
import Grid from "../ components/Grid";
import NavbarUser from "../ components/Navbar";

const Home = () => {
  return (
    <div> 
      <NavbarUser />
      <Routes>
        <Route path="/" element={<Grid/>}/>
      </Routes>
    </div>
  );
};

export default Home;
