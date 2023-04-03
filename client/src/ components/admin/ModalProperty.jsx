import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { setMikkieHerramientaProperty } from "../../state/mikkieHerramientaProperty";

function ModalProperty({ id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const [property, setProperty] = useState({});
  const [address, setAddress] = useState(property.address);
  const [bathrooms, setBathrooms] = useState(property.bathrooms);
  const [bedrooms, setBedrooms] = useState(property.bedrooms);
  const [price, setPrice] = useState(property.price);
  const [m2, setM2] = useState(property.m2);
  const [image, setImage] = useState(property.image);
  const [options, setOptions] = useState(property.options);
  const [description, setDescription] = useState(property.description);
  const [available, setAvailable] = useState(false);

  // CLOSE MODAL
  const handleClose = () => setShow(false);
  // OPEN AND SHOW DATA OF PROPERTY
  const handleShow = () => {
    axios
      .get(`http://localhost:3001/api/property/${id}`, {
        withCredentials: true,
      })
      .then((property) => setProperty(property.data));
    setShow(true);
  };
  // SEND UPDATE DATA OF PROPERTY
  const handleSubmit = (event) => {
    setShow(false);
    const property = {
      address: address,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      price: price,
      m2: m2,
      image: image,
      options: options,
      available: available,
      description: description,
    };
    event.preventDefault();
    axios
      .put(`http://localhost:3001/api/property/${id}`, property, {
        withCredentials: true,
      })
      .then(() => {
        console.log("actualized"), dispatch(setMikkieHerramientaProperty(true));
      });
  };
  // VALIDATE INPUTS
  const handleClick = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  console.log(available);
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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                defaultValue={property.address}
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
                defaultValue={property.bathrooms}
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
                defaultValue={property.bedrooms}
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
                defaultValue={property.price}
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
                defaultValue={property.description}
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
                defaultValue={property.m2}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid value.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicOptions"
              onChange={(e) => setOptions(e.target.value)}
            >
              <Form.Label>Options</Form.Label>

              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Sale"
                    value="sale"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    checked={property.options == "sale" ? "checked" : null}
                  />

                  <Form.Check
                    inline
                    label="Rent"
                    value="rent"
                    name="group2"
                    type={type}
                    id={`inline-${type}-2`}
                    checked={property.options == "rent" ? "checked" : null}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                onChange={(e) => setImage(e.target.value)}
                type="text"
                defaultValue={property.image}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid url image.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Available</Form.Label>

              <Form.Check
                label={property.available ? "YES" : "NO"}
                type="switch"
                onChange={(e) => setAvailable(e.target.value)}
                checked={property.available ? "checked" : ""}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClick}>
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
