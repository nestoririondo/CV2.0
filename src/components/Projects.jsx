import "../styles/projects.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="project1"
      >
        <h1>Project 1</h1>
      </motion.div>
      <motion.div className="project2">
        <h1>Project 2</h1>
      </motion.div>
    </div>
  );
};

export default Projects;
