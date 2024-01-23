import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API_URL } from "../utils/constants";
import { addTopRatedMovies } from "../store/movieSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.topRatedMovies);
  useEffect(() => {
    const getTopRatedMovies = async () => {
      let topRatedMovies = await fetch(
        MOVIE_API_URL.TOP_RATED_MOVIES,
        API_OPTIONS
      );
      topRatedMovies = await topRatedMovies.json();
      dispatch(addTopRatedMovies(topRatedMovies.results));
    };
    !topRatedMovies && getTopRatedMovies();
  }, [dispatch, topRatedMovies]);
};
