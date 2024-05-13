import React, { useState } from 'react';
import { Button, Col, Row, Image } from 'react-bootstrap';
import Jenny from '../images/Profile Photo.png';


function Contact() {
    const email = "jennyCleeton@Gmail.com"

    return (
        <Row>
            <Col md={12}>
                <div className="contact">
                    <Row>
                    <Col md={6} className="email-section">
                        <h2>Get in Touch</h2>
                        <Button className="contact-me" href={`mailto:${email}`}>EMAIL</Button>
                    </Col>
                    <Col md={6} className="image">
                        <Image src={Jenny} className="header-image" fluid></Image>
                    </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default Contact;
