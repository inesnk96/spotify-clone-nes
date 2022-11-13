import { configureStore } from "@reduxjs/toolkit";

import { shazamCoreApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    //access API global store 1
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  //access API global store 2
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
