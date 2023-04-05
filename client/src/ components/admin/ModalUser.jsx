import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMikkieHerramientaUser } from "../../state/mikkieHerramientaUser";

function ModalUser({ id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };
  console.log(isAdmin);
  const handleClick = () => {
    setShow(true);
    axios
      .get(`http://localhost:3001/api/user/admin/${id}`, {
        withCredentials: true,
      })
      .then((user) => setUser(user.data));
  };
  const handleSubmit = () => {
    setShow(false);
    axios
      .put(
        `http://localhost:3001/api/user/${id}`,
        { admin: isAdmin },
        { withCredentials: true }
      )
      .then(() => {
        dispatch(setMikkieHerramientaUser(true));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <svg
        style={{ color: "blue", marginLeft: "20%" }}
        onClick={handleClick}
        type="button"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pen"
        viewBox="0 0 16 16"
      >
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
      </svg>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" defaultValue={user.name} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>LastName</Form.Label>
              <Form.Control type="text" defaultValue={user.lastName} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="numb" defaultValue={user.phone} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" defaultValue={user.email} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Admin</Form.Label>
              <Form.Check
                type="checkbox"
                label="admin"
                onChange={handleCheckboxChange}
                checked={isAdmin}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalUser;
