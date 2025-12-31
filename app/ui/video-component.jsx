"use client";

import React, { useState, useEffect, useRef } from "react";

const videoArray = ["/videos/Comp_1.mp4"];

export default function FullscreenVideoPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // No need for loading state now
  const videoRef = useRef(null);

  useEffect(() => {
    setIsLoading(false); // Videos are ready immediately since we're not shuffling
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videoArray.length);
      };
      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []); // Removed shuffledVideos dependency

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "0px",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional overlay
        }}
      />

      {isLoading ? ( // Show spinner while loading (though it won't really be needed now)
        <div
          className="w-12 h-12 rounded-full animate-spin
                     border border-solid border-accent border-t-transparent"
        ></div>
      ) : (
        videoArray.length > 0 && (
          <video
            ref={videoRef}
            src={videoArray[currentVideo]}
            autoPlay
            loop={true}
            muted
            playsInline // Essential for Safari autoplay
            preload="auto" // Helps with buffering
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          >
            {" "}
            <source
              src={`${videoArray[currentVideo]}.webm`}
              type="video/webm"
            />
            <source src={`${videoArray[currentVideo]}.mp4`} type="video/mp4" />
          </video>
        )
      )}
    </div>
  );
}
