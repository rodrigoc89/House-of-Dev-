import { Routes,Route } from "react-router";
import Grid from "../ components/Grid";
import NavbarUser from "../ components/Navbar";
import TestGrid from "../ components/TestGrid";

const Home = () => {
  return (
    <div> 
      <NavbarUser />
      <Routes>
        <Route path="/" element={<TestGrid/>}/>
      </Routes>
    </div>
  );
};

export default Home;
