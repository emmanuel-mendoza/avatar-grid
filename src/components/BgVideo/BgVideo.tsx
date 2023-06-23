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
          <source src="https://atwebsite.blob.core.windows.net/images/bg-video.mp4" type="video/mp4" />
          Your browser does not support video tag.
        </video>
      </div>
  );
}

export default BgVideo;
