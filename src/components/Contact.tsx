import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function Contact() {
    const email = "jennyCleeton@Gmail.com"
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="contact">
                    <h2 onClick={() => setShow(!show)}>Contact</h2>
                    <div className={show ? "contact-content" : "hide"}>
                        <hr/>
                        <p>
                            Just saying hello, ask for my CV or see if we can build something amazing that makes
                            a differnce? I'd love to hear from you. <br/>
                        </p>
                        <Button className="contact-me" href={`mailto:${email}`}>Contact Me 🤘</Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Contact;
