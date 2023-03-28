import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import fakeData from "../../../server/fakeData/fakeHouse.json";

function Grid() {
  const cardSize = {
    width: "18rem",
    height: "25rem",
  }
  return (
    <Container style={{maxWidth:"100%"}}>
      <Row>
        {fakeData.map((home) => {
        return <Col className="col-3" style={{padding:"1%"}}>
            <Card style={{ ...cardSize, padding:"2%",margin:"0 auto"}}>
              <Card.Img variant="top" src={home.image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  {home.descripcion}
                </Card.Text>
              </Card.Body>
              <Card.Body style={{display:"flex", alignItems:"center", maxHeight:"10%", marginBottom:"7%"}}>
                <Card.Link href="#">Ver mas</Card.Link>
              </Card.Body>
            </Card>
          </Col>;
        })}
      </Row>
    </Container>
  );
}

export default Grid;
