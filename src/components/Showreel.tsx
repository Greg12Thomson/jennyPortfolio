import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import YouTube, { YouTubeEvent } from "react-youtube";

const _onReady = (event: YouTubeEvent) => {
    event.target.pauseVideo();
}

function Showreel() {
    const [showModal, setShowModal] = useState(false);
    const videoId = "B8UOVlWoHrI";

    const options = {
        height: '720',
        width: '1280',
        playerVars: {
          controls: 1,
        },
      };

    const handleVideoClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const getThumbnailUrl = (videoId: string) => {
        // Use hqdefault as primary since it's more reliable
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
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
        <>
            <div className="showreel">
                <div className="video-container" onClick={handleVideoClick}>
                    <img 
                        src={getThumbnailUrl(videoId)} 
                        alt="Showreel video thumbnail" 
                        className="video-thumbnail"
                        onError={handleImageError}
                    />
                    <div className="video-title-overlay">
                        <h3>Jenny Cleeton Showreel</h3>
                    </div>
                    <div className="play-button-overlay">
                        <div className="play-button">▶</div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} size="xl" centered className="video-modal">
                <Modal.Header closeButton className="video-modal-header">
                    <Modal.Title>Showreel</Modal.Title>
                </Modal.Header>
                <Modal.Body className="video-modal-body">
                    <div className="modal-video-container">
                        <YouTube 
                            videoId={videoId} 
                            opts={options} 
                            onReady={_onReady}
                            className="modal-youtube"
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Showreel;
