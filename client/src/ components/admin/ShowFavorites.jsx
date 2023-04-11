import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

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
      <Button variant="primary" onClick={handleShow}>
        ver
      </Button>

      <Modal
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
        <Modal.Body>
          {favorites.map((house) => {
            return (
              <>
                <Container key={house.id} style={{ marginBottom: "10px" }}>
                  <Row>
                    <Col xs={12} md={6}>
                      <Card.Img
                        // variant="top"
                        src={house.image}
                        style={{ width: "300px" }}
                      />
                    </Col>
                    <Col xs={6} md={6} style={{ textAlign: "center" }}>
                      <Card.Text style={{ fontWeight: "bolder" }}>
                        Direccion
                      </Card.Text>
                      <Card.Text>{house.address}</Card.Text>
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
