import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../store/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      let nowPlayingMovies = await fetch(
        MOVIE_API_URL.NOW_PLAYING,
        API_OPTIONS
      );
      nowPlayingMovies = await nowPlayingMovies.json();
      dispatch(addNowPlayingMovies(nowPlayingMovies.results));
    };
    !nowPlayingMovies && getNowPlayingMovies();
  }, [dispatch, nowPlayingMovies]);
};
