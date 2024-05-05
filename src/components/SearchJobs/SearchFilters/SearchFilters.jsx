import SearchFilterComponent from "./SearchFilterComponent/SearchFilterComponent"
import './SearchFilters.css'

const SearchFilters = () => {
  return (
    <div className="searchfilters-parent">
        <SearchFilterComponent placeholder="Roles" />
        <SearchFilterComponent placeholder="Number of Employees"/>
        <SearchFilterComponent placeholder="Experience"/>
        <SearchFilterComponent placeholder="Remote"/>
        <SearchFilterComponent placeholder="Minimum Base Salary"/>
    </div>
  )
}

export default SearchFilters
