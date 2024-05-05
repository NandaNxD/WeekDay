// import JobCard from '../JobCard/JobCard';
import JobCard from './JobCard/JobCard';
import './JobCardsContainer.css'

const JobCardsContainer = ({jdList}) => {
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