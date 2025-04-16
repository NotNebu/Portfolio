import { techCategories } from "./techData";

const TechCategories = ({ selected, setSelected }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            {techCategories.map((category, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-white transition ${
                        selected === category ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    onClick={() => setSelected(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default TechCategories;
