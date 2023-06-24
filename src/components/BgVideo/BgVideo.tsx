import React, {useEffect, useRef} from "react";
import "./BgVideo.css";

const BgVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.loop = true;
    videoRef.current?.play();
  }, []);

  return (
      <div className="embed-video-container">
        <video muted autoPlay playsInline ref={videoRef}>
          <source src="https://res.cloudinary.com/dmela7d4j/video/upload/v1687632649/avatar-grid/psn3ky6a3zg9gvhvf5n3.mp4" type="video/mp4" />
          Your browser does not support video tag.
        </video>
      </div>
  );
}

export default BgVideo;
