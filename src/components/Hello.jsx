import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/hello.css";
import photo from "../../assets/photo2.jpg";

const Hello = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const opacity2 = useTransform(scrollY, [500, 1000, 1200, 1700], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollY, [1700, 2200, 2700], [0, 1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hello">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ opacity, position: "fixed" }}
        transition={{ duration: 0.5, delay: 0.5, type: "tween" }}
        className="hello1"
      >
        <h1>Hello</h1>
        <motion.h1
          initial={{ rotate: 90 }}
          animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        >
          👋
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        style={{ opacity: opacity2, position: "fixed" }}
        className="hello2"
      >
        <h1>I'm Néstor</h1>
        <motion.img
          src={photo}
          alt="Néstor"
          whileTap={{ transform: "rotate(360deg)" }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        style={{ opacity: opacity3, position: "fixed" }}
        className="hello3"
      >
        <h1>I'm a</h1>
        <div className="wrapper">
          <div className="words">
            <h1>web</h1>
            <h1>React</h1>
            <h1>Node.js</h1>
            <h1>full-stack</h1>
            <h1>creative</h1>
          </div>
        </div>
        <h1>developer</h1>
      </motion.div>
    </div>
  );
};

export default Hello;
