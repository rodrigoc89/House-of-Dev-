import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "../../styles/FavoritesAdmin.css";

const ShowFavorites = ({ id }) => {
  const [show, setShow] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios
      .get(`http://localhost:3001/api/favorite/admin/${id}`, {
        withCredentials: true,
      })
      .then((data) => setFavorites(data.data));
    setShow(true);
  };
  return (
    <>
      <svg
        onClick={handleShow}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-eye-fill"
        viewBox="0 0 16 16"
        type="button"
        style={{
          marginLeft: "18px",
          color: "blue",
        }}
      >
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
      </svg>

      <Modal
        id="modal"
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Favoritos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {favorites.map((favorite) => {
            return (
              <>
                <Container key={favorite.id} className="container">
                  <Row>
                    <Col id="col" xs={12} md={6}>
                      <Card.Img className="card-img" src={favorite.image} />
                    </Col>
                    <Col xs={6} md={6}>
                      <div className="card-text-admin">
                        <Card.Text>Direccion</Card.Text>
                        <Card.Text>{favorite.address}</Card.Text>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowFavorites;
