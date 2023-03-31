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

function Grid() {
  const cardSize = {
    width: "29rem",
    height: "16rem",
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const properties = useSelector((state) => state.property);
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
      });
  };
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
                            </svg>{" "}
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
                            <GetAppointment />
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
  );
}

export default Grid;
