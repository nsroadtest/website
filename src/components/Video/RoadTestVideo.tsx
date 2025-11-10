import { useRef } from "react";
import { Container, Row } from "react-bootstrap";

import "videojs-youtube";
import "video.js/dist/video-js.css";
import "./RoadTestVideo.css";
// Replace with your video ID

const RoadTestVideo = () => {
  const videoRef = useRef(null);
  const YOUTUBE_VIDEO_ID = "FZGMRIC1M3I";
  const heading = "What we Offer...!";
  const desc = `We are proud to offer you government-approved online and behind-the-wheel 
  lessons taught by instructors who work one-on-one with each student and track progress individually.`;
  return (
    <div className="videoSection-bg">
      <Container fluid className="py-5">
        <Row>
          <h1 className="text-center mb-4 text-uppercase">{heading}</h1>
          <p className="fw-light lh-base text-center mb-5">{desc}</p>
        </Row>
        <Row className="justify-content-center">
          <div
            className="video-responsive"
            style={{ width: "100%", maxWidth: 800, height: "auto" }}
          >
            <video
              ref={videoRef}
              className="video-js vjs-default-skin"
              controls
              data-setup={`{
                "techOrder": ["youtube"],
                "sources": [{
                  "type": "video/youtube",
                  "src": "https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}"
                }]
              }`}
              style={{ width: "100%", aspectRatio: "16/9", height: "auto" }}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default RoadTestVideo;
