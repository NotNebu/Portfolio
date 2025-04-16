import { motion } from "framer-motion";

const TechItem = ({ tech, index }) => (
    <motion.div
        className="bg-gray-800 p-4 rounded-lg flex flex-col items-center shadow-md"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
    >
        <div className="text-5xl">{tech.icon}</div>
        <p className="mt-2 text-gray-300">{tech.name}</p>
    </motion.div>
);

export default TechItem;
