import {
    GiBattleAxe,
    GiWizardStaff,
    GiArcher,
    GiHoodedFigure,
    GiShiningSword,
    GiShadowFollower,
    GiMinotaur,
} from "react-icons/gi";

const classIcons = {
    Warrior: { icon: <GiBattleAxe />, className: "bg-blue-600" },
    Mage: { icon: <GiWizardStaff />, className: "bg-green-600" },
    Archer: { icon: <GiArcher />, className: "bg-yellow-600" },
    Druid: { icon: <GiHoodedFigure />, className: "bg-red-600" },
    Paladin: { icon: <GiShiningSword />, className: "bg-purple-600" },
    Rogue: { icon: <GiShadowFollower />, className: "bg-gray-700" },
    Warlock: { icon: <GiMinotaur />, className: "bg-indigo-600" },
};

const ProjectClasses = ({ classes = [] }) => {
    if (!classes.length) return null;

    return (
        <div className="mt-3">
            <h4 className="text-gray-300 font-semibold">Classes:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
                {classes.map((className) => {
                    const data = classIcons[className];
                    return data ? (
                        <span
                            key={className}
                            className={`flex items-center gap-1 ${data.className} px-3 py-1 rounded-full text-sm`}
                        >
                            {data.icon} {className}
                        </span>
                    ) : null;
                })}
            </div>
        </div>
    );
};

export default ProjectClasses;
