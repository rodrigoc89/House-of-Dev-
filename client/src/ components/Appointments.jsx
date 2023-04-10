import React from "react";
import NavbarUser from "./Navbar";
import { useSelector } from "react-redux";
import "../styles/Citas.css";
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
        ) : (
          <>
            <div
              style={{
                border: "1px solid #123AC8",
                width: "60%",
                marginTop: "2%",
                marginLeft: "20%",
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
                CITAS USUARIO
              </h6>
            </div>
            <div>
              {appointments.map((appointment) => {
                return (
                  <div className="conteiner-citas">
                    <div
                      style={{
                        padding: "2px",
                        borderRight: "1px solid #123AC8",
                      }}
                    >
                      <img
                        src={appointment.image}
                        alt="non"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <p className="text-citas">
                        <span className="icon-citas">{svgs.ubicacion}</span>
                        <strong style={{ marginRight: "0.5rem" }}>
                          Dirrecion:{" "}
                        </strong>
                        {appointment.address}
                      </p>
                      <p className="text-citas">
                        <span className="icon-citas">{svgs.time}</span>
                        <strong style={{ marginRight: "0.5rem" }}>Hora:</strong>
                        {appointment.date.slice(16, 21)}
                      </p>
                      <p className="text-citas" style={{ paddingBottom: "5%" }}>
                        <span className="icon-citas"> {svgs.calendar}</span>
                        <strong style={{ marginRight: "0.5rem" }}>
                          Fecha:
                        </strong>
                        {`${appointment.date.slice(4, 15)}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Appointments;
