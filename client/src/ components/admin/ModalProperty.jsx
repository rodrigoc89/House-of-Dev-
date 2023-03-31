import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalProperty({ id }) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [property, setProperty] = useState([]);
  const [address, setAddress] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");
  const [m2, setM2] = useState("");
  const [image, setImage] = useState("");
  // const [options, setOptions] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    const property = {
      address: address,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      price: price,
      m2: m2,
      image: image,
      // options: options,
      available: true,
      description: description,
    };
    event.preventDefault();
    axios
      .put(`http://localhost:3001/api/property/${id}`, property, {
        withCredentials: true,
      })
      .then(() => console.log("actualized"));
  };
  const handleClick = (event) => {
    axios
      .get(`http://localhost:3001/api/property/${id}`, {
        withCredentials: true,
      })
      .then((house) => setProperty([house.data]));
    const form = event.currentTargett;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onClick={handleClick}
            onSubmit={handleSubmit}
          >
            {property.map((house) => (
              <>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    defaultValue={house.address}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid address.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBathrooms">
                  <Form.Label>Bathrooms</Form.Label>
                  <Form.Control
                    onChange={(e) => setBathrooms(e.target.value)}
                    type="number"
                    defaultValue={house.bathrooms}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid numb of Bathrooms.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBedrooms">
                  <Form.Label>Bedrooms</Form.Label>
                  <Form.Control
                    onChange={(e) => setBedrooms(e.target.value)}
                    type="number"
                    defaultValue={house.bedrooms}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Bedrooms.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    defaultValue={house.price}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Price.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    defaultValue={house.description}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Description.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicM²">
                  <Form.Label>m²</Form.Label>
                  <Form.Control
                    onChange={(e) => setM2(e.target.value)}
                    type="number"
                    defaultValue={house.m2}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid value.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicOptions">
                  <Form.Label>Options</Form.Label>
                  <Form.Check
                    feedback="You must select at option before submitting."
                    type="checkbox"
                    label="Rent"
                    value="Rent"
                  />
                  <Form.Check
                    feedback="You must select at option before submitting."
                    type="checkbox"
                    label="Sale"
                    value="Sale"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    defaultValue={house.image}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid url image.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label>Available</Form.Label>
                  <Form.Check type="checkbox" value={true} />
                </Form.Group>
              </>
            ))}

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                DONE
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalProperty;
