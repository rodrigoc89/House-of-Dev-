import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarUser from "./Navbar";
import "../styles/Favorites.css"
import shortUbication from "./function/shotUbacation";
import svgs from "../commons/svgs";
import axios from "axios";
import { addOrRemoveToFavorite } from "../state/favorites";
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";
import GetAppointment from "./admin/GetAppointment";

const Favorites = () => {
const navigate= useNavigate()
  const cardSize = {
    width: "97%",
  };
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const deleteFavoriteHandler = (home) => {
    const data = {
      id: home.id,
      type: "remove",
    };
    axios
      .post(`http://localhost:3001/api/favorite/${user.id}`, data, {
        withCredentials: true,
      })
      .then((fa) => {
        console.log(fa.data, "soy el que intentas eliminar. owo");
        dispatch(addOrRemoveToFavorite(fa.data));
      })
      .then(() => {
        Swal.fire({
          title: "eliminado de favoritos",
          icon: "success",
          timer: "2000",
        });
      });
  };
  const favorites = useSelector((state) => state.favorite);
  return favorites[0] ? (
    <>
      <NavbarUser />
      <div className="conteiner-title-decoration-favorite">
        <div className="decoration-favorite"></div>
        <h6 className="title-favorite">
          Favoritos
        </h6>
      </div>
      <Container style={{ width: "100%", color: "#123AC8" }}>
        <Row>
          {favorites.map((home) => {
            return (
              <Col className="columnas-favorites" xs={12} md={6} lg={5}>
                <Card key={home.id}
                className="card-favorite"
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
                      <Card.Img className="img-card-favorites"
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
                        <div className="conteiner-price-address-favorites">
                          <div className="price-favorites">
                            {svgs.dolar} 
                            {home.price}
                          </div>
                          <div className="address-favorites">
                            {svgs.ubicacion} 
                            {shortUbication(home.address)}
                          </div>
                        </div>
                        <div className="conteiner-bathrooms-bedrooms-meters-favorites">
                          <div className="meters-favorites" >
                            {svgs.regla}
                            {home.m2 + "m²"}
                          </div>
                          <div className="bedrooms-favorites">
                            {svgs.cama}
                            {home.bedrooms + " dorm."}
                          </div>
                          <div className="bathrooms-favorites">
                            {svgs.baño}
                            {home.bathrooms + "baños"}
                          </div>
                        </div>
                        <Card.Text className="description-favorites">
                          {home.description}
                        </Card.Text>
                        <div className="conteiner-buttons-favorites">
                          <div className="conteiner-button-favorite-favorites">
                            <Link>
                            <svg
                              type="button"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                id="icon-grid"
                                fill="currentColor"
                                class="bi bi-heart-fill"
                                viewBox="0 0 16 16"
                                style={{ color: "red" }}
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                />
                              </svg>
                            </Link>
                          </div>

                          <div className="conteiner-button-appointment-favorites">
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
  ) : (
    <div>
      <h2>Don´t have favorites</h2>
    </div>
  );
};

export default Favorites;
