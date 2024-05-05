import './JobCard.css';
import { Avatar } from '@mui/material';


const JobCard = (jd) => {

  const {
    companyName,
    jdLink,
    jdUid,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    maxJdSalary,minExp,
    minJdSalary,
    salaryCurrencyCode 
  }=jd.jd;

  const weekdayLink='https://www.weekday.works/'

  return (
    <div className="job-card">
      <div className='posted-date-chip'>
        {`⌛ Posted ${Math.floor(Math.random()*20)} days Ago`}
      </div>

      <div className="job-card-header">
        <div>
          <img className="job-card-image" src={logoUrl} alt={companyName}></img>
        </div>
        <div className='job-header-text-section'>
          <a className='company-name-text' href={jdLink} target='_blank'>{companyName}</a>
          <span className='jobrole-text first-upper'>{jobRole}</span>
          <span className='location-text'>{location}</span>
        </div>
      </div>

      <div className='estimated-salary'>
        Estimated Salary:  

        {
          minJdSalary?<span> ₹{minJdSalary} LPA</span>:' ❔'
        }
        {
          (minJdSalary || maxJdSalary)?' - ':''
        }
        {
          maxJdSalary?<span> ₹{maxJdSalary} LPA</span>:' ❔'
        }
        {
          Math.random()<0.5 && (
            <span style={{marginLeft:'0.5rem'}}>
            ✅
            </span>
          )
        }
      
       
      </div>

      <div className='job-card-description'>
        <div className='about-card-text'>About Company:</div>

        <div className='job-description'>
          {jobDetailsFromCompany}
        </div>

        <div className='text-center show-more'>
          Show More
        </div>
      </div>

      <div className='experience-section'>

        <span className='experience-section-text'>
          Minimum Experience
        </span>
        {
          minExp? ( <span className='experience-years-number'>
                      {minExp} Years
                    </span>):
                    '❔'
        }
       
          
      </div>
      
      <a className='easy-apply-button' href={jdLink} target='_blank'>⚡ Easy Apply</a>
      <a className='referral-button' href={weekdayLink} target='_blank'>

        <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
        <Avatar sx={{ bgcolor: 'purple' }}>A</Avatar>

        <span>
          Unlock Referral Asks
        </span>
      </a>
    </div>


  )
}

export default JobCard