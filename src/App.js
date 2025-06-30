import React, { useState } from "react";
import { posts } from "./data/dummyData";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import PostCard from "./Components/PostCard";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Recent");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getFilteredPosts = () => {
    let filtered = posts;

    if (
      [
        "Project",
        "Certification",
        "Coding Rank",
        "Research Paper",
        "Internship",
      ].includes(selectedFilter)
    ) {
      filtered = filtered.filter((post) => post.type === selectedFilter);
    }

    switch (selectedSort) {
      case "Most Liked":
        filtered = [...filtered].sort((a, b) => b.likes - a.likes);
        break;
      case "By Category":
        filtered = filtered.filter((post) => post.tags.includes("#AI"));
        break;
      default:
        break;
    }

    return filtered;
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1 gap-5 overflow-hidden pt-[4.5rem] relative">
        {/* Sidebar - always visible on lg and toggleable on smaller */}
        <div
          className={`fixed lg:static inset-y-0 left-0 z-40 w-62 rounded-2xl bg-[#1b263b] transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:block`}
        >
          <Sidebar
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Overlay on mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-6 py-4 rounded-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-[#f8f9fa]">
          {getFilteredPosts().map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
