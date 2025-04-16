import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectTitle from "./ProjectsTitle";

const ProjectsSection = ({ title, description, projects, color }) => {
    return (
        <>
            <ProjectTitle title={title} description={description} color={color} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;
