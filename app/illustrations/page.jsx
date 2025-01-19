"use client";

import { motion } from "framer-motion";
import MasonryGridSingle from "../components/MasonryGridSingle";

const items = [
  {
    id: 1,
    title: "four women on sofa",
    images: "/images/four-girls-on-sofa.jpg",
  },
  {
    id: 2,
    title: "women with greyhound",
    images: "/images/Woman-with-dog-line.jpg",
  },
  {
    id: 3,
    title: "white woman with greyhound",
    images: "/images/White-woman-with-dog-colour-705x572.jpg",
  },
  {
    id: 4,
    title: "black woman with dog",
    images: "/images/Black-woman-with-dog-705x572.jpg",
  },
  {
    id: 5,
    title: "new york (day scene)",
    images: "/images/New-York-balcony-scene-day-705x577.jpg",
  },
  {
    id: 6,
    title: "new york (night scene)",
    images: "/images/Night-balcony-scene-705x604.jpg",
  },
  {
    id: 7,
    title: "three woman with vintage car",
    images: "/images/three-women-with-car-line--705x545.jpg",
  },
  {
    id: 8,
    title: "three woman with vintage car",
    images: "/images/three-women-with-car--705x543.jpg",
  },
  {
    id: 9,
    title: "chaise longue",
    images: "/images/chaise-line-705x547.jpg",
  },
  {
    id: 10,
    title: "chaise longue",
    images: "/images/Chaise-Longue-Colour-705x525.jpg",
  },
  {
    id: 11,
    title: "two women looking out to sea",
    images: "/images/two-ladies-sea-705x671.jpg",
  },
  {
    id: 12,
    title: "two girls in bed reading",
    images: "/images/Two-girls-in-bed-reading-705x529.jpg",
  },
  {
    id: 13,
    title: "four women on sofa",
    images: "/images/four-girls-on-sofa.jpg",
  },
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
      <div className="container mx-auto">
        <h1 className="text-left text-2xl font-bold my-4">illustration</h1>
        <MasonryGridSingle items={items} />
      </div>
    </motion.section>
  );
}
