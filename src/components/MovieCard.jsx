import React from "react";
import { TMDB_IMG_BASEURL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-28 md:w-48">
      <img
        src={TMDB_IMG_BASEURL + movie.poster_path}
        alt="movie.original_title"
      />
    </div>
  );
};

export default MovieCard;
