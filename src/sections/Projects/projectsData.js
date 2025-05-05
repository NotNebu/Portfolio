import project1 from "../../assets/NoLightRPGLogo.webp";
import project2 from "../../assets/AtyasSagaLogo.webp";
import project3 from "../../assets/YAppLogo.webp";
import project4 from "../../assets/react.svg";
import project5 from "../../assets/SEP1.webp";
import project6 from "../../assets/SEP2.webp";
import project7 from "../../assets/SEP3.webp";
import project8 from "../../assets/pokeball.webp";
import project9 from "../../assets/SEP4.webp";

export const finishedProjects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React, TailwindCSS, and Framer Motion.",
        image: project4,
        tech: ["React", "TailwindCSS", "Framer Motion", "Vercel"],
    },
    {
        title: "Project Management System for Construction - 1st Semester Project",
        description:
            "A project management system for a construction company, enabling efficient tracking of various project types (residential, commercial, industrial, road construction) with a structured Java backend and a responsive web interface.",
        image: project5,
        tech: ["Java", "JavaFX", "HTML", "CSS", "jQuery", "Bootstrap"],
        repoLink: "https://github.com/NotNebu/SW_SEP1",
    },
    {
        title: "Skrive Duel - Competitive Typing Racer - 2nd Semester Project",
        description:
            "A multiplayer competitive typing game designed to enhance cognitive, social, and linguistic skills. Developed as a client-server system with a Java backend and database integration.",
        image: project6,
        tech: ["Java", "JavaFX", "Sockets", "JDBC", "PostgreSQL"],
        repoLink: "https://github.com/NotNebu/SW_SEP2",
    },
    {
        title: "Your Green Car - Sustainable Car Rental System - 3rd Semester Project",
        description:
            "A distributed microservice-based car rental and rideshare platform, designed to promote sustainability by optimizing vehicle usage and reducing CO₂ emissions. Includes an API Gateway for secure and efficient communication between services.",
        image: project7,
        tech: ["C#", ".NET", "Blazor", "Java", "gRPC", "REST", "PostgreSQL", "JSON Web Token", "API Gateway"],
        repoLink: "https://github.com/HiroshikunDK/VIA-SEP3-GRP3-Biludljening",
    },
    {
        title: "React – Pokédex",
        description:
            "An interactive Pokédex built with React and Vite, featuring advanced functionality such as Pokémon search, type-based filtering, dark mode toggle, responsive design. Includes a detailed Pokémon view. The UI is enhanced with TailwindCSS.",
        image: project8,
        tech: ["React", "TailwindCSS", "Axios", "Vite"],
        repoLink: "https://github.com/NotNebu/WEB2_Pokedex",
        links: [
            { label: "Live Demo", url: "https://web2-pokedex.vercel.app/" },
        ]
    }
]

export const inDevelopmentProjects = [
    {
        title: "Social Media Platform",
        description:
            "A distributed social media platform inspired by Instagram, built using C# and Java. It leverages gRPC and REST for communication, following CLEAN Architecture principles.",
        image: project3,
        tech: ["C#", "Java", "gRPC", "REST", "PostgreSQL", "SQLite", "Clean Architecture", "Distributed Systems"],
    },
    {
        title: "Atyas' Saga",
        description:
            "Atyas' Saga is a sweeping heptalogy that chronicles the life of Atyas, from his early years to the pivotal moments that shape his destiny. This vast narrative spans across multiple universes, from the distant Accalon Galaxy to the familiar reaches of the Milky Way...",
        image: project2,
        tech: ["Scrivener"],
    },
    {
        title: "No Light CLI RPG",
        description:
            "A text-based roleplaying game featuring multiple choices, races, classes, and a dynamic inventory system. The game supports saving/loading progress and includes a robust stats and shop system.",
        image: project1,
        tech: ["C#", "Clean Architecture", "SQLite"],
        races: ["Human", "Orc", "Dwarf", "Halfling", "Elf"],
        classes: ["Warrior", "Mage", "Archer", "Druid", "Paladin", "Rogue", "Warlock"],
    },
    {
        title: "GroWheat – 4th Semester Project",
        description:
            "A full-stack smart agriculture system combining IoT, machine learning, and DevOps practices. IoT devices collect crop-related data in C, which is analyzed via Python-based ML models. A C# backend using Clean Architecture manages data flow, connected to a PostgreSQL database. The project includes an API Gateway, centralized logging server, and is containerized using Docker.",
        image: project9,
        tech: ["C#", "Clean Architecture", "PostgreSQL", "IoT", "Machine Learning", "Python", "C", "API Gateway", "Centralized Logging Server", "Docker"],
    },
];
