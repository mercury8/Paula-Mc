import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+44)",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "aaa@",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Manchester",
  },
];

import { motion } from "framer-motion";

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
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
