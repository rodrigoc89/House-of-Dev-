import { Route, Routes } from "react-router";
import Login from "./ components/Login";
import Home from "./commons/Home";
import FormRegister from "./ components/Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<FormRegister />} />
      </Routes>
    </div>
  );
}

export default App;
