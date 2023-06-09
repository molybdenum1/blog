import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts/posts.slice";
import { postsApi } from "./posts/posts.api";
import { commentsApi } from "./comments/comments.api";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
