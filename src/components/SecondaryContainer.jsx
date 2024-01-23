import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return null;

  return (
    <div className="bg-black">
      <div className="-mt-10 md:-mt-52 pl-10 relative z-20">
        <MovieList
          sectionTitle="Now Playing"
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          sectionTitle="Popular Movies"
          movies={movies?.popularMovies}
        />
        <MovieList
          sectionTitle="Top Rated Movies"
          movies={movies?.topRatedMovies}
        />
        <MovieList
          sectionTitle="Upcoming Movies"
          movies={movies?.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
