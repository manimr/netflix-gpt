import { useEffect } from "react";
import { API_OPTIONS, TRAILER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

export const useTrailerVideo = (movie_id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieTrailer = async (movie_id) => {
      let data = await fetch(TRAILER_URL(movie_id), API_OPTIONS);
      data = await data.json();
      const filteredData = data.results?.filter((x) => x.type === "Trailer");
      const trailer = filteredData.length === 0 ? data[0] : filteredData[0];
      dispatch(addTrailerVideo(trailer));
    };
    getMovieTrailer(movie_id);
  }, [movie_id, dispatch]);
};
