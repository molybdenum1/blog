import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, PostsType } from "../../types";

export const postsApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsType, string>({
      query: () => `posts`,
    }),
    getPost: builder.query<IPost[], string>({
      query: (id: string) => `posts/${id}`,
    }),
    addNewPost: builder.mutation<IPost[], { title: string; content: string }>({
      query: (payload) => ({
        url: "posts",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    updatePost: builder.mutation({
      query: (payload) => ({
        url: `posts/${payload.id}`,
        method: "PUT",
        body: payload.body,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi;
