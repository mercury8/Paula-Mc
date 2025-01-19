"use client";

import { motion } from "framer-motion";
import MasonryGridSingle from "../components/MasonryGridSingle";

const items = [
  { id: 1, images: "/bioImages/image1.jpg" },
  { id: 2, images: "/bioImages/image2.jpg" },
  { id: 3, images: "/bioImages/image3.jpg" },
  { id: 4, images: "/bioImages/image4.jpg" },
  // { id: 5, images: "/bioImages/image5.jpg", title: "Image 5" },
  { id: 6, images: "/bioImages/image6.jpg" },
  { id: 7, images: "/bioImages/image7.jpg" },
  { id: 8, images: "/bioImages/image8.jpg" },
  { id: 9, images: "/bioImages/image9.jpg" },
  { id: 10, images: "/bioImages/image10.jpg" },
  { id: 11, images: "/bioImages/image11.jpg" },
  { id: 12, images: "/bioImages/image12.jpg" },
  { id: 13, images: "/bioImages/image13.jpg" },
  { id: 14, images: "/bioImages/image14.jpg" },
  { id: 15, images: "/bioImages/image15.jpg" },
  { id: 16, images: "/bioImages/image16.jpg" },
  { id: 17, images: "/bioImages/image17.jpg" },
  { id: 18, images: "/bioImages/image18.jpg" },
  { id: 19, images: "/bioImages/image19.jpg" },
  { id: 20, images: "/bioImages/image20.jpg" },
  { id: 21, images: "/bioImages/image21.jpg" },
  { id: 22, images: "/bioImages/image22.jpg" },
  { id: 23, images: "/bioImages/image23.jpg" },
  { id: 24, images: "/bioImages/image23.jpg" },
  // { id: 25, images: "/bioImages/image24.jpg" },
  // { id: 26, images: "/bioImages/image25.jpg" },
  // { id: 27, images: "/bioImages/image26.jpg" },
  // { id: 28, images: "/bioImages/image27.jpg" },
  // { id: 29, images: "/bioImages/image30.jpg" },
  // { id: 30, images: "/bioImages/image31.jpg" },
  // { id: 31, images: "/bioImages/image32.jpg" },
  // { id: 32, images: "/bioImages/image33.jpg" },
  // { id: 33, images: "/bioImages/image34.jpg" },
  // { id: 34, images: "/bioImages/image35.jpg" },
  // { id: 35, images: "/bioImages/image36.jpg" },
  // { id: 36, images: "/bioImages/image37.jpg" },
  // { id: 37, images: "/bioImages/image38.jpg" },
];

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div>
        <h1 className="container mx-auto text-left text-2xl font-bold my-4">
          Personal
        </h1>
        <MasonryGridSingle items={items} />
      </div>
    </motion.section>
  );
}
