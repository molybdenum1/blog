import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const postsAction = postsSlice.actions;
