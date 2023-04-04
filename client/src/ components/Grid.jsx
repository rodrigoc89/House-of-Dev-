import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/Grid.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../state/favorites";
import shortCutTtext from "./function/shortText";
import shortUbication from "./function/shotUbacation";
import GetAppointment from "./admin/GetAppointment";
import { useEffect, useState } from "react";
import svgs from "../commons/svgs";
import Swal from "sweetalert2";

function Grid() {
  const [properties, setProperties] = useState([]);
  const cardSize = {
    width: "29rem",
    height: "16rem",
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const addToFavoriteHandler = (home) => {
    const data = {
      id: home.id,
      type: "add",
    };
    axios
      .post(`http://localhost:3001/api/favorite/${user.id}`, data, {
        withCredentials: true,
      })
      .then((fa) => {
        console.log(fa, "mi");
        dispatch(setFavorite(fa.data));
      })
      .then(() => {
        Swal.fire({
          title: "agregado a favoritos",
          icon: "success",
          timer: "2000",
        });
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property", { withCredentials: true })
      .then((house) => setProperties(house.data));
  }, []);
  console.log(properties);
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
          PROPIEDADES EN ALQUILER
        </h6>
      </div>
      <div
        style={{
          width: "69.5%",
          marginLeft: "13%",
          display: "flex",
          justifyContent: "end",
          padding: "0.6% 0% 0.6% 0%",
        }}
      >
        <button
          style={{
            color: "#123AC8",
            backgroundColor: "transparent",
            width: "157px",
            height: "39px",
            borderRadius: "20px",
            border: "1px solid #123AC8",
            fontSize: "13px",
          }}
        >
          NOTIFICACIONES
          <svg
            style={{
              marginLeft: "5%",
              width: "26px",
              height: "26px",
              padding: "4%",
              borderRadius: "20px",
              border: "1px solid #FE4236",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </button>

        <button
          style={{
            color: "#123AC8",
            backgroundColor: "transparent",
            width: "115px",
            marginLeft: "2%",
            borderRadius: "20px 0px 0px 20px",
            border: "1px solid #123AC8",
            fontSize: "13px",
          }}
        >
          FAVORITOS
          <svg
            style={{
              marginLeft: "5%",
              width: "26px",
              height: "26px",
              padding: "6%",
              borderRadius: "20px",
              border: "1px solid #FE4236",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </button>
      </div>
      <div className="baner">
        <div
          style={{
            width: "45%",
            marginLeft: "55%",
            height: "100%",
            paddingTop: "15%",
            paddingRight: "3%",
            background: "linear-gradient(to right, transparent, #123AC8",
          }}
        >
          <h1 className="h1-grid">Lorem ipsum dolor</h1>
          <h1 className="h1-grid">amet consectetur adipisicing elit.</h1>
          <button className="buton-baner">
            INMOBILIARIA
            <svg
              style={{
                marginLeft: "5%",
                width: "26px",
                height: "26px",
                padding: "3%",
                borderRadius: "20px",
                border: "1px solid #FE4236",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="division"></div>
      <Container style={{ width: "100%", color: "#123AC8" }}>
        <Row>
          {properties.map((home) => {
            return (
              <Col xs={12} md={6} lg={5} style={{ padding: "1.6%" }}>
                <Link to={`/card/${home.id}`}>
                  <Card
                    id={home.id}
                    style={{
                      ...cardSize,
                      height: "110%",
                      border: "1px solid #123AC8",
                      borderRadius: "0px",
                      marginLeft: "15%",
                    }}
                  >
                    <Row>
                      <Col xs={5}>
                        <Card.Img
                          style={{
                            height: "110%",
                            borderRight: "1px solid #123AC8",
                            padding: "2%",
                            marginLeft: "5%",
                            borderRadius: "0%",
                          }}
                          src={home.image}
                        />
                      </Col>
                      <Col xs={7}>
                        <Card.Body
                          style={{
                            padding: "0%",
                            marginLeft: "3%",
                            marginRight: "4%",
                            height: "110%",
                          }}
                        >
                          <div style={{ width: "100%", display: "flex" }}>
                            <div
                              style={{
                                width: "40%",
                                padding: "3%",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "12px",
                                border: "1px solid #123AC8",
                              }}
                            >
                              {svgs.dolar}
                              {home.price}
                            </div>
                            <div
                              style={{
                                width: "60%",
                                fontSize: "11px",
                                padding: "3%",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #123AC8",
                              }}
                            >
                              {svgs.ubicacion}
                              {shortUbication(home.address)}
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            <div
                              style={{
                                width: "34%",
                                padding: "3%",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "13px",
                                border: "1px solid #123AC8",
                              }}
                            >
                              {svgs.regla}
                              {home.m2 + "m²"}
                            </div>
                            <div
                              style={{
                                width: "33%",
                                padding: "2%",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "13px",
                                border: "1px solid #123AC8",
                              }}
                            >
                              {svgs.cama}
                              {home.bedrooms + " dorm."}
                            </div>
                            <div
                              style={{
                                width: "33%",
                                padding: "2%",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "13px",
                                border: "1px solid #123AC8",
                              }}
                            >
                              {svgs.baño}
                              {home.bathrooms + "baños"}
                            </div>
                          </div>
                          <Card.Text style={{ padding: "5%" }}>
                            {shortCutTtext(home.description)}
                          </Card.Text>
                          <div
                            style={{
                              borderTop: "1px solid #123AC8",
                              height: "25%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ marginLeft: "30%" }}>
                              <Link>
                                <svg
                                  id="icon-grid"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-heart"
                                  viewBox="0 0 16 16"
                                  onClick={() => {
                                    addToFavoriteHandler(home);
                                  }}
                                >
                                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                              </Link>
                            </div>

                            <div style={{ marginLeft: "8%" }}>
                              <GetAppointment
                                idUser={user.id}
                                address={home.address}
                              />
                            </div>
                            <button className="buton-grid">Ver más</button>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Grid;
