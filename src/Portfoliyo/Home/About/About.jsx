// import React, { useState } from 'react'
import './AboutStyle.css'
import MyPic from '../../images/picture_profile.JPG'
import React, { useEffect, useState } from 'react';
function About() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          if (count >= 1000) {
            clearInterval(interval);
            return;
          }
    
          // console.log(count);
          setCount(count + 1);
        }, 1);
    
        return () => clearInterval(interval);
      }, [count]);
    // function project(){
    //     let [projectvalue,setProjectvalue] =(0)
    //     setProjectvalue() {
    //         setInterval(() => {
    //             projectvalue++
    //         }, 100);
    //     }
    // }
    


  return (
   <section className='about_section_main'>
    <div className='about_me'>
            <h1>About Me</h1>
        </div>
     <div className='about_section'>
        <div className='about_img_box'>
            <img className='about_img' src={MyPic}></img>
        </div>

        <div className='about_right'>
        
            <div className='introduction'>
            <p>My introduction</p>
            </div>

            <div className='about_content'>
                <div className='three_para'>
                     <p className='para_about_section'>During my Graduation, I spent the months learning (HTML, CSS, JavaScript, ReactJs) both as a Trainee and as a student.</p>
                     <p className='para_about_section'>I have worked on a multitude of web Development projects (PHP, HTML, CSS, JS, WordPress, Bootstrap, Responsive Layouts), eCommerce.</p>
                     <p className='para_about_section'>I am currently working in DURAPID TECHNOLOGIES as Associate Software Developer. I am always available to discuss your project over the phone or via Skype.</p>
                </div> 


            <div className='about_bottom'>
                   <div>
                    <p className='bottom_number'>0-1</p>
                    <p>Experience</p>
                   </div>
                   <div>
                    <p className='bottom_number' id='heading' >
                        {count}+
                        
                       
                    </p>
                    <p>Projects</p>
                   </div>
                   <div>
                    <p className='bottom_number'>0</p>
                    <p>Worked</p>
                   </div>

                   
            </div>
                    <div className='btn cv_downloded_btn'>
                    <button className='btn_line '><a href='#'>Download CV</a></button>
                    </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default About