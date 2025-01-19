"use client";

import React, { useState, useEffect, useRef } from "react";

const videoArray = [
  "/videos/mr_vegas_cafe_30_master_online_(1080p).mp4",
  "/videos/REXONA_FEEL_THE_HEAT_030.mp4",
  "/videos/Vengeance_Nemesis.mp4",
  "/videos/axa_-_give_them_a_break_(240p).mp4",
  // Add more videos here
];

export default function FullscreenVideoPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [shuffledVideos, setShuffledVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const videoRef = useRef(null);

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    // Shuffle videos on component mount
    const shuffled = shuffleArray(videoArray);
    setShuffledVideos(shuffled);
    setCurrentVideo(0); // Start from the first shuffled video
    setIsLoading(false); // Loading is done once videos are shuffled
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % shuffledVideos.length);
      };
      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [shuffledVideos]); // Ensure effect updates with shuffled videos

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

      {isLoading ? ( // Show spinner while loading
        <div
          className="w-12 h-12 rounded-full animate-spin
                     border border-solid border-accent border-t-transparent"
        ></div>
      ) : (
        shuffledVideos.length > 0 && (
          <video
            ref={videoRef}
            src={shuffledVideos[currentVideo]}
            autoPlay
            loop={false}
            muted
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        )
      )}
    </div>
  );
}
