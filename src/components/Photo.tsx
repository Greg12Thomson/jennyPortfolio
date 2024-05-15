import React, { useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { StorageImage } from '@aws-amplify/ui-react-storage';

// amplify config
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';

Amplify.configure(amplifyconfig);


const porfolioImages = Array(47).fill(0).map((_, i) => (
    <StorageImage alt={`portfolio-image-${i}`} path={`public/${i}.jpg`}  className="portfolio-photo" key={i} />
));

function Photo() {
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    const numberOfPages = 5;

    const onClick = () => {
        if (page < numberOfPages) {
            setPage((page) => page + 1);
        } else {
            setPage(0);
        }
    }


    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="photo">
                    <h2 onClick={() => setShow(!show)}>Photo</h2>
                    <div className={show ? "photo-content" : "hide"}>
                        {porfolioImages.slice(10 * (page - 1), 10 * page)}
                        <Button className="porfolio-button" onClick={onClick}>See more</Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Photo;
