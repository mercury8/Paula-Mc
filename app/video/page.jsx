"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import { motion } from "framer-motion";
import Image from "next/image";

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer fb13c3ca26d89f30b88e33730cb25a35`,
      },
    })
    .then((res) => res.data);

const VideoPage = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxVideoId, setLightboxVideoId] = useState(null);
  const loaderRef = useRef(null);

  const {
    data: userData,
    error,
    isLoading,
  } = useSWR(`https://api.vimeo.com/me/videos`, fetcher);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && userData) {
          setVisibleCount((prevCount) =>
            Math.min(prevCount + 9, userData.data.length)
          );
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [userData]);

  const renderSkeletons = () => {
    const skeletonCount = 12;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-200 h-48 rounded-lg"
          ></div>
        ))}
      </div>
    );
  };

  const closeLightbox = () => setLightboxVideoId(null);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <h1 className="text-red-500 text-xl font-semibold">Error</h1>
        <p className="text-gray-600">{JSON.stringify(error, null, 2)}</p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="bg-black-100 min-h-screen container mx-auto">
        {isLoading ? (
          renderSkeletons()
        ) : (
          <div className="p-4">
            <h1 className="text-2xl font-bold text-white-800 mb-6">
              Commercials
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {userData.data.slice(0, visibleCount).map((video, index) => (
                <motion.div
                  key={video.uri}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    const videoId = video.uri.split("/").pop();
                    setLightboxVideoId(videoId);
                  }}
                >
                  {video.pictures?.base_link && (
                    <Image
                      src={video.pictures.base_link}
                      alt={video.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      width={1920}
                      height={1080}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 h-full flex flex-col justify-center ">
                    <h2 className="text-white text-lg font-semibold truncate text-center">
                      {video.name}
                    </h2>
                  </div>
                </motion.div>
              ))}
            </div>
            <div
              ref={loaderRef}
              className="flex justify-center items-center mt-6 h-8"
            >
              {visibleCount < userData.data.length && (
                <p className="text-gray-500 text-sm">Loading more videos...</p>
              )}
            </div>
          </div>
        )}
        {lightboxVideoId && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div
              className="relative w-full"
              style={{ maxWidth: "640px", width: "90%" }}
            >
              <button
                className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
                onClick={closeLightbox}
              >
                ✕
              </button>
              <div
                className="aspect-w-16 aspect-h-9 mx-auto"
                style={{
                  width: "100%",
                  maxWidth: "640px",
                  maxHeight: "360px",
                }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${lightboxVideoId}?autoplay=1`}
                  className="lg:w-[640px] lg:h-[500px] sm:w-[520px] sm:h-[470px] w-[340px] h-[220px] shadow-lg"
                  // frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Vimeo Video Player"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default VideoPage;
