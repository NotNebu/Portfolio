import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const IntroHeader = () => (
    <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        <span className="text-blue-400">
            <Typewriter
                words={[
                    "Hi, I'm Alexander",
                    "A Software Engineer Student",
                    "A C# Developer",
                    "An AI Enthusiast",
                    "A Writer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
            />
        </span>
    </motion.h2>
);

export default IntroHeader;
