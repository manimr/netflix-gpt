import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[3];
  const { original_title, overview, id: movie_id } = mainMovie;
  return (
    movies && (
      <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movie_id={movie_id} />
      </div>
    )
  );
};

export default MainContainer;
