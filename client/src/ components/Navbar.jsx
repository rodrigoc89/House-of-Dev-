import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.css";

function NavbarUser() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:3001/api/user/logout",
        {},
        { withCredentials: true }
      )
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar style={{ backgroundColor: "#FE4236" }} expand="lg">
      <Container fluid>
        <h1 className="text-h1">
          H<samp style={{ color: "transparent" }}>OD.</samp>
        </h1>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
            style={{ marginLeft: "8%" }}
          >
            <Nav.Link
              className="tabs"
              style={{
                color: "white",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
              }}
              href="/"
            >
              <svg
                style={{ marginRight: "3px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
              Home
            </Nav.Link>
            <Nav.Link
              className="tabs"
              style={{ color: "white", fontSize: "15px" }}
              href="/"
            >
              En venta
            </Nav.Link>
            <Nav.Link
              className="tabs"
              style={{ color: "white", fontSize: "15px" }}
              href="/"
            >
              Alquiler
            </Nav.Link>
            <Nav.Link
              className="tabs"
              style={{ color: "white", fontSize: "15px" }}
              href="/"
            >
              Agenda tu visita
            </Nav.Link>
            <Nav.Link
              className="tabs"
              style={{ color: "white", fontSize: "15px" }}
              href="/"
            >
              Contacto
            </Nav.Link>
            <Nav.Link
              className="tabs"
              style={{ color: "white", fontSize: "15px" }}
              href="/register"
            >
              Register
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Buscar</Button>
          </Form>
          {user.name ? (
            <>
              <DropdownButton
                align="end"
                variant="trasparent"
                id="dropdown-menu-align-end"
                title={
                  <svg style={{width:"30px", height:"30px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
                }
                style={{
                  marginRight: "3%",
                  marginLeft: "3%",
                }}
              >
                <Dropdown.Item href="/perfil">
                  <svg
                    style={{
                      color: "black",
                      marginBottom: "3%",
                      marginRight: "2%",
                      width: "17px",
                      height: "17px",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  Mi perfil
                </Dropdown.Item>
                <Dropdown.Item href="#action/3.2">
                  <svg
                    style={{
                      color: "black",
                      marginBottom: "3%",
                      marginRight: "5%",
                      width: "17px",
                      height: "17px",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-people"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                  </svg>
                  Citas
                </Dropdown.Item>
                <Dropdown.Item href="#action/3.3">
                  <svg
                    style={{
                      color: "black",
                      marginBottom: "3%",
                      marginRight: "5%",
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
                  Favoritos
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/" onClick={handleLogout}>
                  <svg
                    style={{
                      color: "black",
                      marginBottom: "3%",
                      marginRight: "5%",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-box-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                    />
                  </svg>
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            </>
          ) : (
            <Button style={{ marginLeft: "1%" }} href="/login" variant="light">
              Iniciar sesión
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarUser;
