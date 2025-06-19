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
                My interest in technology began through <span className="text-blue-400">gaming</span>, which gradually sparked a desire to understand the systems behind it.
                I became interested in the technical side of <span className="text-blue-400">World of Warcraft</span>, which led me to explore how automation could be used in software.</p>
            <p className="mt-3">
                Today, my focus lies in developing a deeper understanding of <span className="text-blue-400">software architecture</span>, <span className="text-blue-400">automated systems</span>, and structured development workflows.
                I am especially interested in how thoughtful design and maintainable code contribute to scalable applications.
            </p>
            <p className="mt-3">
                Alongside my academic work, I’m also a <span className="text-blue-400">writer</span> and currently working on a long-form fantasy project titled <span className="text-blue-400">Atyas' Saga</span>.
                In my free time, I enjoy helping others with <span className="text-blue-400">IT-related challenges</span> from troubleshooting issues to assembling computers. </p>
            <p className="mt-3">
                I’m eager to contribute to real-world development projects, collaborate with experienced teams, and continuously grow my technical and professional skillset.
            </p>
        </motion.div>
    </AnimatePresence>
);

export default IntroExpanded;
