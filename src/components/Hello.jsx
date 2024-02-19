import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/hello.css";
import photo from '../../assets/photo2.jpg';

const Hello = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const opacity2 = useTransform(scrollY, [500, 1000, 1200, 1700], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollY, [1700, 2200], [0, 1]);

  return (
    <div className="hello">
      <motion.div
        initial={{ opacity: 1 }}
        style={{ opacity, position: "fixed" }}
        className="hello1"
      >
        <h1>Hello 👋</h1>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        style={{ opacity: opacity2, position: "fixed" }}
        className="hello2"
      >
        <h1>I'm Néstor</h1>
        <img src={photo} alt="Néstor" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        style={{ opacity: opacity3, position: "fixed" }}
        className="hello3"

      >
        <h1>I'm a web developer</h1>
      </motion.div>
    </div>
  );
};

export default Hello;
