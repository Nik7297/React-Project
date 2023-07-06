import React from 'react'

import { useState } from 'react';
import "./Roofing_Questions_Answers_box_style.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


function Roofing_Questions_Answers_box() {

  const [ShowAnswer, setShowAnswer] = useState(true)
  const [ShowAnswersecond, setShowAnswersecond] = useState(false)
  const [ShowAnswerthird, setShowAnswerthird] = useState(false)
  const [ShowAnswerfourt, setShowAnswerfourt] = useState(false)

  return (
    <section className='Questions_Answers_box_section'>  {/* width 100% box*/}
      <div className="Questions_Answers_container">                          {/* width 80% box*/}
        <div className='Most_Common_Roofing_Questions_heading'>
        <h3>Most Common Roofing Questions & Answers</h3>
        </div>
      
      <div className='main_question_containar'>

       <div className='firstquestion_center  quistion_box_defult_center'>

       <div onClick={()=>{setShowAnswer(ShowAnswer === false ? (true) : (false));setShowAnswersecond(false);setShowAnswerthird(false);setShowAnswerfourt(false)}}  className='first_question_icon question_defalte_style_question_icon'>
       <span>How Much Does A Roof Replacement Cost?</span>
        <span>
          <i className={ShowAnswer === true ? "box_according_icon_open displayShow icon_hide" : "box_according_icon_open displayHide"}><ArrowDropDownIcon/></i>
          <i className={ShowAnswer === true ? "box_according_icon_close displayShow" : "box_according_icon_close displayHide icon_hide"}><ArrowDropUpIcon/></i>
        </span>
        
       </div>
       <div>
        <div id={ShowAnswer === true ? "displayShow" : "displayHide"}  className='first_question_paragraf question_paragraf_in_default'>
          <p>A roof replacement in Oklahoma is one of the more costly home improvement projects.</p>

          <p>The overall price of a roof replacement cost in Edmond, OK & Oklahoma City will include materials, labor, disposal, and job site extras. The size of the job, any underlying damage, and your home’s location will also impact the price you pay for a roof replacement.</p>

          <p>
          Asphalt shingles tend to be the most affordable option, followed by galvanized steel. Copper roofing is usually the most expensive type of residential roofing material.
          </p>
        </div>
        
       </div>

       </div>


       {/* second question  */}

       <div className='secondquestion_center  quistion_box_defult_center'>

<div onClick={()=>{setShowAnswersecond(ShowAnswersecond == false ? true : false);setShowAnswer(false);setShowAnswerthird(false);setShowAnswerfourt(false)}}  className='second_question_icon question_defalte_style_question_icon'>
<span>Will Insurance Pay For My Roof Replacement?</span>
 <span>
   <i className={ShowAnswersecond === true ? "box_according_icon_open displayShow icon_hide" : "box_according_icon_open displayHide"}><ArrowDropDownIcon/></i>
   <i className={ShowAnswersecond === true ? "box_according_icon_close displayShow" : "box_according_icon_close displayHide icon_hide"}><ArrowDropUpIcon/></i>
 </span>
 
</div>
<div>
 <div id={ShowAnswersecond === true ? "displayShow" : "displayHide"}  className='second_question_paragraf question_paragraf_in_default'>
   <p>A typical homeowners insurance policy will cover your roof if it’s suddenly damaged, but not if needs to be replaced due to age and normal wear and tear, according to Investopedia.</p>

   <p>Your insurance company may have stipulations when it comes to paying for a roof replacement. For example, some policies won’t cover repairs that are deemed purely cosmetic and insurers may refuse to replace your roof if it wasn’t maintained properly.</p>

   <p>
   It’s a good idea to get your roof regularly inspected by a professional to document its condition. If your roof is damaged, gather the inspection reports as well as before and after photos of your roof to show your insurance company.
   </p>
 </div>
 
</div>

</div>


    

       {/* third question  */}

       <div className='thirdquestion_center  quistion_box_defult_center'>

<div onClick={()=>{setShowAnswerthird(ShowAnswerthird == false ? true : false);setShowAnswer(false);setShowAnswersecond(false);setShowAnswerfourt(false)}}  className='third_question_icon question_defalte_style_question_icon'>
<span>How Do You Get Insurance Coverage For Roof Damage?</span>
 <span>
   <i className={ShowAnswerthird === true ? "box_according_icon_open icon_hide  displayShow" : "box_according_icon_open displayHide"}><ArrowDropDownIcon/></i>
   <i className={ShowAnswerthird === true ? "box_according_icon_close  displayShow" : "box_according_icon_close displayHide icon_hide"}><ArrowDropUpIcon/></i>
 </span>
 
</div>
<div>
 <div id={ShowAnswerthird === true ? "displayShow" : "displayHide"}  className='third_question_paragraf question_paragraf_in_default'>
   <p>Immediately document your property storm damage using photos and video. List items that are damaged and document your losses for your insurance adjuster to review.</p>

   <p>You may need to arrange for temporary repairs to your property to prevent further damage. A qualified roofing expert can help you temporarily fix roof damage until your insurance claim is processed.</p>

   
 </div>
 
</div>

</div>



          

       {/* fourt question  */}

       <div className='fourtquestion_center  quistion_box_defult_center'>

<div onClick={()=>{setShowAnswerfourt(ShowAnswerfourt == false ? true : false);setShowAnswersecond(false);setShowAnswerthird(false);setShowAnswer(false)}}  className='fourt_question_icon question_defalte_style_question_icon'>
<span>What Is Considered Storm Damage To A Roof?</span>
 <span>
   <i className={ShowAnswerfourt === true ? "box_according_icon_open icon_hide displayShow" : "box_according_icon_open displayHide"}><ArrowDropDownIcon/></i>
   <i className={ShowAnswerfourt === true ? "box_according_icon_close icon_show displayShow" : "box_according_icon_close icon_hide  displayHide"}><ArrowDropUpIcon/></i>
 </span>
 
</div>
<div>
 <div id={ShowAnswerfourt === true ? "displayShow" : "displayHide"}  className='fourt_question_paragraf question_paragraf_in_default'>
   <p>Storm damage usually includes things like wind, debris or hail – which can all cause significant roof damage.</p>


   <p>Wind damage usually pulls shingles away or completely off of a roof. Hail damage creates dents and dings on shingles. Debris can break shingles and clog gutters, which increases your risk of water damage.</p>

   <p>Roof damage is not always easy to spot from the ground. Call an experienced roofing contractor to inspect your roof and help determine if your roof has sustained storm damage.</p>

   
 </div>
 
</div>

</div>


      </div>
      </div>
    </section>
  )
}

export default Roofing_Questions_Answers_box