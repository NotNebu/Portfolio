import React from "react";
import { motion } from "framer-motion";

const IntroDescription = () => (
    <motion.p
        className="text-lg text-gray-300 mt-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
    >
        I'm a <span className="text-blue-400">software engineering student</span> who's excited to explore the world of development.
        I enjoy working with <span className="text-blue-400">C#</span>, and I'm especially interested in <span className="text-blue-400">automation</span> and <span className="text-blue-400">software design</span>.
        I'm eager to learn, build real-world projects, and grow as a developer.
    </motion.p>
);

export default IntroDescription;
