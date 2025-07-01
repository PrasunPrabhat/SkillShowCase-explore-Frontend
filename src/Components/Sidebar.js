import React, { useState } from "react";
import UserDashboard from "./UserDashboard";
import Leaderboard from "./Leaderboard";
import TopProjects from "./TopProjects";
import TopSkills from "./TopSkills";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({
  selectedFilter,
  setSelectedFilter,
  selectedSort,
  setSelectedSort,
  onClose,
}) => {
  const sortOptions = ["Recent", "Most Liked", "By Category"];
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionName) => {
    setActiveAccordion(
      activeAccordion === accordionName ? null : accordionName
    );
  };

  return (
    <aside className="h-full w-80  rounded-lg lg:w-96 custom-scrollbar flex flex-col gap-6 bg-[#1b2a45] p-6 text-[#e0e1dd] overflow-y-auto shadow-xl">
      {/* Close button for mobile */}
      <button
        className="lg:hidden self-end text-xl mb-1 p-2 rounded-full hover:bg-[#2a3a5a] transition-colors"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        <FaTimes />
      </button>

      <div className="space-y-6">
        <UserDashboard
          isOpen={activeAccordion === "userDashboard"}
          toggleAccordion={() => toggleAccordion("userDashboard")}
        />

        <Leaderboard
          isOpen={activeAccordion === "leaderboard"}
          toggleAccordion={() => toggleAccordion("leaderboard")}
        />

        <TopProjects
          isOpen={activeAccordion === "topprojects"}
          toggleAccordion={() => toggleAccordion("topprojects")}
        />

        <TopSkills
          isOpen={activeAccordion === "topskills"}
          toggleAccordion={() => toggleAccordion("topskills")}
        />
      </div>

      {/* Sorting Section */}
      <div className="mt-auto bg-[#2a3a5a] p-5 rounded-lg shadow-inner">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Sort & Filter
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelectedSort(option);
                if (onClose) onClose();
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedSort === option
                  ? "bg-[#e0e1dd] text-[#0d1b2a] shadow-md"
                  : "bg-[#415a77] text-white hover:bg-[#4a6888]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
