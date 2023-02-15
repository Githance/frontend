import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/user-auth-slice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.headers"],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

export default store;
