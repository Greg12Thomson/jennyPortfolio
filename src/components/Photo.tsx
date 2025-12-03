import React, { useState, useMemo } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { StorageImage } from '@aws-amplify/ui-react-storage';

function Photo() {
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(3);
    const numberOfPages = 5;

    const onClick = () => {
        if (page < numberOfPages) {
            setPage((page) => page + 1);
        } else {
            setPage(1);
        }
    }

    // Only create images for the current page - this dramatically improves load time
    const currentPageImages = useMemo(() => {
        const startIndex = 10 * (page - 1);
        const endIndex = Math.min(10 * page, 47); // Cap at 47 total images
        return Array.from({ length: endIndex - startIndex }, (_, i) => {
            const index = startIndex + i;
            return (
                <StorageImage 
                    alt={`portfolio-image-${index}`} 
                    path={`public/${index}.jpg`} 
                    className="portfolio-photo" 
                    key={index}
                />
            );
        });
    }, [page]);

    return (
        <Row className={show ? "menu-item show" : "menu-item"}>
            <Col md={12}>
                <div className="photo">
                    <h2 onClick={() => setShow(!show)}>Photo</h2>
                    <div className={show ? "photo-container" : "hide"}>
                        <div className="photo-content">
                            {currentPageImages}
                        </div>
                        <Button className="porfolio-button" onClick={onClick}>
                            See more
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Photo;
