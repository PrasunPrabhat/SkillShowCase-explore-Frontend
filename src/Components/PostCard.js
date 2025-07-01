import React, { useState } from "react";
import {
  FaHeart,
  FaRegComment,
  FaBookmark,
  FaRegHeart,
  FaRegBookmark,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [saveCount, setSaveCount] = useState(post.saved);

  const handleLike = () => {
    const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    const newSaveCount = isSaved ? saveCount - 1 : saveCount + 1;
    setSaveCount(newSaveCount);
    setIsSaved(!isSaved);
  };

  const renderContent = () => {
    const linkTexts = {
      Project: "View GitHub",
      Certification: "View Certificate",
      "Coding Rank": "View Profile",
      "Research Paper": "Read Paper",
      Internship: "View Offer",
    };

    return (
      <>
        <h3 className="text-lg md:text-xl font-bold text-[#0d1b2a] mb-2 hover:text-[#1b263b] transition-colors">
          {post.title}
        </h3>
        {post.type === "Internship" && (
          <p className="text-xs md:text-sm text-[#415a77] font-medium mb-2">
            {post.company}
          </p>
        )}
        <a
          href={post.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-xs md:text-sm text-[#778da9] hover:text-[#415a77] transition-colors"
        >
          {linkTexts[post.type]}
          <FiExternalLink className="ml-1" />
        </a>
      </>
    );
  };

  return (
    <div className="bg-white border border-[#e0e1dd] rounded-xl p-4 md:p-5 shadow-md hover:shadow-lg transition-all duration-200">
      {/* Post Type Badge */}
      <div className="mb-3">
        <span className="inline-block bg-[#e0e1dd] text-[#0d1b2a] text-xs px-2 md:px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
          {post.type}
        </span>
      </div>

      {/* Main Content */}
      <div className="mb-3 md:mb-4">{renderContent()}</div>

      {/* Tags */}
      <div className="mb-3 md:mb-4 flex flex-wrap gap-1 md:gap-2">
        {post.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-[#415a77] text-white text-xs px-2 md:px-3 py-1 rounded-full hover:bg-[#1b263b] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer with Engagement Metrics */}
      <div className="flex justify-between items-center text-xs md:text-sm text-[#415a77] border-t border-[#e0e1dd] pt-2 md:pt-3">
        <div className="flex gap-2 md:gap-4 items-center">
          <button
            onClick={handleLike}
            className="flex items-center gap-1 hover:text-[#ef233c] transition-colors"
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            {isLiked ? <FaHeart className="text-[#ef233c]" /> : <FaRegHeart />}
            <span>{likeCount}</span>
          </button>

          <button
            className="flex items-center gap-1 hover:text-[#4cc9f0] transition-colors"
            aria-label="Comments"
          >
            <FaRegComment />
            <span>{post.comments}</span>
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-1 hover:text-[#ffd166] transition-colors"
            aria-label={isSaved ? "Unsave" : "Save"}
          >
            {isSaved ? (
              <FaBookmark className="text-[#ffd166]" />
            ) : (
              <FaRegBookmark />
            )}
            <span>{saveCount}</span>
          </button>
        </div>

        <span className="text-xs text-[#778da9]">{post.time}</span>
      </div>
    </div>
  );
};

export default PostCard;
