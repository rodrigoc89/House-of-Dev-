import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";
import svgs from "../commons/svgs";
import "../styles/login.css";
import "../styles/register.css";
function FormRegister() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone);
    axios
      .post(
        "http://localhost:3001/api/user/register",
        {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
          phone: phone,

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
          width: "55%",
          margin: "0 auto",
          padding: "4%",
          backgroundColor: "white",
          marginTop: "2%",
          boxShadow: "0px 0px 30px #000",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "8%",
            color: "black",
            fontSize: "38px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            WebkitTextStroke: "2px black",
          }}
        >
          Sign up
        </h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <svg
              id="icons-register"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <label className="label-register">Email :</label>
            <input
              className="input-register"
              type="email"
              placeholder="Add your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <svg
              id="icons-register"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <label className="label-register">Name :</label>
            <input
              className="input-register"
              type="text"
              placeholder="Add your name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress1">
            <svg
              id="icons-register"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>
            <label className="label-register">Password :</label>
            <input
              className="input-register"
              type="password"
              placeholder="Add your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress2">
            <svg
              id="icons-register"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <label className="label-register">Last name :</label>
            <input
              className="input-register"
              type="text"
              placeholder="Add your last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>
        <svg
          id="icons-register"
          style={{ marginLeft: "10%" }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-telephone"
          viewBox="0 0 16 16"
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
        </svg>
        <label style={{ textAlign: "center" }} className="label-register">
          Phone :
        </label>
        <input
          style={{ width: "60%", marginLeft: "20%" }}
          className="input-register"
          type="number"
          placeholder="Add your last phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="buton-register" type="submit">
          check in
        </button>
      </Form>
    </div>
  );
}

export default FormRegister;
