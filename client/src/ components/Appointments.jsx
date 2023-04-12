import React from "react";
import NavbarUser from "./Navbar";
import { useSelector } from "react-redux";
import "../styles/Citas.css"
import svgs from "../commons/svgs";

const Appointments = () => {
  const appointments = useSelector((state) => state.appointment);
  console.log(appointments);
  return (
    <div>
      <NavbarUser />

      <div>
        {!appointments[0] ? (
          <h1> don´t have appointments</h1>
        ):(
          <>
          <div className="conteiner-title-decoration-appointmens">
        <div className="decoration-appointments"></div>
        <h6 className="title-appointments">
          CITAS USUARIO
        </h6>
      </div>
          <div>
            {appointments.map((appointment) => {
              return (
                <div className="conteiner-appointments">
                  <div className="conteiner-img-appointmens">
                    <img
                      src={appointment.image}
                      alt="non"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="conteiner-dirrecion-hora-fecha">
                    <p className="text-citas">
                    <span className="icon-citas">{svgs.ubicacion}</span>
                    <strong style={{marginRight: "0.5rem"}}>Dirrecion: </strong>{appointment.address}
                    </p>
                    <p className="text-citas">
                     <span className="icon-citas">{svgs.time}</span>
                    <strong style={{marginRight: "0.5rem"}}>Hora:</strong>{appointment.date.slice(11, 16)}
                    </p>
                    <p className="text-citas" style={{paddingBottom:"5%"}}>
                      <span className="icon-citas"> {svgs.calendar}</span>
                    <strong style={{marginRight: "0.5rem"}}>Fecha: </strong> {`${appointment.date.slice(8, 10)}-${appointment.date.slice(5, 7)}-${appointment.date.slice(0, 4)}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div></>
        )}
      </div>
    </div>
  );
};

export default Appointments;
