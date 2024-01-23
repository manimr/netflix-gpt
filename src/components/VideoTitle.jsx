import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] md:pt-[20%] px-16 text-white bg-gradient-to-tr from-black w-screen aspect-video absolute">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block mt-3 w-1/4">{overview}</p>
      <div className="mt-4">
        <button className="py-2 px-6 md:p-4 md:px-12 bg-white text-black">
          ▶️ Play
        </button>
        <button className="ml-2 py-2 px-6 md:p-4 md:px-12 bg-gray-500 text-white bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
