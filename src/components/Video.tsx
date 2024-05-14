import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function Video() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="about">
                    <h2 onClick={() => setShow(!show)}>Video</h2>
                    <div className={show ? "about-content" : "hide"}>
                        On it's way! This website is still under development. 
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Video;
