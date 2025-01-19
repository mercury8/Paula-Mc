"use client";

import { motion } from "framer-motion";
import MasonryGridSingle from "../components/MasonryGridSingle";

const items = [
  {
    id: 1,
    title: "conker chain",
    images: "/images/COSTUMES.jpg",
  },
  {
    id: 2,
    title: "tree dresses",
    images: "/images/COSTUMES3.jpg",
  },
  {
    id: 3,
    title: "intertwined costume & mask",
    images: "/images/COSTUMES6.jpg",
  },
  {
    id: 4,
    images: "/images/ONE-TREE-PROJECT.jpg7_.jpg",
  },
  {
    id: 7,
    title: "oak slice jacket",
    images: "/images/ONE-TREE-PROJECT.jpg6_.jpg",
  },
  {
    id: 8,
    title: "oak leaf dress",
    images: "/images/ONE-TREE-PROJECT.jpg11.jpg",
  },
  {
    id: 9,
    title: "sawdust dress",
    images: "/images/ONE-TREE-PROJECT.jpg10.jpg",
  },
  {
    id: 10,
    images: "/images/ONE-TREE-PROJECT.jpg",
  },
  {
    id: 11,
    title: "oak branch corset",
    images: "/images/ONE-TREE-PROJECT.jpg9_.jpg",
  },
  {
    id: 12,
    title: "mirror headdress",
    images: "/images/COSTUMES2.jpg",
  },
  {
    id: 13,
    title: "branch bodice",
    images: "/images/COSTUMES1.jpg",
  },
  {
    id: 14,
    title: "wood corset",
    images: "/images/COSTUMES10.jpg",
  },
  {
    id: 15,
    images: "/images/COSTUMES11.jpg",
  },
  {
    id: 16,
    title: "wire costume",
    images: "/images/COSTUMES8.jpg",
  },
  {
    id: 17,
    images: "/images/COSTUMES9.jpg",
  },
  {
    id: 18,
    images: "/images/COSTUMES7.jpg",
  },
  {
    id: 19,
    title: "wire costume",
    images: "/images/COSTUMES15.jpg",
  },
  {
    id: 20,
    title: "wire corest",
    images: "/images/COSTUMES16.jpg",
  },
  {
    id: 21,
    title: "slate bodice.",
    images: "/images/COSTUMES13.jpg",
  },
  {
    id: 22,
    title: "slate bodice.",
    images: "/images/COSTUMES14.jpg",
  },
  {
    id: 23,
    title: "slate bodice.",
    images: "/images/COSTUMES.jpg4_.jpg",
  },
  {
    id: 24,
    images: "/images/COSTUMES.jpg5_.jpg",
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
        <h1 className="text-left text-2xl font-bold my-4">costumes</h1>
        <MasonryGridSingle items={items} />
      </div>
    </motion.section>
  );
}
