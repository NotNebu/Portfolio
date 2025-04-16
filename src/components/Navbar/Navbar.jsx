import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarToggle from "./NavbarToggle";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <NavbarLogo />
                <NavbarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
                <NavbarLinks isOpen={isOpen} handleScroll={handleScroll} />
            </div>
        </nav>
    );
};

export default Navbar;
