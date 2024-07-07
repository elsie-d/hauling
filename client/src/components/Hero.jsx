import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(){

return(
    <Container>
    <Row>
      <Col>
      
      <img
              alt="haul"
              src="src/assets/haul-toy.jpeg"
              width="auto"
              height="260"
              className="d-inline-block align-top"
            />
     </Col>
      <Col><h2>Contact Us</h2><br/>
      <h3>For a free quote</h3><br/>
      <h2>Already a Client?</h2>
      <h3>Pay invoice here</h3>
      </Col>
    </Row>

  </Container>

)

}

export default Hero