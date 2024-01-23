import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { AVATAR_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  function toggleSignIn() {
    setIsSignIn(!isSignIn);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const isNotValid = validate(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(isNotValid);
    if (isNotValid === null && isSignIn) {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
    } else if (isNotValid === null && !isSignIn) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        updateProfile(auth.currentUser, {
          displayName: nameRef.current.value,
          photoURL: AVATAR_URL,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="relative rounded-md w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <Header />
      <div className="absolute top-48 right-28 md:w-3/12 md:right-[33rem] md:top-[12rem] bg-black opacity-80 py-6 px-10">
        <h2 className="text-white font-bold text-2xl">
          {isSignIn ? "Sign In" : "Sign up"}
        </h2>
        <form
          autoComplete="off"
          className="text-white"
          onSubmit={(e) => handleSubmit(e)}
        >
          {!isSignIn && (
            <input
              className="p-3 block bg-gray-700 w-full my-8 rounded-md"
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              ref={nameRef}
            />
          )}
          <input
            className="p-3 block bg-gray-700 w-full my-8 rounded-md"
            type="text"
            name="email"
            id="email"
            placeholder="Enter email or phone number"
            ref={emailRef}
          />
          <input
            className="p-3 block bg-gray-700 w-full my-8 rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Enter passsword"
            ref={passwordRef}
          />
          {errorMessage && (
            <p className="text-red-500 font-bold mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="bg-red-500 p-2 my8 text-white w-full rounded-md"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="mt-4">
            <input type="checkbox" name="remember_me" id="remember_me" />
            <label className="text-gray-400 ml-2" htmlFor="remember_me">
              Remember me
            </label>
          </div>
          <p className="text-gray-400">
            {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              className="cursor-pointer text-red-500"
              onClick={toggleSignIn}
            >
              {isSignIn ? "Sign up" : "Sign in"}
            </span>{" "}
            now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
