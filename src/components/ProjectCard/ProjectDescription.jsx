import { useState } from "react";

const ProjectDescription = ({ description }) => {
    const [expanded, setExpanded] = useState(false);
    const shortDescription =
        description?.substring(0, 120) + (description?.length > 120 ? "..." : "");

    return (
        <>
            <p className="text-gray-400 mt-1">
                {expanded ? description : shortDescription}
            </p>
            {description?.length > 120 && (
                <button
                    className="mt-2 text-blue-400 hover:text-blue-300 transition"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Read Less" : "Read More"}
                </button>
            )}
        </>
    );
};

export default ProjectDescription;
