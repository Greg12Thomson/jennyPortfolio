import React, { useState } from 'react';
import { Col, Row, Modal } from 'react-bootstrap';

import YouTube, { YouTubeEvent } from "react-youtube";

const _onReady = (event: YouTubeEvent) => {
    event.target.pauseVideo();
}

function PreviousWork() {
    const [show, setShow] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    const options = {
        height: '720',
        width: '1280',
        playerVars: {
          controls: 1,
        },
      };

    const handleVideoClick = (videoId: string) => {
        setSelectedVideo(videoId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVideo(null);
    };

    const getThumbnailUrl = (videoId: string) => {
        // Use hqdefault as primary since it's more reliable
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, videoId: string) => {
        // Fallback to sddefault if hqdefault fails
        const target = e.target as HTMLImageElement;
        if (target.src.includes('hqdefault')) {
            target.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
        } else if (target.src.includes('sddefault')) {
            // Last resort: use mqdefault
            target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
        }
    };

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
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href=" https://www.savethechildren.net/meet-the-generation-who-will-change-the-world">View Project</a>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>Sara DRTV</h3>
                                <p>Story gatherer, producer, writer, director</p>
                                <div className="video-container" onClick={() => handleVideoClick("RtZcvOvuVvc")}>
                                    <img 
                                        src={getThumbnailUrl("RtZcvOvuVvc")} 
                                        alt="Sara DRTV video thumbnail" 
                                        className="video-thumbnail"
                                        onError={(e) => handleImageError(e, "RtZcvOvuVvc")}
                                    />
                                    <div className="play-button-overlay">
                                        <div className="play-button">▶</div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>Award Winning End Childhood Crisis Campaign</h3>
                                <p>Writer, producer, director</p>
                                <div className="video-container" onClick={() => handleVideoClick("sPKmE9mpiAA")}>
                                    <img 
                                        src={getThumbnailUrl("sPKmE9mpiAA")} 
                                        alt="Award Winning End Childhood Crisis Campaign video thumbnail" 
                                        className="video-thumbnail"
                                        onError={(e) => handleImageError(e, "sPKmE9mpiAA")}
                                    />
                                    <div className="play-button-overlay">
                                        <div className="play-button">▶</div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>Grace's story </h3>
                                <p>story gatherer, producer, director, voice over</p>
                                <div className="video-container" onClick={() => handleVideoClick("zwMP-edgHpk")}>
                                    <img 
                                        src={getThumbnailUrl("zwMP-edgHpk")} 
                                        alt="Grace's story video thumbnail" 
                                        className="video-thumbnail"
                                        onError={(e) => handleImageError(e, "zwMP-edgHpk")}
                                    />
                                    <div className="play-button-overlay">
                                        <div className="play-button">▶</div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>In End Childhood Hunger</h3>
                                <p>Writer and producer</p>
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/reel/CjBISQOrGIo/">View Project</a>
                            </Col>
                            <Col md={3} sm={6} className="work-card">
                                <h3>The Drum author homepage</h3>
                                <a className="work-link" target="_blank" rel="noopener noreferrer" href="https://www.thedrum.com/users/jennycleeton ">View Project</a>
                            </Col>
                    </Row>
                    </div>
                </div>
            </Col>

            <Modal show={showModal} onHide={handleCloseModal} size="xl" centered className="video-modal">
                <Modal.Header closeButton className="video-modal-header">
                    <Modal.Title>Video</Modal.Title>
                </Modal.Header>
                <Modal.Body className="video-modal-body">
                    {selectedVideo && (
                        <div className="modal-video-container">
                            <YouTube 
                                videoId={selectedVideo} 
                                opts={options} 
                                onReady={_onReady}
                                className="modal-youtube"
                            />
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </Row>
    );
}

export default PreviousWork;
