import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Showreel from './Showreel';

function Video() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="about">
                    <h2 onClick={() => setShow(!show)}>Video</h2>
                    <div className={show ? "about-content" : "hide"}>
                        <Showreel />
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Video;
