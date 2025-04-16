const ProjectTechStack = ({ tech = [] }) => (
    <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((item, index) => (
            <span
                key={index}
                className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full"
            >
                {item}
            </span>
        ))}
    </div>
);

export default ProjectTechStack;
