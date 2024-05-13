import React from 'react';
import {Col, Container, Row, Image} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Jenny from '../images/Jenny.png';

function Header() {
    return (
      <header className="App-header">
        <Container className="header">
          <Row>
            <Col md={8} className="heading">
              <h1>
                Jenny Cleeton
              </h1>
            </Col>
            <Col md={4} className="image-container">
              <Row>
                <Col md={12}>
                  <Image src={Jenny} className="header-image"></Image>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="scroll-container">
            <h4 className="scroll">
              <Marquee direction="left" autoFill={true} className="scroll-content">
                Producer • Photograper • Director • Project Manager • Videographer • Copywriter •
              </Marquee> 
            </h4> 
          </div>
        </Container>              
      </header>
    );
}

export default Header;
