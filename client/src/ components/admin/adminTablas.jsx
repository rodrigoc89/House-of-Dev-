import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function TableAdmin() {
  const [users, setUsers] = useState([]);
  const [propiedades, setPropiedades] = useState([]);

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
        setPropiedades(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(propiedades);
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
        style={{ width: "69.5%", marginLeft: "13%", marginTop: "2%", border:"3px solid #123AC8"}}
        striped
      >
        <thead style={{ backgroundColor: "#123AC8", color: "white"}}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
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
      <Table
        style={{
          width: "69.5%",
          marginLeft: "13%",
          marginTop: "2%",
          marginBottom: "5%",
          border:"3px solid #123AC8",
        }}
        striped
      >
        <thead style={{ backgroundColor: "#123AC8", color: "white",}}>
          <tr>
            <th>id</th>
            <th>Direccion</th>
            <th>Baños</th>
            <th>Dormitorios</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {propiedades.map((propiedad) => {
            return (
              <tr>
                <td>{propiedad.id}</td>
                <td>{propiedad.address}</td>
                <td>{propiedad.bathrooms}</td>
                <td>{propiedad.bedrooms}</td>
                <td>{propiedad.price + " $"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableAdmin;
