import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts/posts.slice";
import { postsApi } from "./posts/posts.api";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
