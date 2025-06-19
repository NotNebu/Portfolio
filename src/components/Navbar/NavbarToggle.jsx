import { FaBars, FaTimes } from "react-icons/fa";

const NavbarToggle = ({ isOpen, setIsOpen }) => (
    <button
        aria-label="Toggle menu"
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
    >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
    </button>
);

export default NavbarToggle;
