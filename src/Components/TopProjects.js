import React from "react";
import { topProjects } from "../data/dummyData";

const TopProjects = ({ isOpen, toggleAccordion }) => {
  return (
    <div className="bg-[#3e4c66] p-3 md:p-4 rounded-xl shadow text-[#e0e1dd]">
      <div
        className="bg-gray-700 p-2 rounded-xl cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h2 className="text-base md:text-lg font-semibold">🚀 Top Projects</h2>
        <span className="transform transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm mt-3 text-left text-[#e0e1dd]">
            <thead>
              <tr className="border-b border-[#415a77]">
                <th className="py-2 px-2 md:px-3 font-semibold">#</th>
                <th className="py-2 px-2 md:px-3 font-semibold">Project</th>
              </tr>
            </thead>
            <tbody>
              {topProjects.map((project, index) => (
                <tr key={index} className="border-b border-[#415a77]">
                  <td className="py-1 px-2 md:px-3">{index + 1}</td>
                  <td className="py-1 px-2 md:px-3 truncate max-w-[150px] md:max-w-none">
                    {project}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TopProjects;
