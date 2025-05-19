import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroExpanded = () => (
    <AnimatePresence>
        <motion.div
            className="text-gray-400 mt-3 max-w-3xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="mt-3">
                My journey in tech began with a love for <span className="text-blue-400">gaming</span>, leading me into
                <span className="text-blue-400"> World of Warcraft server emulation</span>. This fascination with game mechanics evolved into
                <span className="text-blue-400"> bot development</span>, where I honed my skills in C# programming, automation, and problem-solving.
            </p>
            <p className="mt-3">
                Now, I focus on expanding my expertise in <span className="text-blue-400">software architecture</span>, Automated-driven solutions, and scalable development.
            </p>
            <p className="mt-3">
                Beyond coding, I’m also a <span className="text-blue-400">writer</span>, currently working on a seven-book series titled <span className="text-blue-400">Atyas' Saga</span>. In addition, I work as an <span className="text-blue-400">IT Supporter</span>,
                troubleshooting systems, assembling computers, and handling diverse technical challenges.
            </p>
            <p className="mt-3">
                With every project, I strive to <span className="text-blue-400">turn challenges into opportunities</span>, continuously refining my skills and pushing the limits of what I can build.
            </p>
        </motion.div>
    </AnimatePresence>
);

export default IntroExpanded;
