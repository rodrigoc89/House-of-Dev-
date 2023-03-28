import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {useSelector, useDispatch} from "react-redux"
import "../styles/Navbar.css"

function NavbarUser() {
  const user = useSelector((state)=>state.user)
  const dispatch= useDispatch()
  console.log(user);
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
    <Navbar style={{backgroundColor:"#FE4236"}} expand="lg" >
      <Container fluid>
        <h1 className="text-h1">H<samp style={{ color:"transparent"}}>OD.</samp></h1>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
            style={{marginLeft:"10%"}}
          >
            <Nav.Link className="tabs" style={{color:"white", fontSize:"15px"}} href="/">Home</Nav.Link>
            <Nav.Link className="tabs" style={{color:"white",fontSize:"15px"}} href="/">En venta</Nav.Link>
            <Nav.Link className="tabs" style={{color:"white",fontSize:"15px"}} href="/">Alquiler</Nav.Link>
            <Nav.Link className="tabs" style={{color:"white",fontSize:"15px"}} href="/">Agenda tu visita</Nav.Link>
            <Nav.Link className="tabs" style={{color:"white",fontSize:"15px"}} href="/">Contacto</Nav.Link>
            <Nav.Link className="tabs" style={{color:"white",fontSize:"15px"}} href="/register">Register</Nav.Link>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Buscar</Button>
          </Form>
          {user.name ?(
            <>
          
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={user.name}
              menuVariant="dark"
              style={{marginLeft:"4%", marginRight:"2%", fontWeight:"bold", fontSize:"110%", color:"white", textTransform:"uppercase"}}
            >
              <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Citas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Favoritos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        </>
          ):(
             <Button style={{marginLeft:"1%"}} href="/login" variant="light">Iniciar sesión</Button>
          )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarUser;
