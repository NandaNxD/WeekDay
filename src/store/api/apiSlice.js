
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
          // Only have one cache entry because the arg always maps to one string
        serializeQueryArgs: ({ endpointName }) => {
            return endpointName;
        },
        // Always merge incoming data to the cache entry
        merge: (currentCache, newItems) => {
            console.log(currentCache.jdList);
            currentCache.jdList.push(...newItems.jdList);
        },
        // Refetch when the page arg changes
        forceRefetch({ currentArg, previousArg }) {
            return currentArg !== previousArg;
        }
    })
  })
})

const {useGetAllJobsQuery} = apiSlice;

export {useGetAllJobsQuery};
