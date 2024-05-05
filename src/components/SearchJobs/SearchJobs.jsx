import useSearchJobs from "../../utls/useSearchJobs"
import JobCardsContainer from "./JobCardsContainer/JobCardsContainer";
import SearchFilters from "./SearchFilters/SearchFilters";

const SearchJobs = () => {

  const {data,error,loading}=useSearchJobs();

  return (
    <>
      <div>Search Jobs</div>
      <SearchFilters/>
      <JobCardsContainer jdList={data}/>
    </>
  )
}

export default SearchJobs
