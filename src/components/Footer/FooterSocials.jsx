import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterSocials = () => {
    return (
        <div className="flex justify-center gap-4 mt-2">
            <a href="https://github.com/NotNebu" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/alexanderjannikdj" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={24} />
            </a>
        </div>
    );
};

export default FooterSocials;
