import React from "react";
import { motion } from "framer-motion";

const IntroDescription = () => (
    <motion.p
        className="text-lg text-gray-300 mt-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
    >
        I'm a passionate <span className="text-blue-400">software engineering student</span> with
        <span className="text-blue-400"> 20 years of experience</span> in reading and analyzing software. My primary language is
        <span className="text-blue-400"> C#</span>, and I have a strong interest in
        <span className="text-blue-400"> Automation </span>, and software design.
    </motion.p>
);

export default IntroDescription;
