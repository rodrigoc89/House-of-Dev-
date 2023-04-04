import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import "../styles/Card.css";
import axios from "axios";
import NavbarUser from "./Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import svgs from "../commons/svgs";

function CardIndividual() {
  const [property, setProperty] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/property/${id}`, {
        withCredentials: true,
      })
      .then((home) => {
        setProperty(home.data);
      });
  }, []);
  console.log(property);
  return (
    <>
      <NavbarUser />
      <div
        style={{
          border: "1px solid #123AC8",
          width: "75%",
          marginTop: "2%",
          marginLeft: "12.4%",
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
          DETALLES DE LA CASA
        </h6>
      </div>
      <Card className="text-center conteiner-card">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1,}}>
            <Card.Img
              style={{ padding: "5%",height:"100%", width:"100%"}}
              variant="top"
              src={property.image}
            />
          </div>
          <div style={{ flex: 2 }}>
            <Card.Body className="card-tex">
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Direccion:</strong> {property.address}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Habitaciones:</strong> {property.bedrooms}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Baños:</strong> {property.bathrooms}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Description:</strong> {property.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Metros Cuadrados:</strong> {property.m2}m²
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong> Precio: </strong>${property.price}
                </ListGroup.Item>
                <div style={{ display: "flex", marginTop:"5%"}}>
                  <a href="/">
                    <button className="buton-card">
                      {svgs.regresar}
                      Volver atras
                    </button>
                  </a>

                  <a href="">
                    <button className="buton-card" style={{ marginLeft: "35%" }}>
                      {svgs.telefono}
                      Pedir cita
                    </button>
                  </a>
                </div>
              </ListGroup>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
}

export default CardIndividual;