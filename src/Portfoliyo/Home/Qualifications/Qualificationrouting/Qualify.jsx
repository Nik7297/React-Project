import { useState } from 'react'
import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Education from '../Education/Education'
import Training from '../Training/Training'
import './Qualify.css'
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkIcon from '@mui/icons-material/Work';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DataObjectIcon from '@mui/icons-material/DataObject';


function Qualificitionrouts() {
  // const [first, setfirst] = useState(true)
  const [Education, setEducation] = useState(true)
  const [Training, setTraining] = useState(false)
  return (
    <section>
      <div>
        <div className='qualifaction_container'>
          <div className='edu_tra_top_heading'>
          
            <div className='qualify_edu_tra'>
            <h3 className={Education ===true ? "que_heding_background" : 'edu_heading'} onClick={()=>setEducation(true,setTraining(false))} >Education</h3>
            <span className={Education === true ? 'triagle_edu' :" "}></span>
            </div>

            <div className='qualify_edu_tra' >
              
              <h3 className={Training ===true ? "que_heding_background" :'tra_heading'} onClick={()=>setTraining(true,setEducation(false))}>Training</h3>
              <span className={Training ===true?'triagle_tra':" " } ></span>
            </div>

          </div>
          
          { 
            Education === true && <div>
            {/* <h1>Education</h1> */}
            <div className='education_box'>
            <div className='edu_bachelor edu_box'>
              <h1 className='p_4'><span className='icon'><SchoolIcon/></span>Maharishi Arvind University</h1>
              <p className='p_4'><span className='icon date_icon'><CalendarMonthIcon/></span>2019-2022</p>
              <p className='p_4'><span className='education_standerd icon'><WorkspacePremiumIcon/></span>Bachelors in Computer Applications</p>
              {/* <span  className='triagle'></span> */}
            </div>
            <div className='edu_12th edu_box'>
              <h1 className='p_4'><span className='icon'><SchoolIcon/></span>Rajni Public Sr Sec School</h1>
              <p className='p_4'><span className='icon date_icon'><CalendarMonthIcon/></span>2018-2019</p>
              <p className='p_4'><span className='education_standerd icon'><WorkspacePremiumIcon/></span>12th</p>
              {/* <span className='triagle'></span> */}
            </div>
            <div className='edu_10th edu_box'>
              <h1 className='p_4'><span className='icon'><SchoolIcon/></span>Sachidanand Senior Sec. School</h1>
              <p className='p_4'><span className='icon date_icon'><CalendarMonthIcon/></span>2016-2017</p>
              <p className='p_4'><span className='education_standerd icon'><WorkspacePremiumIcon/></span>10th</p>
              {/* <span className='triagle'></span> */}
            </div>
            </div>
            
          </div> 
          }

          { Training === true &&
            <div className='training_box'>
            {/* section Training */}
            {/* <h1>Training</h1> */}
            <div>
            <div className='edu_box'>
                <h1 className='p_4'><span className='icon workicon'><WorkIcon/></span>Full Stack Learning</h1>
                <p className='p_4'><span className='LocalLibraryIcon icon'><LocalLibraryIcon/></span>Trainee</p>
                <p className='p_4'><span className='education_standerd icon'><WorkspacePremiumIcon/></span>Full Stack Development</p>
                <p className='p_4'><span className='icon DataObjectIcon'><DataObjectIcon/></span>HTML, CSS, JS, React, Bootstrap</p>
                {/* <span className='triagle'></span> */}
              </div>
  
              <div className='edu_box'>
                <h1 className='p_4'><span className='icon workicon'><WorkIcon/></span>Let's Grow More</h1>
                <p className='p_4'><span className='LocalLibraryIcon icon'><LocalLibraryIcon/></span>Web Developer Intern</p>
                <p className='p_4'><span className='education_standerd icon'><WorkspacePremiumIcon/></span>Web Developement</p>
                {/* <span className='triagle'></span> */}
              </div>

              {/* <div className='edu_box'>
                <h1 className='p_4'>Let's Grow More</h1>
                <p className='p_4'>Web Developer Intern</p>
                <p className='p_4'>Web Developement</p>
                
              </div> */}
            </div>
            <div>
  
            </div>
            </div> 
          }
         

        


        </div>




      </div>

        {/* <BrowserRouter>
            <Routes>
                
                    <Route path='/about' element={<Education/>}></Route>
                    <Route path='/blog' element={<Training/>}></Route>
                    
               
                   

            </Routes>
        </BrowserRouter> */}

    
    
    </section>
  )
}

export default Qualificitionrouts