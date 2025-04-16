import React from "react";
import { motion } from "framer-motion";

const IntroActions = () => (
    <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <motion.a
            href="#skills"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-semibold transition-all"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
        >
            View Skills
        </motion.a>
        <motion.a
            href="#techstack"
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full text-white font-semibold transition-all"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
        >
            View Tech Stack
        </motion.a>
        <motion.a
            href="#projects"
            className="bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded-full text-white font-semibold transition-all"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
        >
            View Projects
        </motion.a>
    </div>
);

export default IntroActions;
