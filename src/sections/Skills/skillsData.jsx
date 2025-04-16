import {
    FaNetworkWired,
    FaShieldAlt,
    FaServer,
    FaDatabase,
    FaCode,
    FaProjectDiagram,
} from "react-icons/fa";
import {
    SiDotnet,
    SiLinux,
    SiUml,
    SiJavascript,
    SiReact,
    SiMongodb,
} from "react-icons/si";

export const skillCategories = [
    "All",
    "OOP & Software Engineering",
    "Full-Stack Development",
    "Distributed Systems & Cybersecurity",
    "Algorithms & Computer Architecture",
    "Networking & Internet Protocols",
    "Project Collaboration",
    ".NET & C# Development",
];

export const skills = [
    {
        category: "OOP & Software Engineering",
        title: "OOP & Software Engineering",
        icon: <SiUml className="text-blue-400 text-5xl" />,
        description: [
            "Proficient in object-oriented programming (OOP) using Java & C#.",
            "Experience with UML diagrams (class, sequence, and activity diagrams).",
            "Knowledgeable in SOLID principles and software architecture patterns.",
            "Designed and implemented scalable, maintainable applications.",
        ],
    },
    {
        category: "Full-Stack Development",
        title: "Full-Stack Web Development",
        icon: <SiReact className="text-blue-300 text-5xl" />,
        description: [
            "Proficient in front-end technologies: React, JavaScript, TailwindCSS.",
            "Experience in backend development with .NET APIs.",
            "Database expertise: SQL (PostgreSQL, SQLite).",
            "Built RESTful APIs and integrated cloud-based services.",
        ],
    },
    {
        category: "Distributed Systems & Cybersecurity",
        title: "Distributed Systems & Cybersecurity",
        icon: <FaServer className="text-blue-400 text-5xl" />,
        description: [
            "Designed and implemented secure distributed systems.",
            "Explored various communication methods (direct & indirect).",
            "Analyzed security risks and applied authentication & encryption techniques.",
        ],
    },
    {
        category: "Algorithms & Computer Architecture",
        title: "Algorithms, Data Structures & Computer Architecture",
        icon: <FaCode className="text-yellow-400 text-5xl" />,
        description: [
            "Analyzed algorithms using Big-O notation and time complexity.",
            "Designed efficient data structures (linked lists, trees, graphs).",
            "Understood CPU components, logic gates, and ALUs.",
        ],
    },
    {
        category: "Networking & Internet Protocols",
        title: "Networking & Internet Protocols",
        icon: <FaNetworkWired className="text-blue-500 text-5xl" />,
        description: [
            "Understood layered network protocol stacks and IP addressing.",
            "Analyzed network traffic using packet sniffing tools.",
            "Calculated network delays and optimized network performance.",
            "Implemented basic networking solutions for distributed systems.",
        ],
    },
    {
        category: "Project Collaboration",
        title: "Project-Based Learning & Collaboration",
        icon: <FaProjectDiagram className="text-purple-400 text-5xl" />,
        description: [
            "Applied Agile methodologies like Scrum in project development.",
            "Used Git and GitHub for version control and collaboration.",
            "Experienced in technical documentation and system design reports.",
            "Independently researched and applied relevant technologies in projects.",
        ],
    },
    {
        category: ".NET & C# Development",
        title: ".NET & C# Development",
        icon: <SiDotnet className="text-blue-500 text-5xl" />,
        description: [
            "Developed C# applications using .NET and ASP.NET.",
            "Implemented RESTful Web Services and consumed APIs.",
            "Applied asynchronous programming and handled concurrency.",
            "Worked with Object-Relational Mapping (ORM) libraries.",
        ],
    },
];
