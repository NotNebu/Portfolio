const ProjectTitle = ({ title, description, color }) => {
    return (
        <>
            <h2 className={`text-3xl font-bold text-center ${color}`}>{title}</h2>
            <p className="text-gray-400 text-center mt-2">{description}</p>
        </>
    );
};

export default ProjectTitle;
