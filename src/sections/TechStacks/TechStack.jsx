import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { techStack, techCategories } from "./techData";
import TechCategories from "./TechCategories";
import TechItem from "./TechItem";

const TechStack = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredTech = selectedCategory === "All"
        ? techStack
        : techStack.filter((tech) => tech.category === selectedCategory);

    return (
        <section id="techstack" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">Tech Stack</h2>
                <p className="text-gray-400 mt-2">Technologies & tools I work with</p>

                <TechCategories
                    selected={selectedCategory}
                    setSelected={setSelectedCategory}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <AnimatePresence>
                        {filteredTech.map((tech, index) => (
                            <TechItem key={index} tech={tech} index={index} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
