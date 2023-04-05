import React from "react";
import NavbarUser from "./Navbar";
import { useSelector } from "react-redux";

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
          <div>
            <h1 style={{ marginLeft: "50vh" }}>Appointments</h1>
            {appointments.map((appointment) => {
              return (
                <div
                  style={{
                    margin: "20px",
                    display: "flex",
                    border: "1px solid black",
                  }}
                >
                  <div
                    style={{
                      height: "10%",
                      width: "20%",
                      padding: "2px",
                      borderRight: "1px solid black",
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
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{ borderBottom: "1px solid black", width: "100%" }}
                    >
                      ubication:{appointment.address}
                    </p>
                    <p
                      style={{ borderBottom: "1px solid black", width: "100%" }}
                    >
                      hour: 20:07
                    </p>
                    <p> date: {appointment.date.slice(0, 10)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
