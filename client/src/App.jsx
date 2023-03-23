import { Route, Routes } from "react-router";
import Login from "./ components/Login";
import Home from "./commons/Home";
import FormRegister from "./ components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/me", { withCredentials: true })
      .then((user) => {
        console.log(user.data.user), dispatch(setUser(user.data.user));
      });
  });
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
