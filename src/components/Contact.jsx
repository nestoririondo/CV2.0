import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <motion.div
        className="thing"
        animate={{
          x: 0,
          y: 0,
          scale: 1.5,
          rotate: 122,
        }}
      />
    </>
  );
};

export default Contact;