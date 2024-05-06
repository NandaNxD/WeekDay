import { useEffect, useState } from "react";
import { useGetAllJobsQuery } from "../../../store/api/apiSlice";
import JobCard from "./JobCard/JobCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "./JobCardsContainer.css";
import Shimmer from "../../../utls/CardShimmer";

const JobCardsContainer = () => {

  const [body, setBody] = useState({
    items: 10,
    offset: 0,
  });

  const { data, isError, isLoading } = useGetAllJobsQuery(body);


  if (isLoading) {
    return <Shimmer/>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  const fetchMore=()=>{
    setBody({items:(body.items),offset:(body.offset+10)});

  }

  const jdList = data.jdList;

  return (
    <div style={{height:'90vh'}}>
      <InfiniteScroll
        dataLength={jdList.length}
        next={fetchMore}
        hasMore={true}
        loader={<Shimmer></Shimmer>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="job-cards-container">
          {jdList.map((jd) => {
            return <JobCard key={jd.jdUid} jd={jd} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default JobCardsContainer;
