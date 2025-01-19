"use client";

import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import SplitText from "../app/components/SplitText";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-[32px] font-semibold leading-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 1, // Delay for the entire motion.div
                  duration: 0.5, // Duration for the fade-in effect
                }}
              >
                <SplitText
                  className="pl-2"
                  initial={{ y: "100%" }}
                  animate="visible"
                  variants={{
                    visible: (i) => ({
                      y: 0,
                      transition: {
                        delay: i * 0.3 + 1.5, // Add an additional delay for each letter
                      },
                    }),
                  }}
                >
                  paula
                  <span className="text-accent">
                    <br /> mcnamara
                  </span>
                </SplitText>
              </motion.div>
            </h1>
          </Link>

          <p className="text-[12px] font-normal leading-tight mt-2 pl-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 1, // Delay for the entire motion.div
                duration: 0.5, // Duration for the fade-in effect
              }}
            >
              <SplitText
                className="pl-1"
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.3 + 1.5, // Add an additional delay for each letter
                    },
                  }),
                }}
              >
                fashion stylist
              </SplitText>

              <SplitText
                className="pl-2"
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.3 + 1.5, // Add an additional delay for each letter
                    },
                  }),
                }}
              >
                /
              </SplitText>

              <SplitText
                className="pl-1"
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.3 + 1.5, // Add an additional delay for each letter
                    },
                  }),
                }}
              >
                costume designer
              </SplitText>
            </motion.div>
          </p>

          <p className="text-[12px] font-normal leading-tight mt-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 1, // Delay for the entire motion.div
                duration: 0.5, // Duration for the fade-in effect
              }}
            >
              <SplitText
                className="pl-2 "
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.3 + 1.5, // Add an additional delay for each letter
                    },
                  }),
                }}
              >
                Email:
                <a href="mailto:info@paulaanderson.com">
                  <p className="hover:underline hover:text-accent">
                    paulamcnamara@hotmail.com
                  </p>
                </a>
              </SplitText>
              <br />
              <SplitText
                className="pl-2"
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.3 + 1.5, // Add an additional delay for each letter
                    },
                  }),
                }}
              >
                Tel:
                <a href="tel:+447957417775">
                  <p className="hover:underline hover:text-accent">
                    + 44 (0)7957 417775
                  </p>
                </a>
              </SplitText>
            </motion.div>
          </p>
        </div>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
