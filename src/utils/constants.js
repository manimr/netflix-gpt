export const AVATAR_URL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
  },
};

export const MOVIE_API_URL = {
  NOW_PLAYING:
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  POPULAR_MOVIES:
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  TOP_RATED_MOVIES:
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  UPCOMING_MOVIES:
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
};

export const TRAILER_URL = (movie_id) => {
  return `https://api.themoviedb.org/3/movie/${movie_id}/videos`;
};

export const TMDB_IMG_BASEURL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";
