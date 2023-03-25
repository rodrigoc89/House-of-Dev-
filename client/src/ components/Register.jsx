import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";
import "../styles/login.css";
function FormRegister() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/user/register",
        {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((data) => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="loginContainer">
      <Form
        onSubmit={handleSubmit}
        style={{
          width: "80%",
          margin: "0 auto",
          padding: "5%",
          backgroundColor: "#FE4236",
          borderRadius: "50px",
          marginTop: "4%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "3%",
            color: "white",
            fontWeight: "500",
          }}
        >
          Registrarte
        </h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{ color: "white", fontWeight: "bold" }}>
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label style={{ color: "white", fontWeight: "bold" }}>
              Contraseña
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label style={{ color: "white", fontWeight: "bold" }}>
              Nombre
            </Form.Label>
            <Form.Control
              placeholder="Ingrese su nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label style={{ color: "white", fontWeight: "bold" }}>
              Apellido
            </Form.Label>
            <Form.Control
              placeholder="Ingrese su apellido"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Button
          variant="light"
          type="submit"
          style={{ width: "21%", marginLeft: "40%", marginTop: "2%" }}
        >
          Registrarse
        </Button>
      </Form>
    </div>
  );
}

export default FormRegister;
