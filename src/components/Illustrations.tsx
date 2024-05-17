import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function Illustrations() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="illustrations">
                    <h2 onClick={() => setShow(!show)}>Custom Illustrations</h2>
                    <div className={show ? "illustrations-content" : "hide"}>
                        Coming soon! This website is still under development. 👷‍♂️
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Illustrations;
