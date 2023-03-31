import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ModalABM from "./ModalABM";
import ModalProperty from "./ModalProperty";
import ModalUser from "./ModalUser";

function TableAdmin() {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user", { withCredentials: true })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property", { withCredentials: true })
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.log(error);
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
          PANEL USUARIOS
        </h6>
      </div>

      <Table
        style={{
          width: "69.5%",
          marginLeft: "13%",
          marginTop: "2%",
          border: "3px solid #123AC8",
        }}
        striped
      >
        <thead style={{ backgroundColor: "#123AC8", color: "white" }}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <ModalUser />
                </td>
                <td>
                  <svg
                    style={{ marginLeft: "30%" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

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
          PANEL PROPERTIES
        </h6>
      </div>
      <ModalABM />
      <Table
        style={{
          width: "69.5%",
          marginLeft: "13%",
          marginTop: "2%",
          border: "3px solid #123AC8",
        }}
        striped
      >
        <thead style={{ backgroundColor: "#123AC8", color: "white" }}>
          <tr>
            <th>id</th>
            <th>Direccion</th>
            <th>Baños</th>
            <th>Dormitorios</th>
            <th>Precio</th>
            <th>EDITAR</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => {
            return (
              <tr key={property.id}>
                <td>{property.id}</td>
                <td>{property.address}</td>
                <td>{property.bathrooms}</td>
                <td>{property.bedrooms}</td>
                <td>{property.price + " $"}</td>
                <td>
                  <ModalProperty id={property.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableAdmin;
