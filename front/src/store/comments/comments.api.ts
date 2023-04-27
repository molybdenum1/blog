import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IComment, IPost, PostsType } from "../../types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    addNewComment: builder.mutation({
        query: (payload) => {
            return {
                url: `comments/${payload.id}`,
                method: "POST",
                body: payload.comment
            }
        }
    })
  })

})

export const { useAddNewCommentMutation } = commentsApi;
