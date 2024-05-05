import { useGetAllJobsQuery } from '../../../store/api/apiSlice';
import JobCard from './JobCard/JobCard';
import './JobCardsContainer.css'

const JobCardsContainer = () => {
  const {data,isError,isLoading}=useGetAllJobsQuery();
  
  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h2>Error</h2>
  }

  const jdList=data.jdList
  console.log(jdList);

  return (
    <div className='job-cards-container'>
        {
          jdList.map((jd)=>{
            return <JobCard key={jd.jdUid} jd={jd}/>
          })
        }
    </div>
  )
}

export default JobCardsContainer