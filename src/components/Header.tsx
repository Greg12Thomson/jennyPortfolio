import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

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
              <h4>Producer - Director - Editor - Content Creater - Copy Writter</h4>
            </Col>
          </Row>
          <Row>
            <Col md={12}>     
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
