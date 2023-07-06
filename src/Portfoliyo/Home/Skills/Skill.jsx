import React from 'react'
import "./Skill.css"
import { Link } from 'react-router-dom'

function Skill() {
  return (
   
   <section>
     <div className='skill_container'>
     <div className='skill_heading'>
        <h1 >Skills</h1>
        
    </div>
    <div className='my_skill'>
        <p className='skill_heading myskill_para'>My Skills</p>

        <div className='skill_level'>
           <div className='level html_level'>
            <div className='html_skill skill'>
            <h2>HTML5</h2>
            <span >95%</span>
            </div>
            
           </div>

           <div className='level css_level'>
            <div className='css_skill skill'>
            <h2>CSS3</h2>
            <span>85%</span>
            </div>
            
           </div>

          

           <div className='level js_level'>
            <div className='js_skill skill'>
            <h2>Java Script</h2>
            <span>70%</span>
            </div>
            
           </div>

           <div className='level react_level'>
            <div className='react_skill skill'>
            <h2>React.js</h2>
            <span>65%</span>
            </div>
            
           </div>

           <div className='level git_level'>
            <div className='git_skill skill'>
            <h2>Git</h2>
            <span>30%</span>
            </div>
            
           </div>
        </div>
    </div>
     </div>
   </section>
   
  )
}

export default Skill