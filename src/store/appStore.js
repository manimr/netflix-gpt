import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { movieSlice } from "./movieSlice";
import { gptSlice } from "./gptSlice";
import { configSlice } from "./configSlice";

export const appStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [movieSlice.name]: movieSlice.reducer,
    [gptSlice.name]: gptSlice.reducer,
    [configSlice.name]: configSlice.reducer,
  },
});
