import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "../styles/projects.css";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="section-container">
      <h1>Projects</h1>
      <div className="sticky-container">
        <motion.div style={{ x }} className="cards-container">
          <div className="box">Project 1</div>
          <div className="box">Project 2</div>
          <div className="box">Project 3</div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
