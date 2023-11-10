import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <Container className="footer">
          <Row className="socials">
            <Col md={12}>   
              <a className='link' href='https://linkedin.com/in/jenny-cleeton-6a109395'><FontAwesomeIcon className='grow' icon={faLinkedinIn} size='2x'/></a>
              <a href='https://www.instagram.com/cleetoncreatives'><FontAwesomeIcon className='grow' icon={faInstagram} size='2x' /></a>
            </Col>
          </Row>
          <Row className="footnote">
            <Col md={12}>     
              <p>
                © Greg Thomson 2023
              </p>         
            </Col>
          </Row>
        </Container>
    );
}

export default Footer;
