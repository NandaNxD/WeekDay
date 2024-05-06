import { TextField } from "@mui/material"
import SearchFilterComponent from "./SearchFilterComponent/SearchFilterComponent"
import './SearchFilters.css'
import { useState } from "react"
import { useGetAllJobsQuery } from "../../../store/api/apiSlice"
import FilterShimmer from "../../../utls/FilterShimmer"

const SearchFilters = () => {

  const { data, isError, isLoading } = useGetAllJobsQuery();
  const [searchQuery,setSearchQuery]=useState('');
  const [roles,setRoles]=useState(['Backend','Frontend','FullStack']);
  const [numberOfEmployees,setNumberOfEmployees]=useState(['1-50','11-20','21-50','51-100','101-200','201-500','500+']);
  const [experience,setExperience]=useState([1,2,3,4,5,6,7,8,9,10]);
  const [remote,setRemote]=useState(['In-Office','Hybrid','Remote']);
  const [minimumBaseSalary,setMinimumBaseSalary]=useState(['0L','10L','20L','30L','40L','50L','60L','70L',]);

  if(isLoading){
    return <FilterShimmer/>
  }

  return (
    <div className="searchfilters-parent">
        <SearchFilterComponent label="Roles" options={roles} multiple={true}/>
        <SearchFilterComponent label="Number of Employees" options={numberOfEmployees}   multiple={true}/>
        <SearchFilterComponent label="Experience" options={experience} multiple={false}/>
        <SearchFilterComponent label="Remote" options={remote} multiple={true}/>
        <SearchFilterComponent label="Minimum Base Salary" options={minimumBaseSalary}  multiple={false}/>
        <TextField id="outlined-basic" label="Search Company Name" variant="outlined" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
    </div>
  )
}

export default SearchFilters
