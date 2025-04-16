import {
    GiVikingHelmet,
    GiOrcHead,
    GiDwarfHelmet,
    GiSwirledShell,
    GiElfHelmet,
} from "react-icons/gi";

const raceIcons = {
    Human: <GiVikingHelmet />,
    Orc: <GiOrcHead />,
    Dwarf: <GiDwarfHelmet />,
    Halfling: <GiSwirledShell />,
    Elf: <GiElfHelmet />,
};

const ProjectRaces = ({ races = [] }) => {
    if (!races.length) return null;

    return (
        <div className="mt-3">
            <h4 className="text-gray-300 font-semibold">Races:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
                {races.map((race) =>
                    raceIcons[race] ? (
                        <span
                            key={race}
                            className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                            {raceIcons[race]} {race}
                        </span>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default ProjectRaces;
