import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch= useDispatch()


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
        dispatch(setUser(user.data))
        navigate("/");
      })
      .catch((error) => console.log(error, "no funciona"));
  };

  return (
    <>
    <div style={{height:"370px", width:"50%", display:"flex", alignItems:"center", marginTop:"9%",marginLeft:"22%", justifyContent:"center", borderRadius:"50px", backgroundColor:"#FE4236"}}>
    <h1 style={{marginRight:"10%", fontWeight:"1000", fontSize:"250%", fontFamily:"sans-serif", color:"white"}}>Ingresar</h1>
    <Form  onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"bold", color:"white"}}>Email</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Ingresar email"/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontWeight:"bold", color:"white"}}>Contraseña</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="Ingresar contraseña"/>
      </Form.Group>
      <Button style={{width:"100%"}} variant="light" type="submit">
        Iniciar sesión
      </Button>
      <Link to={"/register"}>
      <Button style={{width:"70%", marginTop:"5%", marginLeft:"15%"}} variant="secondary" type="submit">
        Crear cuenta nueva
      </Button>
      </Link>
    </Form>
    </div>
    </>
  );
};

export default Login;