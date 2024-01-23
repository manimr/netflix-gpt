import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieSuggestions, toggleGptSearchView } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";
import lang from "../utils/lang-constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store.config.lang);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    function authStateHandle() {
      return onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
    }
    const unsubscribe = authStateHandle();
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleGptBtnClick = () => {
    dispatch(toggleGptSearchView());
    if (!showGptSearch) {
      dispatch(
        addGptMovieSuggestions({
          movies: [],
          movieDetails: [],
        })
      );
    }
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 flex flex-col md:flex-row justify-between items-center w-full px-16 bg-gradient-to-b from-black">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      {user && (
        <div className="flex gap-2">
          <select
            className="px-3 py-2 bg-gray-900 text-white rounded-lg"
            name="lang-selection"
            id="lang-selection"
            onChange={(e) => handleLanguageChange(e)}
            value={selectedLang}
          >
            <option value="en">English</option>
            <option value="tamil">Tamil</option>
          </select>
          <button
            className="bg-red-500 h-fit py-2 px-3  rounded-lg"
            type="button"
            onClick={handleGptBtnClick}
          >
            {showGptSearch
              ? lang[selectedLang].homePage
              : lang[selectedLang].gptSearch}
          </button>
          <img
            className="hidden md:block w-10 rounded-md"
            src={user?.photoURL}
            alt=""
          />
          <button
            className="bg-red-500 h-fit py-2 px-3 rounded-lg"
            onClick={handleClick}
          >
            {lang[selectedLang].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
