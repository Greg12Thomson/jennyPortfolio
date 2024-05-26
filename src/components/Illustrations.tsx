import React, { useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';

import Reimage from '../images/2.png';
import NewLife from '../images/3.png';

function Illustrations() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="illustrations">
                    <h2 onClick={() => setShow(!show)}>Custom Illustrations</h2>
                    <div className={show ? "illustrations-content" : "hide"}>
                        <Row>
                            <Col md={8} sm={12}>
                                <div className="image-left">
                                    <div className="blob-left"></div>
                                    <Image src={Reimage} className="illustration-left" fluid></Image>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} sm={0}></Col>
                            <Col md={8} sm={12}>
                                <div className="image-right">
                                    <div className="blob-right"></div>
                                    <Image src={NewLife} className="illustration-right" fluid></Image>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Illustrations;
