import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import svgs from "../../commons/svgs";
import { Link } from "react-router-dom";


function NavbarAdmin() {
  const user = useSelector((state) => state.user);

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
    <Navbar style={{ backgroundColor: "#123AC8" }} expand="lg">
      <Container fluid>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <h1 className="text-h1-admin">
          H<samp style={{ color: "transparent" }}>OD.</samp>
        </h1></Link>
        <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
            style={{ marginLeft: "35%" }}
          >
            <Nav.Link
              className="tabs"
              style={{
                color: "white",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                marginLeft:"15%"
              }}
              href="/adminCitas"
            >
             {svgs.citas}
              Citas
            </Nav.Link>
            </Nav>
          {user.name ? (
            <>
            <a style={{color:"white", marginRight:"15%"}} href="/" onClick={handleLogout}>
                 <svg
                 style={{
                    width:"40px",
                    height:"27px"
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
            </a>
          </>
        ) : (
          <Button style={{ marginLeft: "1%" }} href="/login" variant="light">
            Iniciar sesión
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
