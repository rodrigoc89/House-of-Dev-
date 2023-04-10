import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarUser from "./Navbar";
import shortUbication from "./function/shotUbacation";
import axios from "axios";
import { addOrRemoveToFavorite } from "../state/favorites";
import Swal from "sweetalert2";

const Favorites = () => {
  const cardSize = {
    width: "29rem",
    height: "16rem",
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
          Favoritos
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
      ></div>

      <div className="division"></div>
      <Container style={{ width: "100%", color: "#123AC8" }}>
        <Row>
          {favorites.map((home) => {
            return (
              <Col xs={12} md={6} lg={5} style={{ padding: "1.6%" }}>
                <Card
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-currency-dollar"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                            </svg>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-geo-alt"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
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
                            <svg
                              style={{ marginRight: "3%" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-rulers"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                            </svg>
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
                            <svg
                              style={{
                                width: "25%",
                                height: "55%",
                                marginRight: "3%",
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                            </svg>
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
                            <svg
                              style={{
                                width: "25%",
                                height: "55%",
                                marginRight: "3%",
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
                            </svg>
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
                          <div style={{ marginLeft: "30%" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              id="icon-grid"
                              height="16"
                              fill="currentColor"
                              class="bi bi-heart-fill"
                              style={{ color: "red" }}
                              viewBox="0 0 16 16"
                              onClick={() => {
                                deleteFavoriteHandler(home);
                              }}
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                              />
                            </svg>
                          </div>

                          <div style={{ marginLeft: "8%" }}>
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
                          <button className="buton-grid">Ver más</button>
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
