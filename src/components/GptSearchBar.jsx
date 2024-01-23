import React from "react";
import lang from "../utils/lang-constants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieSuggestions } from "../store/gptSlice";
// import { openAi } from "../utils/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang);

  const getMovieDetails = async (movie) => {
    let data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    data = await data.json();
    return await data.results;
  };

  const handleGptSearch = async (event) => {
    event.preventDefault();
    // const gptQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query: " +
    //   event.target["gptsearch"].value +
    //   ". only give me names of 5 movies as comma separated like the example result given ahead. Example Result: Oh My Kadavuley, Captain Miller, Ayalaan, Blue Star, Thiruchitrambalam";
    // const results = await openAi.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    const movies = [
      "Oh My Kadavule",
      "Captain Miller",
      "Ayalaan",
      "Singapore Saloon",
      "Thiruchitrambalam",
      "Mayakkam Enna",
    ];

    const promiseArr = movies.map((movie) => getMovieDetails(movie));
    const movieSuggestionsData = await Promise.all(promiseArr);

    dispatch(
      addGptMovieSuggestions({
        movies: movies,
        movieDetails: movieSuggestionsData,
      })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-11/12 md:w-1/2 grid justify-center grid-cols-12 bg-black rounded-lg"
        onSubmit={(e) => handleGptSearch(e)}
      >
        <input
          className="p-2 m-4 col-span-9 rounded-lg"
          type="text"
          name="gptsearch"
          id="gptsearch"
          placeholder={lang[selectedLang].gptSearchPlaceholderText}
        />
        <button
          className="bg-red-500 mr-4 my-4 p-2 col-span-3 rounded-lg"
          type="submit"
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
