import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation(){

    return(
        <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt="haul"
              src="src/assets/haul-toy.jpeg"
              width="auto"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Haul-leluya 
          </Navbar.Brand>
          
        </Container>
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#features">Info</Nav.Link>
            <Nav.Link href="#pricing">Here</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      
        
    )
}

export default Navigation