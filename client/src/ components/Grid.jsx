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
import Chat from "./admin/Chat";

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
    width: "97%",
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
  return (
    <>
      <div className="conteiner-grid-title">
        <div className="title-decoration"></div>
        <h6 className="grid-title">PROPIEDADES EN ALQUILER</h6>
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
        <Chat
          receiverId={user.id}
          userName={
            user.name ? (
              `${user.name.charAt(0).toUpperCase() + user.name.slice(1)} 
          ${user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}`
            ) : (
              <></>
            )
          }
        />

        <Link to={"/favorites"}>
          <button className="button-favorite">
            {cont >= 1 ? (
              <Badge id="badge-grid-2" bg="danger">
                {cont}
              </Badge>
            ) : (
              ""
            )}
            FAVORITOS
            <svg
              id="icon-favorite"
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
        <div className="conteiner-baner">
          <h1 className="h1-grid">Lorem ipsum dolor</h1>
          <h1 className="h1-grid">amet, consectetur adipisicing elit.</h1>
          <button className="buton-baner">
            INMOBILIARIA
            {svgs.flecha_ir}
          </button>
        </div>
      </div>

      <div className="divider"></div>
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
      <Container className="conteiner-cards-grid">
        <Row>
          {properties.map((home) => {
            return (
              <Col
                className="columnas-grid"
                xs={12}
                md={6}
                lg={5}
                style={{ padding: "1.6%" }}
                key={home.id}
              >
                <Card
                  className="card-grid"
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
                      <Card.Img className="card-img-grid" src={home.image} />
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
                        <div className="location-and-price-grid">
                          <div className="price-grid">
                            {svgs.dolar}
                            {home.price}
                          </div>
                          <div className="location-grid">
                            {svgs.ubicacion}
                            {shortUbication(home.address)}
                          </div>
                        </div>
                        <div className="bathrooms-bedrooms-meters-grid">
                          <div className="meters-grid">
                            {svgs.regla}
                            {home.m2 + "m²"}
                          </div>
                          <div className="bedrooms-grid">
                            {svgs.cama}
                            {home.bedrooms + " dorm."}
                          </div>

                          <div className="bathrooms-grid">
                            {svgs.baño}
                            {home.bathrooms + "baños"}
                          </div>
                        </div>
                        <Card.Text className="description-grid">
                          {home.description}
                        </Card.Text>
                        <div className="conteiner-buttons-card-grid">
                          <div className="conteiner-icon-favorite">
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
                                type="button"
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
                                type="button"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>
                            )}
                          </div>
                          <div className="conteiner-icon-appointment">
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
                            className="buton-grid-ver-mas"
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
