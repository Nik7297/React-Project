import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faPhone} from '@fortawesome/free-solid-svg-icons';
import "./firstNavbar.css";


function FirstNavbar() {
  return (
    <>
    <section className='section1'>
        <div className='subdiv'>
          <div className='subDiv_p'>
           <p>Serving Central Oklahoma</p>
          </div>

          <div className='contactDiv'>
            <ul className='contactDiv_ul'>

              <li><FontAwesomeIcon icon={faEnvelope} /></li>
              <li>Contact</li>
              <li><FontAwesomeIcon icon={faPhone} /></li>
              <li>(405) 259-9998</li>
            </ul>
          </div>
        </div>
       
    </section>

    
    
    </>
  )
}

export default FirstNavbar;