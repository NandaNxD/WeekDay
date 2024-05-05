import JobCardsContainer from "./JobCardsContainer/JobCardsContainer";
import SearchFilters from "./SearchFilters/SearchFilters";
import './SearchJobs.css'

const SearchJobs = () => {
  
  return (
    <div className="search-jobs">
      <h1>Search Jobs</h1>
      <SearchFilters/>
      <JobCardsContainer />
    </div>
  )
}

export default SearchJobs
