import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "./skillsData.jsx";
import SkillCategories from "./SkillCategories";
import SkillCard from "./SkillCard";

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter(skill => skill.category === selectedCategory);

    return (
        <section id="skills" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">Skills</h2>
                <p className="text-gray-400 mt-2">A blend of my knowledge.</p>

                <SkillCategories
                    selected={selectedCategory}
                    setSelected={setSelectedCategory}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <AnimatePresence>
                        {filteredSkills.map((skill, index) => (
                            <SkillCard key={index} skill={skill} index={index} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;
