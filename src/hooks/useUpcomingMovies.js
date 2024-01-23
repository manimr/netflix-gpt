import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API_URL } from "../utils/constants";
import { addUpcomingMovies } from "../store/movieSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.upcomingMovies);
  useEffect(() => {
    const getUpcomingMovies = async () => {
      let upcomingMovies = await fetch(
        MOVIE_API_URL.UPCOMING_MOVIES,
        API_OPTIONS
      );
      upcomingMovies = await upcomingMovies.json();
      dispatch(addUpcomingMovies(upcomingMovies.results));
    };
    !upcomingMovies && getUpcomingMovies();
  }, [dispatch, upcomingMovies]);
};
