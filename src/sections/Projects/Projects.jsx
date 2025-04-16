import ProjectsSection from "./ProjectsSection";
import { finishedProjects, inDevelopmentProjects } from "./projectsData";

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gray-800 text-white">
            <div className="container mx-auto px-6">
                <ProjectsSection
                    title="🚧 Under Development 🚧"
                    description="Projects that are currently in progress."
                    projects={inDevelopmentProjects}
                    color="text-yellow-400"
                />

                <div className="border-t border-gray-600 my-12"></div>

                <ProjectsSection
                    title="✅ Finished Projects ✅"
                    description="Completed and deployed projects."
                    projects={finishedProjects}
                    color="text-green-400"
                />
            </div>
        </section>
    );
};

export default Projects;
