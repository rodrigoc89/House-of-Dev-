import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import svgs from "../../commons/svgs";
import "../../styles/CitasAdmin.css";
import { useSelector } from "react-redux";
import Chat from "./Chat";


export default function AdminCitas() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/appointment", { withCredentials: true })
      .then((citas) => {
        setQuotes(citas.data);
      });
  }, []);
  return (
    <>
      <div className="sizeTables" id="titleAppointmentsSize">
        <div className="containerTables"></div>
        <h6
          style={{
            paddingTop: "1.9%",
            paddingLeft: "1%",
            color: "#123AC8",
            fontWeight: "bolder",
          }}
        >
          PROXIMAS CITAS
        </h6>
      </div>
      <Container style={{ width: "100%", color: "#123AC8" }}>
        <Row>
          {quotes.map((cita) => {
            return (
              <Col xs={12} md={6} lg={5} style={{ padding: "1.6%" }}>
                <Card id={cita.id} className="cardZiseAppointments" class>
                  <Row>
                    <Col xs={5}>
                      <div
                        style={{
                          border: "1px solid #123AC8",
                          height: "79%",
                          marginLeft: "6%",
                        }}
                      >
                        <Card.Img
                          style={{
                            height: "100%",
                            borderRight: "1px solid #123AC8",
                            padding: "2%",
                            borderRadius: "0%",
                          }}
                          src={cita.image}
                        />
                      </div>
                      <Chat
                        receiverId={cita.UserId}
                        userName={`${
                          cita.userName.charAt(0).toUpperCase() +
                          cita.userName.slice(1)
                        } 
                          ${
                            cita.userLastName.charAt(0).toUpperCase() +
                            cita.userLastName.slice(1)
                          }`}
                        // {cita.userLastName.charAt(0).toUpperCase() +
                        //   cita.userLastName.slice(1)}
                      />
                    </Col>
                    <Col xs={7}>
                      <Card.Body
                        style={{
                          padding: "0%",
                          marginLeft: "0%",
                          marginRight: "4%",
                          height: "100%",
                        }}
                      >
                        <div style={{ width: "100%", display: "flex" }}>
                          <div
                            style={{
                              fontWeight: "bolder",
                              width: "75%",
                              padding: "3%",
                              height: "35px",
                              alignItems: "center",
                              fontSize: "12px",
                              border: "1px solid #123AC8",
                            }}
                          >
                            {cita.date.slice(4, 15)}
                          </div>
                          <div className="hourInAppointment">
                            {cita.date.slice(16, 21) + " hs"}
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className="container-text-admin">
                            {svgs.ubicacion}
                            <p style={{ marginTop: "6%", marginLeft: "3%" }}>
                              {cita.address}
                            </p>
                          </div>
                        </div>
                        <div className="container-text-admin">
                          <p className="p-citas-admin">User</p>
                          <h6 className="h6-citas-admin">
                            {cita.userName.charAt(0).toUpperCase() +
                              cita.userName.slice(1)}{" "}
                            {cita.userLastName.charAt(0).toUpperCase() +
                              cita.userLastName.slice(1)}
                          </h6>
                        </div>
                        <div className="container-text-admin">
                          <p className="p-citas-admin">Telefono</p>
                          <h6 className="h6-citas-admin">{cita.userPhone}</h6>
                        </div>
                        <div
                          style={{ borderLeft: "1px solid #123AC8" }}
                          className="container-text-admin"
                        >
                          <p className="p-citas-admin">Email</p>
                          <h6 className="h6-citas-admin">{cita.userEmail}</h6>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
