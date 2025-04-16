import { FaArrowUp } from "react-icons/fa";

const ScrollButton = ({ visible, onClick, iconSize = 20, bgColor = "bg-blue-500" }) => (
    <button
        className={`fixed bottom-6 right-6 ${bgColor} text-white p-3 rounded-full shadow-lg transition-all ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClick}
        aria-label="Scroll to top"
    >
        <FaArrowUp size={iconSize} />
    </button>
);


export default ScrollButton;
