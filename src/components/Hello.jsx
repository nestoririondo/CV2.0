import React, { useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "../styles/hello.css";
import photo from "../../assets/photo2.jpg";

const Hello = () => {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  const onTap = () => {
    controls
      .start({
        scale: 1.5,
        transition: { type: "spring", stiffness: 300, damping: 60 },
      })
      .then(() => {
        controls.start({
          scale: 1,
          transition: { type: "spring", stiffness: 2000, damping: 10 },
        });
      });
  };

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const opacity2 = useTransform(scrollY, [500, 1000, 1200, 1700], [0, 1, 1, 0]);
  const opacity3 = useTransform(
    scrollY,
    [1700, 2200, 2400, 2900],
    [0, 1, 1, 0]
  );

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
          alt="This is me"
          animate={controls}
          onTap={onTap}
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
            {words.map((word) => (
              <h1>{word}</h1>
            ))}
          </div>
        </div>
        <h1>developer</h1>
      </motion.div>
    </div>
  );
};
const words = ["web", "React", "Node.js", "full-stack", "creative"];

export default Hello;
