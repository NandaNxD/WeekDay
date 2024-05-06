
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
            if(currentCache.jdList.length>200){
                currentCache.jdList.splice(0,10)
            }
            currentCache.jdList=[...currentCache.jdList,...newItems.jdList];
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
