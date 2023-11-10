import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function Portfolio() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className={show ? "portfolio show" : "portfolio"}>
                    <h2 onClick={() => setShow(!show)}>Portfolio</h2>
                    <div className={show ? "portfolio-content" : "hide"}>
                        My Porfolio!
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Portfolio;
