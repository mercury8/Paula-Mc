"use client";

import { FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+44(0)7957 417775",
    link: "tel:+447957417775", // Click-to-call link
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "paulamcnamara@hotmail.com",
    link: "mailto:paulamcnamara@hotmail.com", // Click-to-email link
  },
  {
    icon: <FaInstagram size={24} />,
    title: "Social",
    description: "Instagram",
    link: "https://www.instagram.com/miss.p.fashion.stylist/", // No link for address (or add a Google Maps URL if needed)
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] px-3 xl:px-0">
          <div>
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p>{item.title}</p>
                      {/* Conditionally render as link if `item.link` exists */}
                      {item.link ? (
                        <a
                          href={item.link}
                          className="hover:text-accent transition-colors"
                        >
                          <h3>{item.description}</h3>
                        </a>
                      ) : (
                        <h3>{item.description}</h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
