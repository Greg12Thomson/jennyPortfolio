import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

function Menu() {
    return (
        <Container className="menu">
          <Row className="menu-item">
            <Col md={12}>
              <div className="about">
                <h2>About</h2>
              </div>
            </Col>
          </Row>
          <Row className="menu-item">
            <Col md={12}>
              <div className="portfolio">
                <h2>Portfolio</h2>
              </div>
            </Col>
          </Row>
          <Row className="menu-item">
            <Col md={12}>
              <div className="contact">
                <h2>Contact</h2>
              </div>
            </Col>
          </Row>
        </Container>
    );
}

export default Menu;
