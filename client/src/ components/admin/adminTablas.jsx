import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ModalABM from "./ModalABM";
import ModalProperty from "./ModalProperty";
import ModalUser from "./ModalUser";
import ShowFavorites from "./ShowFavorites";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setDebuggerUser } from "../../state/debuggerUser";
import {
  removeProperty,
  setDebuggerProperty,
} from "../../state/debuggerProperty";

function TableAdmin() {
  const userOnly = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const debuggerUser = useSelector((state) => state.debuggerUser);
  const debuggerProperty = useSelector((state) => state.debuggerProperty);

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
        heightAuto: true,
      }).then((response) => {
        if (response.isConfirmed) {
          axios
            .delete(`http://localhost:3001/api/user/${userId}`, {
              withCredentials: true,
            })
            .then(() => {
              console.log("USUARIO ELIMINADO");
              dispatch(removeUser(userId));
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

              dispatch(removeProperty(propertyId));

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
          dispatch(setDebuggerUser(response.data));
        });
    }
  }, []);

  useEffect(() => {
    if (debuggerProperty) {
      axios
        .get("http://localhost:3001/api/property", { withCredentials: true })
        .then((response) => {
          dispatch(setDebuggerProperty(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <div className="sizeTables" id="titleTableUser">
        <div className="containerTables"></div>
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

      <Table className="sizeTables">
        <thead style={{ backgroundColor: "#123AC8", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Favoritos</th>
            <th>Admin</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody id="SHORTCUT">
          {debuggerUser.map((user) => {
            return (
              <tr key={user.id}>
                <td style={{ textAlign: "center" }}>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  {user.name == "admin" || user.name === userOnly.name ? (
                    ""
                  ) : (
                    <ShowFavorites id={user.id} />
                  )}
                </td>
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

      <div className="sizeTables" id="titleTableProperty">
        <div className="containerTables"></div>
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
      <Table className="sizeTables">
        <thead style={{ backgroundColor: "#123AC8", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Bathing</th>
            <th>Beedrooms</th>
            <th>Price</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {debuggerProperty.map((property) => {
            return (
              <tr key={property.id}>
                <td style={{ textAlign: "center" }}>{property.id}</td>
                <td>{property.address}</td>
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
