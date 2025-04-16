import React, { useState } from "react";
import { FaReact, FaNodeJs, FaWindows, FaPython, FaGitAlt, FaCogs, FaShieldAlt, FaProjectDiagram, FaNetworkWired, FaHtml5, FaCss3Alt, FaJava, FaDocker, FaCheckCircle } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {SiTailwindcss, SiAxios, SiJavascript, SiMysql, SiDotnet, SiLinux, SiUml, SiSpringboot, SiBlazor, SiJquery, SiBootstrap, SiTestinglibrary, SiSqlite} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import {FaC} from "react-icons/fa6";

export const techCategories = [
    "All",
    "Programming Languages",
    "Frameworks",
    "Libraries",
    "Databases",
    "API Architectures",
    "Software Development & Architecture",
    "Security",
    "Networking",
    "Testing & QA",
    "Runtime Environments",
    "DevOps & Infrastructure",
    "IT & Support"
];

export const techStack = [
    // Programming Languages
    { category: "Programming Languages", name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    { category: "Programming Languages", name: "Python", icon: <FaPython className="text-blue-500" /> },
    { category: "Programming Languages", name: "Java", icon: <FaJava className="text-red-500" /> },
    { category: "Programming Languages", name: "C#", icon: <TbBrandCSharp className="text-purple-400" /> },
    { category: "Programming Languages", name: "C", icon: <FaC className="text-gray-400" /> }, // til IoT
    { category: "Programming Languages", name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { category: "Programming Languages", name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },

    // Frameworks
    { category: "Frameworks", name: "React", icon: <FaReact className="text-blue-400" /> },
    { category: "Frameworks", name: ".NET", icon: <SiDotnet className="text-blue-500" /> },
    { category: "Frameworks", name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { category: "Frameworks", name: "Blazor", icon: <SiBlazor className="text-indigo-500" /> },

    // Libraries
    { category: "Libraries", name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
    { category: "Libraries", name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { category: "Libraries", name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-300" /> },
    { category: "Libraries", name: "Axios", icon: <SiAxios className="text-gray-300" /> },

    // Databases
    { category: "Databases", name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
    { category: "Databases", name: "PostgreSQL", icon: <DiPostgresql className="text-blue-600" /> },
    { category: "Databases", name: "MySQL", icon: <SiMysql className="text-orange-500" /> },

    // API Architectures
    { category: "API Architectures", name: "REST", icon: <FaProjectDiagram className="text-yellow-400" /> },
    { category: "API Architectures", name: "gRPC", icon: <FaProjectDiagram className="text-gray-500" /> },

    // Software Development & Architecture
    { category: "Software Development & Architecture", name: "OOP", icon: <FaCogs className="text-gray-300" /> },
    { category: "Software Development & Architecture", name: "SOLID Principles", icon: <SiUml className="text-blue-400" /> },
    { category: "Software Development & Architecture", name: "Clean Architecture", icon: <SiUml className="text-gray-400" /> },
    { category: "Software Development & Architecture", name: "Distributed Systems", icon: <FaNetworkWired className="text-green-400" /> },
    { category: "Software Development & Architecture", name: "Heterogeneous Systems", icon: <FaNetworkWired className="text-blue-300" /> },
    { category: "Software Development & Architecture", name: "UML Diagrams", icon: <SiUml className="text-gray-400" /> },
    { category: "Software Development & Architecture", name: "Design Patterns", icon: <SiUml className="text-blue-400" /> },

    // Security
    { category: "Security", name: "Authentication & Authorization", icon: <FaShieldAlt className="text-red-500" /> },
    { category: "Security", name: "Encryption (TLS, Hashing)", icon: <FaShieldAlt className="text-yellow-500" /> },
    { category: "Security", name: "Input Validation", icon: <FaShieldAlt className="text-blue-500" /> },

    // Networking
    { category: "Networking", name: "HTTP/S, TCP/IP, DNS", icon: <FaNetworkWired className="text-blue-500" /> },

    // Testing & QA
    { category: "Testing & QA", name: "JUnit (Java)", icon: <SiTestinglibrary className="text-red-500" /> },
    { category: "Testing & QA", name: "xUnit/NUnit (.NET)", icon: <SiTestinglibrary className="text-blue-500" /> },
    { category: "Testing & QA", name: "PyTest (Python)", icon: <SiTestinglibrary className="text-green-500" /> },
    { category: "Testing & QA", name: "Bruno API Testing", icon: <FaCheckCircle className="text-yellow-500" /> },
    { category: "Testing & QA", name: "BloomRPC", icon: <FaCheckCircle className="text-gray-400" /> },

    // Runtime Environments
    { category: "Runtime Environments", name: "Node.js (React setup & npm usage)", icon: <FaNodeJs className="text-green-500" /> },

    // DevOps & Infrastructure
    { category: "DevOps & Infrastructure", name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400" /> },
    { category: "DevOps & Infrastructure", name: "CI/CD", icon: <FaCogs className="text-gray-300" /> },
    { category: "DevOps & Infrastructure", name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { category: "DevOps & Infrastructure", name: "Linux", icon: <SiLinux className="text-green-400" /> },

    // IT & Support
    { category: "IT & Support", name: "Hardware", icon: <FaCogs className="text-gray-300" /> },
    { category: "IT & Support", name: "Windows", icon: <FaWindows className="text-blue-500" /> }
];