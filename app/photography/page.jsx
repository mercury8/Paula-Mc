"use client";

import { motion } from "framer-motion";
import MasonryGrid from "../components/MasonryGrid";

const items = [
  {
    id: 1,
    title: "christmas",
    images: [
      "/images/Yos_Clarke3496-FEATHER-705x470.jpg",
      "/images/Yos_Clarke3308-FEATHER-scaled.jpg",
      "/images/Yos_Clarke4294-BAG-687x1030.jpg",
      "/images/Yos_Clarke5865-FUR-COAT.jpg",
      "/images/Yos_Clarke4294-BAG-687x1030.jpg",
      "/images/Yos_Clarke4558-BAG-1030x687.jpg",
      "/images/Yos_Clarke6332-GOLD-687x1030.jpg",
      "/images/Yos_Clarke5504-WINGS.jpg",
    ],
  },
  {
    id: 2,
    title: "monochrome women",
    images: [
      "/images/Monochrome-1.jpg",
      "/images/Monochrome-2.jpg",
      "/images/Monochrome-3.jpg",
      "/images/Monochrome-4.jpg",
      "/images/Monochrome-5.jpg",
      "/images/Monochrome-6-1.jpg",
      "/images/Monochrome-7.jpg",
    ],
  },
  {
    id: 3,
    title: "monochrome men",
    images: [
      "/images/Absolute_Final-8-728x1030.jpg",
      "/images/Absolute_Final-7-728x1030.jpg",
      "/images/Absolute_Final--728x1030.jpg",
      "/images/Absolute_Final-5-728x1030.jpg",
      "/images/Absolute_Final-6-498x705.jpg",
    ],
  },
  {
    id: 4,
    title: "nautical",
    images: [
      "/images/30s-shoot-4N4Z487-10-1-705x470.jpg",
      "/images/30s-shoot-4N4Z4826-4-1030x682.jpg",
      "/images/30s-shoot-4N4Z4888-9-1-470x705.jpg",
      "/images/30s-shoot-4N4Z4914-8-1-705x467.jpg",
      "/images/30s-shoot-4N4Z5147-13-1-470x705.jpg",
    ],
  },
  {
    id: 5,
    title: "knitwear",
    images: [
      "/images/AUTUMN-KNITWEAR.jpg2_-705x470.jpg",
      "/images/AUTUMN-KNITWEAR.jpg3_.jpg",
      "/images/AUTUMN-KNITWEAR.jpg4_-705x470.jpg",
      "/images/AUTUMN-KNITWEAR.jpg6_-1030x606.jpg",
      "/images/AUTUMN-KNITWEAR.jpg8_-1030x687.jpg",
      "/images/AUTUMN-KNITWEAR-470x705.jpg",
      "/images/AUTUMN-KNITWEAR.jpg5_-705x470",
    ],
  },
  {
    id: 6,
    title: "pattern & texture",
    images: [
      "/images/pattern-texture-p11.jpg",
      "/images/pattern-texture-p10.jpg",
      "/images/pattern-texture-p09.jpg",
      "/images/pattern-texture-p08.jpg",
      "/images/pattern-texture-p07.jpg",
      "/images/pattern-texture-p01.jpg",
      "/images/pattern-texture-p02.jpg",
      "/images/pattern-texture-p04.jpg",
      "/images/pattern-texture-p05.jpg",
      "/images/pattern-texture-p06.jpg",
      "/images/pattern-texture-p05.jpg",
      "/images/20140604HBGroomingtest1209.jpg",
      "/images/20140604HBGroomingtest1064.jpg",
      "/images/20140604HBGroomingtest1047.jpg",
      "/images/20140604HBGroomingtest0778.jpg",
      "/images/20140604HBGroomingtest0665.jpg",
      "/images/20140604HBGroomingtest0158.jpg",
      "/images/20140604HBGroomingtest0308.jpg",
    ],
  },
  {
    id: 7,
    title: "elvis jesus",
    images: [
      "/images/TS30_ElvisJesus.jpg",
      "/images/TSELVIS-JESUS.jpg",
      "/images/TS29_ElvisJesus.jpg",
      "/images/TS-Elvis-Jesus.jpg",
    ],
  },
  {
    id: 8,
    title: "the dress",
    images: [
      "/images/Evening-dress.jpg8_-1030x681.jpg",
      "/images/Evening-dress.jpg7_.jpg",
      "/images/Evening-dress.jpg5_-1030x634.jpg",
      "/images/Evening-dress.jpg4_-1030x684.jpg",
      "/images/Evening-dress.jpg3_.jpg",
      "/images/Evening-dress.jpg2_.jpg",
      "/images/Evening-dress.jpg",
    ],
  },
  {
    id: 9,
    title: "flying colours",
    images: [
      "/images/T03.jpg",
      "/images/T04-1030x687.jpg",
      "/images/T01.jpg",
      "/images/T08-1030x687.jpg",
      "/images/T05.jpg",
      "/images/T06-1030x687.jpg",
    ],
  },
  {
    id: 10,
    title: "atkinson & kirby flooring",
    images: [
      "/images/fc34c1e3-9af8-494c-96de-75828e4cbd13_rw_1200-822x1030.jpg",
      "/images/10cc1169-edfe-4bdb-9c4b-1be6d126cf75_rw_1200-770x1030.jpg",
      "/images/361a2a5f-5490-40a7-9e5d-8e8ccf9d11c5-833x1030.jpg",
      "/images/44c59b45-4e6c-4340-a1ac-293fe2edd30d_rw_1200-847x1030.jpg",
    ],
  },
  {
    id: 11,
    title: "water babies",
    images: [
      "/images/WATER-BABIES.jpg1_.jpg",
      "/images/WATER-BABIES.jpg",
      "/images/WATER-BABIES.jpg8_-1030x624.jpg",
      "/images/WATER-BABIES.jpg2_-1030x728.jpg",
    ],
  },
  {
    id: 12,
    title: "novartis",
    images: [
      "/images/NOVARTIS_Office_V9-705x530.jpg",
      "/images/NOVARTIS_Kitchen_ex_pets_V1-1030x738.jpg",
      "/images/NOVARTIS_Party_V10-1030x767.jpg",
    ],
  },
  {
    id: 13,
    title: "scholl",
    images: [
      "/images/SCHOLL-1030x815.jpg",
      "/images/SCHOLL.jpg6_-529x705.jpg",
      "/images/SCHOLL.jpg5_-471x705.jpg",
      "/images/SCHOLL.jpg2_-494x705.jpg",
      "/images/SCHOLL.jpg3_-479x705.jpg",
    ],
  },
  {
    id: 14,
    title: "ringspin",
    images: [
      "/images/RINGSPUN-COLLECTION-8-1030x672.jpg",
      "/images/RINGSPUN-COLLECTION-1-1.jpg",
      "/images/RINGSPUN-COLLECTION-7.jpg",
      "/images/RINGSPUN-COLLECTION-6.jpg",
      "/images/RINGSPUN-COLLECTION-5.jpg",
      "/images/RINGSPUN-COLLECTION-4.jpg",
      "/images/RINGSPUN-COLLECTION-3.jpg",
      "/images/RINGSPUN-COLLECTION-2.jpg",
    ],
  },
  {
    id: 15,
    title: "marmalade",
    images: [
      "/images/MARMALADE-SKY-COLLECTION.jpg",
      "/images/MARMALADE-SKY-COLLECTION-2.jpg",
      "/images/MARMALADE-SKY-COLLECTION-3.jpg",
      "/images/MARMALADE-SKY-COLLECTION-5.jpg",
      "/images/MARMALADE-SKY-COLLECTION-6.jpg",
      "/images/MARMALADE-SKY-COLLECTION-7.jpg",
      "/images/MARMALADE-SKY-COLLECTION-9.jpg",
      "/images/MARMALADE-SKY-COLLECTION-10.jpg",
    ],
  },
  {
    id: 16,
    title: "pure stuff",
    images: [
      "/images/PURE-STUFF.jpg2_-1030x757.jpg",
      "/images/PURE-STUFF-1030x758.jpg",
      "/images/PURE-STUFF.jpg3_-1030x757.jpg",
      "/images/PURE-STUFF.jpg5_-1030x700.jpg",
    ],
  },
  {
    id: 17,
    title: "into uxbridge",
    images: [
      "/images/intu-uxbridge-2-1.jpg",
      "/images/intu-uxbridge-3-1-1030x517.jpg",
      "/images/intu-uxbridge-1-1-1030x519.jpg",
    ],
  },
  {
    id: 18,
    title: "gola",
    images: [
      "/images/gola-103.jpg",
      "/images/Gola-ads-dev-24-104-499x705.jpg",
      "/images/gola-101.jpg",
      "/images/gola-104-705x353.jpg",
    ],
  },
  {
    id: 19,
    title: "dare2b",
    images: [
      "/images/Dare2b-collage-1.jpg",
      "/images/Dare2b-collage-2.jpg",
      "/images/Dare2b-collage-3.jpg",
      "/images/Dare2b-collage-4.jpg",
      "/images/Dare2b-collage-5.jpg",
      "/images/Dare2b-collage-6.jpg",
    ],
  },
  {
    id: 20,
    title: "craghoppers",
    images: [
      "/images/Nosi-Adventure_Crags-Studio-March-2017172860_white_RET-772x1030.jpg",
      "/images/Nosi-Adventure_Crags-Studio-March-2017172760_white_RET-772x1030.jpg",
      "/images/Nosi-Lifestyle_Crags-Studio-March-2017173497_white_RET-1-772x1030.jpg",
      "/images/Dofe_Crags-Studio-March-2017173767-1_white-1-772x1030.jpg",
      "/images/craghoppers-discovery-15-1.jpg",
      "/images/craghoppers-discovery-14-1.jpg",
      "/images/craghoppers-discovery-13-1.jpg",
      "/images/craghoppers-discovery-2-1.jpg",
      "/images/craghoppers-discovery-1-1.jpg",
    ],
  },
  {
    id: 21,
    title: "jd sports",
    images: [
      "/images/JD-Sports.jpg4_-1030x441.jpg",
      "/images/JD-Sports-1030x441.jpg",
      "/images/JD-Sports.jpg2_-1030x441.jpg",
      "/images/Dofe_Crags-Studio-March-2017173767-1_white-1-772x1030.jpg",
      "/images/JD-Sports.jpg3_-1030x459.jpg",
    ],
  },
  {
    id: 22,
    title: "denim",
    images: [
      "/images/Denim.jpg5_.jpg",
      "/images/Denim.jpg4_.jpg",
      "/images/Denim.jpg2_.jpg",
      "/images/Denim.jpg",
    ],
  },
  {
    id: 23,
    title: "nescafe",
    images: [
      "/images/nescafe-Alegria-1.jpg",
      "/images/nescafe-Alegria-2-1.jpg",
      "/images/nescafe-Alegria-3-1.jpg",
    ],
  },
  {
    id: 24,
    title: "safc pharmaceuticals",
    images: ["/images/SAFC-6-1030x734.jpg", "/images/SAFC.jpg"],
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
        <h1 className="text-left text-2xl font-bold my-4">photography</h1>
        <MasonryGrid items={items} />
      </div>
    </motion.section>
  );
}
