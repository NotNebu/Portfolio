import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
import ProjectRaces from "./ProjectRaces";
import ProjectClasses from "./ProjectClasses";
import ProjectTechStack from "./ProjectTechStack";
import ProjectRepoLink from "./ProjectRepoLink";

const ProjectCard = ({ title, description, image, tech, repoLink, races = [], classes = [] }) => {
    return (
        <motion.div
            className="bg-gray-900 text-white rounded-lg shadow-lg p-4 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
        >
            <ProjectImage image={image} title={title} />
            <h3 className="text-xl font-semibold mt-2 text-gray-300">{title}</h3>
            <ProjectDescription description={description} />
            <ProjectRaces races={races} />
            <ProjectClasses classes={classes} />
            <ProjectTechStack tech={tech} />
            <ProjectRepoLink repoLink={repoLink} />
        </motion.div>
    );
};

export default ProjectCard;
