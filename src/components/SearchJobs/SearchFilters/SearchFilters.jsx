import { TextField } from "@mui/material"
import SearchFilterComponent from "./SearchFilterComponent/SearchFilterComponent"
import './SearchFilters.css'
import { useEffect, useState } from "react"
import { useGetAllJobsQuery } from "../../../store/api/apiSlice"
import FilterShimmer from "../../../utls/FilterShimmer"
import { ROLES,NUMBER_OF_EMPLOYEE,MIN_EXP,REMOTE,MIN_BASE_SALARY, SEARCH} from "../../../utls/Constant"
import { useDispatch } from "react-redux"
import { setFilter } from "../../../store/appSlice"

const SearchFilters = () => {

  const { data, isError, isLoading } = useGetAllJobsQuery();
  const [searchQuery,setSearchQuery]=useState('');
  const [roles,setRoles]=useState([]);
  const [numberOfEmployees,setNumberOfEmployees]=useState(['1-50','11-20','21-50','51-100','101-200','201-500','500+']);
  const [experience,setExperience]=useState([1,2,3,4,5,6,7,8,9,10]);
  const [location,setLocation]=useState(['In-Office','Hybrid','Remote']);
  const [minimumBaseSalary,setMinimumBaseSalary]=useState(['0 USD','5 USD','20 USD','30 USD','40 USD','50 USD','60 USD','70+ USD',]);

  const dispatch=useDispatch();


  useEffect(()=>{
    if(data){
      setRoleFilterData(data);
      setLocationFilterData(data);
      
    }
  },[data])


  const setLocationFilterData=(data)=>{
    const locationData=(data.jdList.map((jd)=>{
      return jd.location
    }).filter((location)=>{
      return location;
    })).map((location)=>{
      return location.toUpperCase();
    })
    setLocation([...new Set(locationData)]);
  }

  const setRoleFilterData=(data)=>{
    const rolesFilterData=(data.jdList.map((jd)=>{
      return jd.jobRole
    }).filter((jobRole)=>{
      return jobRole;
    })).map((jobRole)=>{
      return jobRole.toUpperCase();
    })

    setRoles([...new Set(rolesFilterData)])
  }

  const handleSearchQueryChange=(e)=>{
    dispatch(setFilter({type:SEARCH,filterData:e.target.value}))
    setSearchQuery(e.target.value)
  }


  if(isLoading){
    return <FilterShimmer/>
  }

  if(isError){
    return "Error Loading Filters";
  }

  return (
    <div className="searchfilters-parent">
        
        <SearchFilterComponent label={ROLES} options={roles} multiple={true} />
        <SearchFilterComponent label={NUMBER_OF_EMPLOYEE} options={numberOfEmployees}   multiple={true}/>
        <SearchFilterComponent label={MIN_EXP} options={experience} multiple={false}/>
        <SearchFilterComponent label={REMOTE} options={location} multiple={true}/>
        <SearchFilterComponent label={MIN_BASE_SALARY} options={minimumBaseSalary}  multiple={false}/>
        <TextField id="outlined-basic" label="Search Company Name" variant="outlined" value={searchQuery} onChange={handleSearchQueryChange} />
    </div>
  )
}

export default SearchFilters
