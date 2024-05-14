import React, { useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';

import { StorageImage } from '@aws-amplify/ui-react-storage';
// import awsExports from '../aws-exports';
// import amplifyconfig from '../amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);

const s3Bucket: String = "jennyportfoliodd6927fc1bca4ef3851e9711cebe8ed3a029e-dev";

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
                    <StorageImage alt="portfolio-image-1" path={`public/{s3Bucket}/1.jpg`} />
                </div>
            </Col>
        </Row>
    );
}

export default Photo;
