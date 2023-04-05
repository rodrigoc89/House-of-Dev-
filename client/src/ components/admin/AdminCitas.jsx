import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import svgs from "../../commons/svgs";
import "../../styles/CitasAdmin.css"
import { useSelector } from "react-redux";

export default function AdminCitas() {
  const [quotes, setQuotes] = useState([]);

  const randomHour = Math.floor(Math.random() * 8) + 9; 
  const randomMinute = Math.floor(Math.random() * 60); 
  const appointmentTime = `${randomHour.toString().padStart(2, '0')}:${randomMinute.toString().padStart(2, '0')}`;

  const cardSize = {
    width: "29rem",
    height: "16rem",
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/appointment", { withCredentials: true })
      .then((citas) => {
        setQuotes(citas.data);
      });
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

<div>

</div>
<Container style={{ width: "100%", color: "#123AC8" }}>
        <Row>
          {quotes.map((cita) => {
            return (
              <Col xs={12} md={6} lg={5} style={{ padding: "1.6%" }}>
               
                  <Card
                    id={cita.id}
                    style={{
                      ...cardSize,
                      border:"none",                                   
                      height: "100%",
                      borderRadius: "0px",
                      marginLeft: "15%",
                    }}
                  >
                    <Row>
                      <Col xs={5}>
                        <div style={{border: "1px solid #123AC8",height: "79%",marginLeft:"6%"}}>
                          <Card.Img
                          style={{
                            height:"100%",
                            borderRight: "1px solid #123AC8",
                            padding: "2%",
                            borderRadius: "0%",
                          }}
                          src={cita.image}
                        />
                        </div>
                        
                        <button className="buton-citas-admin">CHAT {svgs.message}</button>
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
                                fontWeight:"bolder",
                                width: "75%",
                                padding: "3%",
                                height:"35px",
                                alignItems: "center",
                                fontSize: "12px",
                                border: "1px solid #123AC8",
                              }}
                            >
                              {cita.date}
                            </div>
                            <div
                              style={{
                                fontWeight:"bolder",
                                width: "25%",
                                fontSize: "11px",
                                padding: "3%",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #123AC8",
                              }}
                            >
                              {appointmentTime+ " hs"}
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            <div
                            className="container-text-admin"
                            
                            >
                              {svgs.ubicacion}
                              <p style={{marginTop:"6%", marginLeft:"3%"}}>{cita.address}</p>
                              
                            </div>
                            
                          </div>
                          <div
                              className="container-text-admin"
                            >
                              <p className="p-citas-admin">User</p>
                              <h6 className="h6-citas-admin">{cita.userName.charAt(0).toUpperCase() + cita.userName.slice(1)} {cita.userLastName.charAt(0).toUpperCase() + cita.userLastName.slice(1)}</h6>
                            </div>
                            <div
                              className="container-text-admin"
                            >
                              <p className="p-citas-admin">Telefono</p>
                              <h6 className="h6-citas-admin">{cita.userPhone}</h6>
                            </div>
                            <div
                            style={{borderLeft:"1px solid #123AC8"}}
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
  )
}
