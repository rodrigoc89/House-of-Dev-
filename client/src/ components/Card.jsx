import { useState, useEffect } from "react";
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

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/property/${id}`, {
        withCredentials: true,
      })
      .then((home) => {
        setProperty(home.data);
      });
  }, []);

  return (
    <>
      <NavbarUser />
      <div className="conteiner-title-decoration-card" >
        <div className="decoration-card"></div>
        <h6 className="title-card"> DETALLES DE LA CASA </h6>
      </div>
        <div className="conteiner-card">
          <div className="conteiner-card-img">
            <Card.Img
            className="img-card"
              variant="top"
              src={property.image}
            />
          </div>
          <div className="conteiner-card-tex" >
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
                <div className="conteiner-buttons">
                  <a href="/">
                    <button className="buton-card button-volver-atras">
                      {svgs.regresar}
                      Volver atras
                    </button>
                  </a>

                  <a href="">
                    <button
                      className="buton-card button-pedir-cita">
                      {svgs.telefono}
                      Pedir cita
                    </button>
                  </a>
                </div>
              </ListGroup>
            </Card.Body>
          </div>
        </div>
    </>
  );
}

export default CardIndividual;
