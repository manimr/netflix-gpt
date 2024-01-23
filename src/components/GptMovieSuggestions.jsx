import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { moviesName, moviesDetails } = useSelector((store) => store.gpt);
  return (
    <>
      {moviesDetails.length !== 0 && (
        <div className="p-4 m-4 bg-black bg-opacity-70 text-white">
          <div className=" overflow-x-scroll">
            {moviesName.map((movie, index) => (
              <MovieList
                key={movie}
                sectionTitle={movie}
                movies={
                  moviesDetails[index].length > 2
                    ? Array.from(moviesDetails[index][0])
                    : moviesDetails[index]
                }
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GptMovieSuggestions;
