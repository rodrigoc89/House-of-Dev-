import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalABM() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button variant="primary" onClick={handleShow}>
        Add New Property
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBathrooms">
              <Form.Label>Bathrooms</Form.Label>
              <Form.Control
                type="text"
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
                type="text"
                placeholder="number of bedrooms"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Bedrooms.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="$" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Price.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
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
              <Form.Control type="number" placeholder="m²" required />
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
              <Form.Control type="text" placeholder="url-image" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid url image.
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">DONE</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalABM;
