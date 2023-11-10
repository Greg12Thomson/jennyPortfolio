import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function About() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="about">
                    <h2 onClick={() => setShow(!show)}>About</h2>
                    <div className={show ? "about-content" : "hide"}>
                        About me!
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default About;
