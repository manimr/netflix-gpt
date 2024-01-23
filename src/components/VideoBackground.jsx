import React from "react";
import { useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo";

const VideoBackground = ({ movie_id }) => {
  useTrailerVideo(movie_id);
  const trailer = useSelector((store) => store?.movies?.trailerVideo);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=true&mute=1&start=90`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
