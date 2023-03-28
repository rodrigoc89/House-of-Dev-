import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import "../styles/login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/user/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((user) => {
        dispatch(setUser(user.data));
        navigate("/");
      })
      .catch((error) => console.log(error, "no funciona"));
  };

  return (
    <div className="loginContainer">
      <div className="parte-de-arriba">
      <h1 style={{ color:"white", marginLeft:"2%", fontSize:"50px", fontWeight:"bold"}}>HOUSE</h1>
      <h1 style={{color:"transparent", webkitTextStroke: "1px white",fontSize:"50px", fontWeight:"bold", marginLeft:"30%"}}>OF DEV.</h1>
      <p style={{color:"white", fontSize:"14px", marginLeft:"36%", marginTop:"6%"}}>Tu nueva vivienda esta aqui</p>
    </div>
         <form className="parte-de-abajo" onSubmit={handleSubmit}> 
      <div className="grupo_input">
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
        <input className="input-login"  type="email" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className="grupo_input">
      <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock" viewBox="0 0 16 16">
  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
</svg>
      <input className="input-login" type="password" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)}></input>
      <Link>
      <p style={{marginLeft:"5%", fontSize:"12px", color:"#123AC8"}}>¿Olvidaste tu contraseña?</p>
      </Link>
      </div>
      <button className="butonBlue" type="submit">
        LOG IN
      </button>
    </form>
    </div>
  );
};

export default Login;
