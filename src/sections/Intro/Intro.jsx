import React, { useState } from "react";
import IntroImage from "./IntroImage";
import IntroHeader from "./IntroHeader";
import IntroDescription from "./IntroDescription";
import IntroExpanded from "./IntroExpanded";
import IntroActions from "./IntroActions";

const Intro = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white px-6 pt-32 md:pt-24"
        >
            <IntroImage />
            <IntroHeader />
            <IntroDescription />
            {expanded && <IntroExpanded />}
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-semibold transition-all"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Read Less" : "Read More"}
            </button>
            <IntroActions />
        </section>
    );
};

export default Intro;
