import { useEffect, useState } from 'react';
import './JobCard.css';
import { Avatar, CircularProgress, Tooltip} from '@mui/material';
import CircularWithValueLabel from '../../../../utls/CirularProgressWithLabel';
import CustomDialog from '../ShowMoreDialog/CustomDialog';


const JobCard = (jd) => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [matchScore,setMatchScore]=useState(0);
  const [isMatchScoreVisible,setIsMatchScoreVisible]=useState(false)
  const [jobPostDate,setJobPostDate]=useState(1);


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

  const weekdayLink='https://www.weekday.works/';

  const spinnerColor='rgb(85, 239, 196)';

  const avatarShadow='box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;';

  const handleShowMore=()=>{
    openDialog();
  }

  const openDialog=()=>{
    setIsDialogOpen(true);
  }

  const closeDialog=()=>{
    setIsDialogOpen(false);
  }


  useEffect(()=>{
    setMatchScore(Math.floor(Math.random()*100));
    setIsMatchScoreVisible(Math.random()<0.5);
    setJobPostDate(Math.floor(Math.random()*5)+1);
  },[])


  return (
    <div className="job-card" key={jdUid}>
      <div className='posted-date-chip'>
        {`⌛ Posted ${jobPostDate} day Ago`}
      </div>

      {
        isMatchScoreVisible && 

        <div className='match-piechart'>
          <Tooltip title={`You have ${matchScore}% match score with this job`}>
            <div>
              <CircularWithValueLabel variant="determinate" progress={matchScore} color={spinnerColor}  />
            </div>
          </Tooltip>
        </div>
        
      }

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
            <Tooltip title='Offered Salary Range'>
              <span style={{marginLeft:'0.5rem'}}>
              ✅
              </span>
            </Tooltip>
            
          )
        }
      
       
      </div>

      <div className='job-card-description'>
        <div className='about-card-text'>About Company:</div>
        
        <span className='about-us-text'>About us: </span>
        <div className='job-description'>
          {jobDetailsFromCompany}
        </div>

        <div className='text-center show-more' onClick={handleShowMore}>
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

      <CustomDialog dialogBody={jobDetailsFromCompany} dialogTitle={'Job Description'} closeDialog={closeDialog} isOpen={isDialogOpen}></CustomDialog>
      
      <a className='easy-apply-button' href={jdLink} target='_blank'>⚡ Easy Apply</a>
      <a className='referral-button' href={weekdayLink} target='_blank'>

        <Avatar sx={{ bgcolor: 'orange',filter:'blur(1px)',height:'35px',width:'35px' }} src='https://mui.com/static/images/avatar/2.jpg'>N</Avatar>
        <Avatar sx={{ bgcolor: 'purple',filter:'blur(1px)', height:'35px',width:'35px' }} src='https://mui.com/static/images/avatar/3.jpg'>A</Avatar>

        <span>
          Unlock Referral Asks
        </span>
      </a>
    </div>


  )
}

export default JobCard