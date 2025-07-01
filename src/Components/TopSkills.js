import React from "react";
import { topSkills } from "../data/dummyData";

const TopSkills = ({ isOpen, toggleAccordion }) => {
  return (
    <div className="bg-[#3e4c66] p-3 md:p-4 rounded-xl shadow text-[#e0e1dd]">
      <div
        className="bg-gray-700 p-2 rounded-xl cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h2 className="text-base md:text-lg font-semibold">🎯 Top Skills</h2>
        <span className="transform transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
          {topSkills.map((skill, i) => (
            <span
              key={i}
              className="bg-[#415a77] text-[#e0e1dd] px-3 py-1 rounded-full text-xs md:text-sm font-medium tracking-wide 
                         transition-all duration-200 hover:bg-[#1b263b] hover:scale-105 cursor-pointer
                         shadow hover:shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopSkills;
