import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone} from '@fortawesome/free-solid-svg-icons';
import yearslogo from "./image/icon-30-years.png"
import brandinglogo from "./image/icon-branding.png"
import happylogo from "./image/icon-customers.png"
import Guaranteelogo from "./image/icon-price.png"
import './second_Navbar.css';
import Navbar from './Navbar';
import Footer from './Footer/Footer';
import InpText from './section5/InpText';
import BotomFooter from './BotomFooter/BotomFooter';
import Roofing_Questions_Answers_box from './Roofing_Questions_Answers_box/Roofing_Questions_Answers_box';
import CopyrightFooter from './CopyrightFooter/CopyrightFooter';
// import FirstNavbar from './firstNavbar/firstNavbar';

function Second_Navbar() {
  return (
   <>
   {/* <FirstNavbar/> */}
   
  <Navbar></Navbar>

   <section className='section3'>
    <div className='section3_subDiv3'>
      <div>
       <h1> Oklahoma City Roofing <br></br>& Construction</h1>
        <p>Quality workmanship and service for every client, every time.</p>
        <button>GET A FREE ESTIMATE</button>
        <button>  
        {/* <FontAwesomeIcon icon={faPhone}/>  */}
        (405) 259-9998
        </button>

      </div>
      <div>

      </div>

    </div>
   </section>
    <section className='section4'>                                      {/* width 100% */}
      <div className='section4_subDiv4'>                                  {/* width 80% */}
            <div className='section4_subDiv4_sub'>                             {/* width 80% */}
                  <div className='section4_subDiv4_sub1'>
                    <div className='sub1_A'>
                      <div className='sub1_A_img'><img src={brandinglogo}></img></div>
                      <div className='sub1_A_content'>A + BBB Rating</div>
                      </div>
                    <div  className='sub1_A'>
                      <div className='sub1_A_img'><img src={happylogo}></img></div>
                      <div className='sub1_A_content'>1,000s of Happy Customers</div>
                      </div>
                  </div>

                  <div className='section4_subDiv4_sub1'>
                    <div  className='sub1_A'>
                      <div className='sub1_A_img'><img src={yearslogo}></img></div>
                      <div className='sub1_A_content'>30 Years in Business</div>
                      </div>
                    <div  className='sub1_A'>
                      <div className='sub1_A_img' ><img src={Guaranteelogo}></img></div>
                      <div className='sub1_A_content'>Best Price Guarantee</div>
                      </div>
                  </div>

                
            </div>
                                 
      </div>

    </section>

    {/* Roofing Questions & Answers box */}

    <Roofing_Questions_Answers_box/>

    {/* section5 ------------------------------------- */}


        <InpText></InpText>
          
      {/* ____Footer Up_____------------ */}

      <Footer></Footer>
      
        {/* botom Footer */}

        <BotomFooter></BotomFooter>

      {/* copyright div  */}

      <CopyrightFooter></CopyrightFooter>
   </>
  )
}

export default Second_Navbar;
