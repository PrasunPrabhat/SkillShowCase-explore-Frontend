import React from "react";

const UserDashboard = ({ isOpen, toggleAccordion }) => {
  return (
    <div className="bg-[#3e4c66] p-3 md:p-4 rounded-xl shadow text-[#e0e1dd]">
      <div
        className="bg-gray-700 p-2 rounded-xl cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h2 className="text-base md:text-lg font-semibold">
          📊 User Dashboard
        </h2>
        <span className="transform transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <div className="mt-2 ml-2 md:ml-3 space-y-1 md:space-y-2 text-sm md:text-base">
          <p>👤 Prasun Prabhat</p>
          <p>📚 30 Posts</p>
          <p>🏆 Rank: #1</p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
