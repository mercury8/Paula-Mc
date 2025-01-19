"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MasonryGridSingle = ({ items }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative overflow-hidden rounded-lg cursor-pointer bg-gray-200"
              onClick={() => setSelected(item)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={item.images}
                alt={item.title}
                className="w-full h-full object-cover"
                layoutId={`image-${item.id}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 h-full flex flex-col justify-center text-center">
                {item.title}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Selected Item Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white p-4 rounded-lg max-w-lg"
              layoutId={`image-${selected.id}`}
            >
              <motion.img
                src={selected.images}
                alt={selected.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="mt-2 text-center text-black">{selected.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGridSingle;
