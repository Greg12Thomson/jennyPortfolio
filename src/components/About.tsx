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
                        I am an award winning creative producer creating and managing multimedia
                        content to make brands stand out amongst the noise. I have produced and
                        managed end to end UK and global campaigns for digital and broadcast
                        channels, with a track record for improved brand awareness, social channel
                        growth, fundraising and engagement.<br/><br/>

                        I am an accountable, enthusiastic, and honest person with an eye for detail,
                        excellent organisation skills and an ability to work in a fast paced environment
                        alone or in a team. I have a real passion for ensuring anything can be understood
                        by any person and a love for trying new trends, testing new products and trying
                        to push boundaries.<br/><br/>

                        For the last 18 months, I have been taking a short career break to travel. Despite
                        leaving work behind, I took on opportunities to support small and local
                        organisations creating everygreen content and writing content and social
                        strategies for them to use and sustain them through their growth period. Now, I
                        am ready to get back into the thick of it and sink my teeth into some fun and
                        exciting new creative projects. 
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default About;
