import React, { useState } from "react";
import "../styles/Profile.css";
import { useSelector, useDispatch } from "react-redux";
import NavbarUser from "./Navbar";
import axios from "axios";
import { setUser } from "../state/user";
import svgs from "../commons/svgs";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);

  function handleEditClick() {
    if (isEditing) {
      axios
        .put(
          `http://localhost:3001/api/user/profile/${user.id}`,
          {
            name: name,
            lastName: lastName,
            phone: phone,
          },
          { withCredentials: true }
        )
        .then((user) => {
          dispatch(setUser(user.data));
          console.log(user.data);
          setIsEditing(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsEditing(true);
    }
  }

  return (
    <>
      <NavbarUser />
      <div className="conteiner-profile">
        <div className="conteiner-title-decoration-profile">
          <div className="decoration-profile"></div>
          <h6 className="title-profile"> MI PERFIL </h6>
        </div>
        <div className="conteiner-button-picture-name">
          <button className="buton-profile" onClick={handleEditClick}>
            {isEditing ? "GUARDAR" : "EDITAR"}
            <span className="icon-profile-pencil">{svgs.pencil}</span>
          </button>
          <p className="name-profile">
            Nombre
          </p>
          {isEditing ? (
            <input
            className="input-name-profile"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value),
                  console.log(event.target.value, "");
              }}
            />
          ) : (
            <h5 className="h5-name-profile" >
              {user.name}
            </h5>
          )}
          <hr className="hr-name-profile"
          />
          <img
          className="img-profile"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            width="150"
            height="150"
          />
        </div>
        <div className="conteiner-apellido-email-celular-contarseña">
          <h6 className="h6-apellido-email-celular-contraseña" >
            Apellido
          </h6>
          {isEditing ? (
            <input className="input-h5-apellido-email-celular-contraseña" 
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          ) : (
            <h5 className="input-h5-apellido-email-celular-contraseña" >
              {user.lastName}
            </h5>
          )}
          <hr className="hr-perfil" />

          <h6 className="h6-apellido-email-celular-contraseña" >
            Email
          </h6>
          <h5 className="input-h5-apellido-email-celular-contraseña">
            {user.email}
          </h5>
          <hr className="hr-perfil" />

          <h6 className="h6-apellido-email-celular-contraseña">
            Celular
          </h6>
          {isEditing ? (
            <input
            className="input-h5-apellido-email-celular-contraseña"
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          ) : (
            <h5 className="input-h5-apellido-email-celular-contraseña">
              {user.phone}
            </h5>
          )}
          <hr className="hr-perfil" />

          <h6 className="h6-apellido-email-celular-contraseña" >
            Contraseña
          </h6>
          <h5 className="input-h5-apellido-email-celular-contraseña">
            ***************
          </h5>
          <hr className="hr-perfil" />
        </div>
      </div>
    </>
  );
};

export default Profile;
