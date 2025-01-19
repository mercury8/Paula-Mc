"use client";

import React from "react";
import { motion } from "framer-motion";

export function SplitText({ children, ...rest }) {
  const processChildren = (child) => {
    if (typeof child === "string") {
      return child
        .split(/(\s+)/)
        .map((segment, index) => <span key={index}>{segment}</span>);
    }
    return child;
  };

  const elements = React.Children.toArray(children).flatMap(processChildren);

  return elements.map((element, i) => (
    <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
      <motion.span
        {...rest}
        style={{ display: "inline-block", willChange: "transform" }}
        custom={i}
      >
        {element}
      </motion.span>
    </span>
  ));
}

export default SplitText;
