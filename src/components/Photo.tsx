import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function Photo() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="about">
                    <h2 onClick={() => setShow(!show)}>Photo</h2>
                    <div className={show ? "about-content" : "hide"}>
                        TODO
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Photo;
