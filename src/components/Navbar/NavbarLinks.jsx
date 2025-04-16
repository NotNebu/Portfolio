const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "techstack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const NavbarLinks = ({ isOpen, handleScroll }) => (
    <ul
        className={`md:flex gap-6 absolute md:relative top-full left-0 w-full bg-gray-900 md:bg-transparent md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
        } md:flex-row md:items-center md:gap-6 py-4 md:py-0`}
    >
        {navItems.map(({ id, label }) => (
            <li key={id}>
                <button
                    onClick={() => handleScroll(id)}
                    className="block w-full text-center md:w-auto cursor-pointer hover:text-gray-400 p-2"
                >
                    {label}
                </button>
            </li>
        ))}
    </ul>
);

export default NavbarLinks;
