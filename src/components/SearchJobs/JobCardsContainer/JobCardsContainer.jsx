import { useEffect, useState } from "react";
import { useGetAllJobsQuery } from "../../../store/api/apiSlice";
import JobCard from "./JobCard/JobCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "./JobCardsContainer.css";
import Shimmer from "../../../utls/CardShimmer";
import { useSelector } from "react-redux";

const JobCardsContainer = () => {
  const [body, setBody] = useState({
    items: 10,
    offset: 0,
  });

  const { data, isError, isLoading } = useGetAllJobsQuery(body);
  const [filteredJdList, setFilteredJdList] = useState([]);

  const filters = useSelector((store) => store.appSlice.filters);

  useEffect(() => {
    if (data) {
      console.log(filters);
      setFilters();
    }
  }, [data, filters]);

  const setFilters = () => {
    let isFiltered = false;
    let tempFilteredList = [];

    if (filters.roleFilter.length) {
      tempFilteredList = data.jdList.filter((jd) => {
        return filters.roleFilter.includes(jd?.jobRole?.toUpperCase());
      });
      isFiltered = true;
    }
    if (filters.experienceFilter) {
      tempFilteredList = isFiltered
        ? tempFilteredList.filter((jd) => {
            return filters.experienceFilter <= jd?.minExp;
          })
        : data.jdList.filter((jd) => {
            return filters.experienceFilter <= jd?.minExp;
          });
      isFiltered = true;
    }
    if (filters.remoteFilter.length) {
      tempFilteredList = isFiltered
        ? tempFilteredList.filter((jd) => {
            return filters.remoteFilter.includes(jd?.location?.toUpperCase());
          })
        : data.jdList.filter((jd) => {
            return filters.remoteFilter.includes(jd?.location?.toUpperCase());
          });
      isFiltered = true;
    }
    if (filters.minimumBaseSalaryFilter) {
      tempFilteredList = isFiltered
        ? tempFilteredList.filter((jd) => {
            return filters.minimumBaseSalaryFilter < jd?.minJdSalary;
          })
        : data.jdList.filter((jd) => {
            return filters.minimumBaseSalaryFilter < jd?.minJdSalary;
          });
      isFiltered = true;
    }
    if (filters.searchFilter) {
      tempFilteredList = isFiltered
        ? tempFilteredList.filter((jd) => {
            return jd?.companyName.toLowerCase().includes(filters.searchFilter.toLowerCase());
          })
        : data.jdList.filter((jd) => {
            return jd?.companyName.toLowerCase().includes(filters.searchFilter.toLowerCase());
          });
      isFiltered = true;
    }

    console.log(isFiltered);

    if (!isFiltered) {
      // No filters added
      setFilteredJdList(data.jdList);
    } else {
      setFilteredJdList(tempFilteredList);
    }
  };

  if (isLoading) {
    return <Shimmer />;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  const fetchMore = () => {
    setBody({ items: body.items, offset: body.offset + 10 });
  };

  return (
    <div style={{ height: "90vh" }}>
      <InfiniteScroll
        dataLength={filteredJdList.length}
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
          {filteredJdList.map((jd) => {
            return <JobCard key={jd.jdUid} jd={jd} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default JobCardsContainer;
