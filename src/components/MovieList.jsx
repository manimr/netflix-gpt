import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ sectionTitle, movies }) => {
  return (
    <div className="px-6">
      <h2 className="mt-3 my-1 text-xl text-white">{sectionTitle}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
