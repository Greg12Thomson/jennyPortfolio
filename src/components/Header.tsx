import React from 'react';
import {Col, Container, Row, Image} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Lemon from '../images/logo-small.png';

function Header() {
    return (
      <header className="App-header">
        <Container className="header">
          <Row>
            <Col md={12}>
              <h1>
                Jenny
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>  
            <h4>
              <Marquee direction="left" autoFill={true} >
                Producer - Director - Editor - Content Creater - Copy Writter <Image src={Lemon} className="lemon"/>
              </Marquee> 
            </h4> 
            </Col>
          </Row>
          <Row>
            <Col md={12} className="title">     
              <h1>
                Cleeton  
              </h1> 
            </Col>
          </Row>
        </Container>              
      </header>
    );
}

export default Header;
