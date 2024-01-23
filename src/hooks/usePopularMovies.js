import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API_URL } from "../utils/constants";
import { addPopularMovies } from "../store/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.popularMovies);
  useEffect(() => {
    const getPopularMovies = async () => {
      let popularMovies = await fetch(
        MOVIE_API_URL.POPULAR_MOVIES,
        API_OPTIONS
      );
      popularMovies = await popularMovies.json();
      dispatch(addPopularMovies(popularMovies.results));
    };
    !popularMovies && getPopularMovies();
  }, [dispatch, popularMovies]);
};
