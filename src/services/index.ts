import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/auth/user-slice';
import userEmailSlice from './slice/auth/user-email-slice';
import authPageSlice from './slice/auth/auth-page-slice';
import registerPageSlice from './slice/auth/register-page-slice';
import resetPageSlice from './slice/auth/reset-page-slice';
import projectSlice from './slice/project/project-slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    userEmail: userEmailSlice,
    authUser: authPageSlice,
    registerUser: registerPageSlice,
    resetUser: resetPageSlice,
    project: projectSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
