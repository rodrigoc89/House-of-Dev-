import React, { useEffect, useState } from "react";
import "../styles/Perfil.css";
import { useSelector, useDispatch } from "react-redux";
import NavbarUser from "./Navbar";
import axios from "axios";
import { setUser } from "../state/user";

const Pefil = () => {
  const user = useSelector((state) => state.user);
  const dispach = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [celular, setCelular] = useState("45678912");

  function handleEditClick() {
    if (isEditing) {
      axios
        .put(
          `http://localhost:3001/api/user/profile/${user.id}`,
          {
            name: name,
            lastName: lastName,
          },
          { withCredentials: true }
        )
        .then((user) => {
          dispach(setUser(user.data));
          console.log(user.data);
          setIsEditing(false);
          console.log("Datos actualizados");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsEditing(true);
      console.log("Editar");
    }
  }
  return (
    <>
      <NavbarUser />
      <div className="content">
        <div
          style={{
            border: "1px solid #123AC8",
            width: "69.5%",
            marginLeft: "14%",
            height: "45px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "83%",
              height: "1px",
              backgroundColor: "#123AC8",
              position: "absolute",
              bottom: "20%",
              left: "0%",
              marginLeft: "17%",
            }}
          ></div>
          <h6
            style={{
              paddingTop: "3%",
              paddingLeft: "2%",
              color: "#123AC8",
              fontWeight: "bolder",
            }}
          >
            MI PERFIL
          </h6>
        </div>
        <div
          style={{
            display: "flex",
            width: "69.6%",
            marginLeft: "13.9%",
            marginTop: "1%",
          }}
        >
          <button className="buton-perfil" onClick={handleEditClick}>
            {isEditing ? "GUARDAR" : "EDITAR"}
            <svg
              style={{
                marginLeft: "5%",
                width: "31px",
                height: "31px",
                padding: "6%",
                borderRadius: "20px",
                border: "1px solid #FE4236",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
          <p
            style={{
              marginTop: "6%",
              position: "absolute",
              color: "#123AC8",
              fontSize: "15px",
            }}
          >
            Nombre
          </p>
          {isEditing ? (
            <input
              style={{
                marginTop: "7%",
                position: "absolute",
                fontSize: "17px",
                fontWeight: "bold",
              }}
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value),
                  console.log(event.target.value, "");
              }}
            />
          ) : (
            <h5
              style={{
                marginTop: "8%",
                position: "absolute",
                color: "#123AC8",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              {user.name}
            </h5>
          )}
          <hr
            style={{
              width: "35%",
              height: "3px",
              position: "absolute",
              marginTop: "10.5%",
              backgroundColor: "blue",
            }}
          />
          <img
            style={{ marginLeft: "60%" }}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            width="150"
            height="150"
          />
        </div>
        <div style={{ width: "69.6%", marginLeft: "13.9%" }}>
          <h6
            style={{
              marginTop: "2%",
              color: "#123AC8",
              fontSize: "15px",
              paddingBottom: "0px",
            }}
          >
            Apellido
          </h6>
          {isEditing ? (
            <input
              style={{
                color: "#123AC8",
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "0%",
              }}
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          ) : (
            <h5
              style={{
                color: "#123AC8",
                fontSize: "17px",
                marginBottom: "0%",
                fontWeight: "bold",
              }}
            >
              {user.lastName}
            </h5>
          )}
          <hr className="hr-perfil" />

          <h6
            style={{
              marginTop: "2%",
              color: "#123AC8",
              fontSize: "15px",
              paddingBottom: "0px",
            }}
          >
            Email
          </h6>
          <h5
            style={{
              color: "#123AC8",
              fontSize: "17px",
              marginBottom: "0%",
              fontWeight: "bold",
            }}
          >
            {user.email}
          </h5>
          <hr className="hr-perfil" />

          <h6
            style={{
              marginTop: "2%",
              color: "#123AC8",
              fontSize: "15px",
              paddingBottom: "0px",
            }}
          >
            Celular
          </h6>
          {isEditing ? (
            <input
              style={{
                color: "#123AC8",
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "0%",
              }}
              type="text"
              value={celular}
              onChange={(event) => setCelular(event.target.value)}
            />
          ) : (
            <h5
              style={{
                color: "#123AC8",
                fontSize: "17px",
                marginBottom: "0%",
                fontWeight: "bold",
              }}
            >
              {celular}
            </h5>
          )}
          <hr className="hr-perfil" />

          <h6
            style={{
              marginTop: "2%",
              color: "#123AC8",
              fontSize: "15px",
              paddingBottom: "0px",
            }}
          >
            Contraseña
          </h6>
          <h5
            style={{
              color: "#123AC8",
              fontSize: "17px",
              marginBottom: "0%",
              fontWeight: "bold",
            }}
          >
            ***************
          </h5>
          <hr className="hr-perfil" />
        </div>
      </div>
    </>
  );
};

export default Pefil;
