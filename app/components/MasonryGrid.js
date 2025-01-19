"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MasonryGrid = ({ items }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeModal = () => {
    setSelectedGroup(null);
    setCurrentIndex(0);
  };

  return (
    <div className="mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative overflow-hidden rounded-lg cursor-pointer bg-[#18181B]"
              onClick={() => setSelectedGroup(item)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={item.images[0]} // Display the first image of the group
                alt={item.title}
                className="w-full h-full object-cover"
                layoutId={`image-${item.id}`}
                whileHover={{ scale: 1.1 }}
              />
              {/* Label Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 h-full flex flex-col justify-center text-center">
                {item.title}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Selected Group Lightbox */}
      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg max-w-2xl w-full"
              layoutId={`image-${selectedGroup.id}`}
              onClick={(e) => e.stopPropagation()} // Prevent closing on content click
            >
              {/* Current Image */}
              <motion.img
                src={selectedGroup.images[currentIndex]}
                alt={selectedGroup.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="mt-2 text-center text-black">
                {selectedGroup.title} - Image {currentIndex + 1} of{" "}
                {selectedGroup.images.length}
              </p>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center items-center gap-2 mt-4 overflow-x-auto">
                {selectedGroup.images.map((thumbnail, index) => (
                  <motion.img
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                      currentIndex === index
                        ? "border-2 border-blue-500"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
                  }}
                  className="px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  disabled={currentIndex === 0}
                >
                  Prev
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (currentIndex < selectedGroup.images.length - 1)
                      setCurrentIndex((prev) => prev + 1);
                  }}
                  className="px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  disabled={currentIndex === selectedGroup.images.length - 1}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGrid;
