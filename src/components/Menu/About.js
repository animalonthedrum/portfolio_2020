import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    opacity:0,
    x:"200%",
    transition: { 
      delay:.2,
      duration:.3,
      staggerChildren: 0.07, 
      delayChildren: 0.2 
    }
  },
  closed: {
    opacity:1,
    x:"100%",
    transition: { 
      delay:.2,
      duration:.3,
      staggerChildren: 0.05, 
      staggerDirection: -1 
    }
  }
};

export const About = () => (
  <motion.div variants={variants}>
<h1>WHere ya at?</h1>
  </motion.div>
);
