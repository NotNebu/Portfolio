import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../assets/profile.png";

const IntroImage = () => (
    <motion.img
        src={profilePic}
        alt="Profile"
        className="w-64 h-80 object-cover border-4 border-blue-400 shadow-lg mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
    />
);

export default IntroImage;
