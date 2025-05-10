"use client";

import React, { useState, useEffect, useRef } from "react";

const videoArray = [
  "Comp_1.mp4",
  "/videos/3159503381_1.mp4",
  "/videos/05c8e927-7818df8c_1.mp4",
  "/videos/75676034-71414eb8_1.mp4",
  "/videos/1ddc4cc2-3e7e458b_1.mp4",
  "/videos/1809968343_1.mp4",
  "/videos/1ddc4cc2-3e7e458b_1_1.mp4",
  "/videos/1811028653_1.mp4",
  "/videos/e38f090c-0690e7c7_1_1.mp4",
  "/videos/c43ee4e6-87d93d15_1.mp4",
  "/videos/1ddc4cc2-3e7e458b_1_1.mp4",
  "/videos/05c8e927-7818df8c_1_1.mp4",

  "/videos/1811032018_1_1.mp4",
  "/videos/mr_vegas_cafe_1_1.mp4",
  "/videos/mr_vegas_cafe_1_2.mp4",
  "/videos/4d783eac-d451ad50_1.mp4",
  "/videos/e38f090c-0690e7c7_1.mp4",
  "/videos/4d783eac-d451ad50_1_1.mp4",
  "/videos/30e6164a-0240c537_1.mp4",
  "/videos/30e6164a-0240c537_1_1.mp4",
  "/videos/0fd8d35c-fc14264a_1.mp4",
  "/videos/c43ee4e6-87d93d15_1_1.mp4",
  "/videos/75676034-71414eb8_1_1.mp4",
  "/videos/75676034-71414eb8_1.mp4",
  "/videos/1809968343_1_1.mp4",
  "/videos/3159503381_1_1.mp4",

  "/videos/1811032018_1_1_1.mp4",

  "/videos/1811032018_1.mp4",
  "/videos/1809977048_1.mp4",
  "/videos/1809977048_1_1.mp4",
  "/videos/1810032448_1.mp4",
  "/videos/1809966955_1.mp4",
  "/videos/1809966955_1_1.mp4",
  "/videos/1810030120_1_1.mp4",
  "/videos/1810030120_1_1_1.mp4",
  "/videos/1809853968_1_1.mp4",
  "/videos/1810030120_1.mp4",
  "/videos/1809853968_1.mp4",
  "/videos/1809967388_1.mp4",
  "/videos/1809967889_1.mp4",
  "/videos/ca72fe63-69a5aa2b_1.mp4",
  "/videos/3085620942_1_1.mp4",
  "/videos/3085620942_1.mp4",
];

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
            loop={false}
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
