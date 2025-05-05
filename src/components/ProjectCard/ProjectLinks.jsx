const ProjectLinks = ({ links = [] }) => {
    if (!links.length) return null;

    return (
        <div className="mt-3 space-y-1">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 hover:text-blue-300 transition"
                >
                    {link.label} →
                </a>
            ))}
        </div>
    );
};

export default ProjectLinks;
