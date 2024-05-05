
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice=createApi({
  reducerPath:'api',
  baseQuery: fetchBaseQuery({baseUrl:'https://api.weekday.technology/adhoc'}),
  endpoints: builder => ({
    getAllJobs:builder.query({
        query:(body)=>({
            url:'/getSampleJdJSON',
            body,
            method:'POST',
        }),
        
    })
  })
})

const {useGetAllJobsQuery} = apiSlice;

export {useGetAllJobsQuery};
