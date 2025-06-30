import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({
  selectedFilter,
  setSelectedFilter,
  onMenuToggle,
  isSidebarOpen,
}) => {
  const filters = [
    "All",
    "Project",
    "Certification",
    "Coding Rank",
    "Research Paper",
    "Internship",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#17314e] text-[#e0e1dd] shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[4.5rem]">
          <button
            className="lg:hidden text-xl focus:outline-none mr-2"
            onClick={onMenuToggle}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="text-xl font-bold md:m-0">SkillShowcase</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                selectedFilter === filter
                  ? "bg-[#e0e1dd] text-[#0d1b2a]"
                  : "bg-[#415a77] text-white hover:bg-[#1b263b]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setIsMenuOpen(false);
              }}
              className={`w-full px-3 py-2 rounded-md text-sm font-medium transition text-left ${
                selectedFilter === filter
                  ? "bg-[#e0e1dd] text-[#0d1b2a]"
                  : "bg-[#415a77] text-white hover:bg-[#1b263b]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
