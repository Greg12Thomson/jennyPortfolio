import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function PreviousWork() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className={show ? "portfolio show" : "portfolio"}>
                    <h2 onClick={() => setShow(!show)}>Previous Work</h2>
                    <div className={show ? "portfolio-content" : "hide"}>
                        <Row className="previous-work">
                            <Col md={3} sm={6} className="work-card">
                                <h3>Generation hope</h3>
                                <p>Story gatherer, producer, director, photographer and videographer of Esther and copywriter</p>
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href=" https://www.savethechildren.net/meet-the-generation-who-will-change-the-world">LINK</a>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>Sara DRTV</h3>
                                <p>Story gatherer, producer, writer, director</p>
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=RtZcvOvuVvc&ab_channel=SavetheChildrenInternationalDRTV">LINK</a>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>Award Winning End Childhood Crisis Campaign</h3>
                                <p>Writer, producer, director</p>
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=sPKmE9mpiAA&ab_channel=ActionforChildren">LINK</a>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>Grace's story </h3>
                                <p>story gatherer, producer, director, voice over</p>
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=zwMP-edgHpk&ab_channel=ActionforChildren">LINK</a>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>Lee's story</h3>
                                <p>story gatherer, producer, director, copywriter</p>
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href="https://www.actionforchildren.org.uk/our-work-and-impact/real-life-stories/lee-and-warren/">LINK</a>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>The Drum author homepage</h3>
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href="https://www.thedrum.com/users/jennycleeton ">LINK</a>
                            </Col>
                    </Row>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default PreviousWork;
