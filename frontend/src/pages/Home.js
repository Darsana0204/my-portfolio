import { motion } from "framer-motion";

function Home() {
  return (
    <div className="page">
      
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I'm Darsana R
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        B-Tech in Information Technology
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Passionate about building modern web applications and solving
        real-world problems using technology.
      </motion.p>

    </div>
  );
}

export default Home;