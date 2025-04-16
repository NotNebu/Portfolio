import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="mb-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.title}</h3>
            <ul className="text-gray-400 mt-3 text-left list-disc pl-5">
                {skill.description.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default SkillCard;
