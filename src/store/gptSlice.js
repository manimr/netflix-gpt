import { createSlice } from "@reduxjs/toolkit";

export const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesName: [],
    moviesDetails: [],
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieSuggestions: (state, action) => {
      const { movies, movieDetails } = action.payload;
      state.moviesName = movies;
      state.moviesDetails = movieDetails;
    },
  },
});

export const { toggleGptSearchView, addGptMovieSuggestions } = gptSlice.actions;
export default gptSlice.reducer;
