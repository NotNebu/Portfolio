import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactLinks = () => (
    <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg inline-block">
        <div className="flex flex-col gap-4 text-lg">
            <a
                href="mailto:Alexanderjannikdj@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
            >
                <FaEnvelope className="text-2xl" />
                Alexanderjannikdj@gmail.com
            </a>
            <a
                href="https://github.com/NotNebu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
                <FaGithub className="text-2xl" />
                github.com/NotNebu
            </a>
            <a
                href="https://linkedin.com/in/Alexanderjannikdj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
            >
                <FaLinkedin className="text-2xl" />
                linkedin.com/in/Alexanderjannikdj
            </a>
        </div>
    </div>
);

export default ContactLinks;
