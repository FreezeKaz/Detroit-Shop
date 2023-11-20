import React from 'react';
import { Navbar, Container, Row, Col, Item  } from 'react-bootstrap';
import title from '../img/title.png';
import './css/Navbar.css'
import {Link} from 'react-router-dom';


function MyNavbar () {
  return (

    <Navbar bg="bg-transparent "  expand="lg">
      <Row>
        <Container>
          <Col md={12}>
            <Navbar.Brand>
              <img id="title"  src={title} alt="Detroit Become Human"/>
            </Navbar.Brand>

            <Link to="/Cart" >
              <button className="button">Cart</button>
            </Link>

            <Link to="/Cart" >
              <svg xmlns="http://www.w3.org/2000/svg" id="Cart" fill="currentColor" className="bi bi-bag " viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </Link>
          </Col>
        </Container>
      </Row>
    </Navbar>
  )
}

export default MyNavbar;