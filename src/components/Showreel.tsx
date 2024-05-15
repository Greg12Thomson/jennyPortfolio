import React from 'react';
import YouTube, { YouTubeEvent } from "react-youtube";

const _onReady = (event: YouTubeEvent) => {
    event.target.pauseVideo();
}

function Showreel() {

    const options = {
        height: '390',
        width: '640',
        playerVars: {
          controls: 1,
        },
      };


    return (
        <div className="showreel">
            <YouTube videoId="B8UOVlWoHrI" opts={options} onReady={_onReady} id="video"/>;
        </div>
    );
}

export default Showreel;
