import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import svgs from "../../commons/svgs";
import "../../styles/CitasAdmin.css";

export default function AdminCitas() {
  const [quotes, setQuotes] = useState([]);

  const cardSize = {
    width: "29rem",
    height: "16rem",
  };

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const appointments = await axios.get(
          "http://localhost:3001/api/appointment",
          { withCredentials: true }
        );
        setQuotes(appointments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppointment();
  }, []);
  return (
    <>
      <div
        style={{
          border: "1px solid #123AC8",
          width: "69.5%",
          marginTop: "2%",
          marginLeft: "13%",
          height: "42px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "75%",
            height: "1px",
            backgroundColor: "#123AC8",
            position: "absolute",
            bottom: "20%",
            left: "0%",
            marginLeft: "25%",
          }}
        ></div>
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
          {quotes.map((appointment) => {
            return (
              <Col xs={12} md={6} lg={5} style={{ padding: "1.6%" }}>
                <Card
                  id={appointment.id}
                  style={{
                    ...cardSize,
                    border: "none",
                    height: "100%",
                    borderRadius: "0px",
                    marginLeft: "15%",
                  }}
                >
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
                          src={appointment.image}
                        />
                      </div>

                      <button className="buton-appointments-admin">
                        CHAT {svgs.message}
                      </button>
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
                            {appointment.date.slice(8, 10)}-
                            {appointment.date.slice(5, 7)}-
                            {appointment.date.slice(0, 4)}
                          </div>
                          <div
                            style={{
                              fontWeight: "bolder",
                              width: "25%",
                              fontSize: "11px",
                              padding: "3%",
                              display: "flex",
                              alignItems: "center",
                              border: "1px solid #123AC8",
                            }}
                          >
                            {appointment.date.slice(11, 16) + " hs"}
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className="container-text-admin">
                            {svgs.ubicacion}
                            <p style={{ marginTop: "6%", marginLeft: "3%" }}>
                              {appointment.address}
                            </p>
                          </div>
                        </div>
                        <div className="container-text-admin">
                          <p className="p-appointments-admin">User</p>
                          <h6 className="h6-appointments-admin">
                            {appointment.userName.charAt(0).toUpperCase() +
                              appointment.userName.slice(1)}{" "}
                            {appointment.userLastName.charAt(0).toUpperCase() +
                              appointment.userLastName.slice(1)}
                          </h6>
                        </div>
                        <div className="container-text-admin">
                          <p className="p-appointments-admin">Telefono</p>
                          <h6 className="h6-appointments-admin">
                            {appointment.userPhone}
                          </h6>
                        </div>
                        <div
                          style={{ borderLeft: "1px solid #123AC8" }}
                          className="container-text-admin"
                        >
                          <p className="p-appointments-admin">Email</p>
                          <h6 className="h6-appointments-admin">
                            {appointment.userEmail}
                          </h6>
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
