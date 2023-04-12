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

const Favorites = () => {
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
                <Card
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
                                id="icon-grid"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-heart"
                                viewBox="0 0 16 16"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>
                            </Link>
                          </div>

                          <div className="conteiner-button-appointment-favorites">
                            <Link>
                              <svg
                                id="icon-grid"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-telephone"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                              </svg>
                            </Link>
                          </div>
                          <button className="buton-grid-ver-mas">Ver más</button>
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
