import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalABM() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [address, setAddress] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");
  const [m2, setM2] = useState("");
  const [image, setImage] = useState("");
  const [options, setOptions] = useState("");
  const [description, setDescription] = useState("");
  // const [available, setAvailable] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const property = {
      address: address,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      price: price,
      m2: m2,
      image: image,
      options: options,
      available: true,
      description: description,
    };
    console.log(property);
    axios
      .post("http://localhost:3001/api/property", property, {
        withCredentials: true,
      })
      .then(() => console.log("create"));
  };
  const handleClick = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  console.log(options);

  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "initial",
        marginLeft: "13%",
        marginTop: "1%",
      }}
    >
      <Button variant="primary" onClick={handleShow}>
        Add New Property
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        on
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                minLength={6}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter address"
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
                placeholder="number of bathrooms"
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
                placeholder="number of bedrooms"
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
                placeholder="$"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Price.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                minLength={64}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="enter description"
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
                placeholder="m²"
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
                  />
                  <Form.Check
                    inline
                    label="Rent"
                    value="rent"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="url-image"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid url image.
              </Form.Control.Feedback>
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

export default ModalABM;
