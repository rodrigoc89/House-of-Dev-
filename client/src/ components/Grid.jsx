import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Grid.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveToFavorite } from "../state/favorites";
import shortUbication from "./function/shotUbacation";
import GetAppointment from "./admin/GetAppointment";
import { useEffect, useState } from "react";
import svgs from "../commons/svgs";
import Swal from "sweetalert2";
import { setValue } from "../state/value";
import { setType } from "../state/type";
import "../styles/Grid.css";
import Badge from "react-bootstrap/Badge";

function Grid() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const type = useSelector((state) => state.type);
  const value = useSelector((state) => state.value);
  const favorite = useSelector((state) => state.favorite);

  const [cont, setCont] = useState(null);

  const cardSize = {
    width: "29rem",
    height: "16rem",
  };

  useEffect(() => {
    const num = favorite.length;
    setCont(num);
  }, [favorite]);

  const addToFavoriteHandler = (home) => {
    // Comprobar si la propiedad ya está en la lista de favoritos
    const isAlreadyFavorited = favorite.some(
      (favorite) => favorite.id === home.id
    );
    if (isAlreadyFavorited) {
      const data = {
        id: home.id,
        type: "remove",
      };
      axios
        .post(`http://localhost:3001/api/favorite/${user.id}`, data, {
          withCredentials: true,
        })
        .then((fa) => {
          dispatch(addOrRemoveToFavorite(fa.data));
        })
        .then(() => {
          Swal.fire({
            title: "eliminado de favoritos",
            icon: "success",
            timer: "2000",
          });
        });
    } else {
      const data = {
        id: home.id,
        type: "add",
      };
      axios
        .post(`http://localhost:3001/api/favorite/${user.id}`, data, {
          withCredentials: true,
        })
        .then((fa) => {
          dispatch(addOrRemoveToFavorite(fa.data));
        })
        .then(() => {
          Swal.fire({
            title: "agregado a favoritos",
            icon: "success",
            timer: "2000",
          });
        });
    }
  };

  useEffect(() => {
    if (type && value) {
      axios
        .get(`http://localhost:3001/api/property/${type}/${value}`, {
          withCredentials: true,
        })
        .then((house) => setProperties(house.data));
    } else {
      axios
        .get("http://localhost:3001/api/property", { withCredentials: true })
        .then((house) => setProperties(house.data));
    }
  }, [value]);
  console.log(favorite);
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
          marginLeft: "12.6%",
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

        <Badge id="badge-grid" bg="danger">
          3
        </Badge>

        <Link to={"/favorites"}>
          <button
            style={{
              color: "#123AC8",
              backgroundColor: "transparent",
              height: "100%",
              width: "115px",
              marginLeft: "5%",
              borderRadius: "20px 0px 0px 20px",
              border: "1px solid #123AC8",
              fontSize: "13px",
            }}
          >
            {cont >= 1 ? (
              <Badge id="badge-grid-2" bg="danger">
                {cont}
              </Badge>
            ) : (
              ""
            )}
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
        </Link>
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
      <Form.Select
        id="filtro-grid"
        aria-label="Default select example"
        onClick={(e) => {
          dispatch(setValue(e.target.value)), dispatch(setType("filterPrice"));
        }}
      >
        <option value="">Mostrar todo</option>
        <option value="minor">Mostrar de menor a mayor precio</option>
        <option value="major">Mostrar de mayor a mejor precio</option>
      </Form.Select>
      <Container style={{ width: "100%", color: "#123AC8" }}>
        <Row>
          {properties.map((home) => {
            return (
              <Col
                xs={12}
                md={6}
                lg={5}
                style={{ padding: "1.6%" }}
                key={home.id}
              >
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
                        <Card.Text
                          style={{
                            padding: "5%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {home.description}
                        </Card.Text>
                        <div
                          style={{
                            borderTop: "1px solid #123AC8",
                            height: "25%",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "30%",
                            }}
                          >
                            {favorite.some(
                              (favorite) => favorite.id === home.id
                            ) ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                id="icon-grid"
                                fill="currentColor"
                                class="bi bi-heart-fill"
                                viewBox="0 0 16 16"
                                style={{ color: "red" }}
                                onClick={() => {
                                  addToFavoriteHandler(home);
                                }}
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                id="icon-grid"
                                fill="currentColor"
                                class="bi bi-heart"
                                viewBox="0 0 16 16"
                                style={{ color: "blue" }}
                                onClick={() => {
                                  addToFavoriteHandler(home);
                                }}
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>
                            )}
                          </div>
                          <div style={{ marginLeft: "8%" }}>
                            <GetAppointment
                              userId={user.id}
                              address={home.address}
                              imgUser={home.image}
                              phone={user.phone}
                              email={user.email}
                              name={user.name}
                              lastName={user.lastName}
                            />
                          </div>
                          <button
                            className="buton-grid"
                            onClick={() => {
                              navigate(`/card/${home.id}`);
                            }}
                          >
                            Ver más
                          </button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Grid;
