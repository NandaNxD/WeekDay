import useSearchJobs from "../../utls/useSearchJobs"
import JobCardsContainer from "./JobCardsContainer/JobCardsContainer";
import SearchFilters from "./SearchFilters/SearchFilters";
import './SearchJobs.css'

const SearchJobs = () => {

  const {data,error,loading}=useSearchJobs();

  return (
    <div className="search-jobs">
      <h1>Search Jobs</h1>
      <SearchFilters/>
      <JobCardsContainer jdList={data}/>
    </div>
  )
}

export default SearchJobs
