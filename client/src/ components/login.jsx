import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      .then((res) => {
        navigate("/");
      })
      .catch((error) => console.log(error, "no funciona"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email"></label>
        <input
          type="email"
          name="Email"
          required={true}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          required={true}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" name="register" />
      </form>
    </div>
  );
};

export default Login;
