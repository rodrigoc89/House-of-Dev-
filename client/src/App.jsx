import { Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./ components/login";
import Home from "./commons/home";
import FormRegister from "./ components/register";

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
