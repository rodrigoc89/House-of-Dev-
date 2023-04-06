import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ModalABM from "./ModalABM";
import ModalProperty from "./ModalProperty";
import ModalUser from "./ModalUser";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { setDebuggerUser } from "../../state/debuggerUser";
import { setDebuggerProperty } from "../../state/debuggerProperty";

function TableAdmin() {
  const userOnly = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const debuggerUser = useSelector((state) => state.debuggerUser);
  const debuggerProperty = useSelector((state) => state.debuggerProperty);
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);

  const handleDeleteUser = (userId) => {
    if (userId) {
      Swal.fire({
        title: "Alerta",
        text: "¿Esta seguro que quiere eliminar este usuario?",
        icon: "question",
        showDenyButton: true,
        denyButtonText: "no",
        confirmButtonText: "si",
        confirmButtonColor: "#123AC8",
      }).then((response) => {
        if (response.isConfirmed) {
          axios
            .delete(`http://localhost:3001/api/user/${userId}`, {
              withCredentials: true,
            })
            .then(() => {
              console.log("USUARIO ELIMINADO");
              setUsers(users.filter((user) => user.id !== userId));

              Swal.fire({
                title: "Alerta",
                text: "usuario eliminado",
                icon: "success",
                confirmButtonText: "ok",
                timer: "2000",
              });
            });
        } else {
          Swal.fire({
            title: "Alerta",
            icon: "error",
            html: "<p>el usario <b>NO</b> fue eliminado</p>",
            timer: "2000",
          });
        }
      });
    }
  };

  const handleDeleteProperty = (propertyId) => {
    if (propertyId) {
      Swal.fire({
        title: "Alerta",
        text: "¿Esta seguro que quiere eliminar esta propiedad?",
        icon: "question",
        showDenyButton: true,
        denyButtonText: "no",
        confirmButtonText: "si",
        confirmButtonColor: "#123AC8",
      }).then((response) => {
        if (response.isConfirmed) {
          axios
            .delete(`http://localhost:3001/api/property/${propertyId}`, {
              withCredentials: true,
            })
            .then(() => {
              console.log("YA BORREEEE LA PROPIEDAAAAAD");
              setProperties(
                properties.filter((property) => property.id !== propertyId)
              );

              Swal.fire({
                title: "Alerta",
                text: "propiedad eliminada",
                icon: "success",
                confirmButtonText: "ok",
                timer: "2000",
              });
            });
        } else {
          Swal.fire({
            title: "Alerta",
            icon: "error",
            html: "<p>la propiedad <b>NO</b> fue eliminada</p>",
            timer: "2000",
          });
        }
      });
    }
  };

  useEffect(() => {
    if (debuggerUser) {
      axios
        .get("http://localhost:3001/api/user", { withCredentials: true })
        .then((response) => {
          setUsers(response.data);
          dispatch(setDebuggerUser(false));
        });
    }
  }, [debuggerUser]);

  useEffect(() => {
    if (debuggerProperty) {
      axios
        .get("http://localhost:3001/api/property", { withCredentials: true })
        .then((response) => {
          setProperties(response.data);
          dispatch(setDebuggerProperty(false));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [debuggerProperty]);

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
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td style={{ textAlign:"center"}}>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.admin ? "True" : "False"}</td>
                <td>
                  {user.name == "admin" || user.name === userOnly.name ? (
                    ""
                  ) : (
                    <ModalUser id={user.id} />
                  )}
                </td>
                <td>
                  {user.name == "admin" || user.name === userOnly.name ? (
                    ""
                  ) : (
                    <button
                      type="button"
                      style={{
                        marginLeft: "30%",
                        color: "red",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>
                    </button>
                  )}
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
          PANEL PROPIEDADES
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
            <th>ID</th>
            <th>Direccion</th>
            <th>Baños</th>
            <th>Dormitorios</th>
            <th>Precio</th>
            <th>EDITAR</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => {
            return (
              <tr key={property.id}>
                <td style={{textAlign:"center"}}>{property.id}</td>
                <td style={{wordSpacing:"4px"}}>{property.address}</td>
                <td>{property.bathrooms}</td>
                <td>{property.bedrooms}</td>
                <td>{property.price + " $"}</td>
                <td>
                  <ModalProperty id={property.id} pro={property} />
                </td>
                <td>
                  <button
                    type="button"
                    style={{
                      marginLeft: "30%",
                      color: "red",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    onClick={() => handleDeleteProperty(property.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </button>
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
