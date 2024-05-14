import React, { useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';


const porfolioImages = Array(6).fill(0).map((item, i) => (
    <Image className="portfolio-photo" src={require(`../images/Portfoilio/${i}.jpg`)} roundedCircle fluid key={i}></Image>
));


function Photo() {
    const [show, setShow] = useState(false);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="photo">
                    <h2 onClick={() => setShow(!show)}>Photo</h2>
                    <div className={show ? "photo-content" : "hide"}>
                        {porfolioImages}
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Photo;
