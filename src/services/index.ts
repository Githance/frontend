import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/auth/user-slice';
import userAuthSlice from './slice/auth/user-auth-slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    userAuth: userAuthSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
