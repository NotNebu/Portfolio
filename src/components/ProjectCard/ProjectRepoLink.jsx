const ProjectRepoLink = ({ repoLink }) => {
    if (!repoLink) return null;

    return (
        <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-green-400 hover:text-green-300 transition"
        >
            Source Code →
        </a>
    );
};

export default ProjectRepoLink;
