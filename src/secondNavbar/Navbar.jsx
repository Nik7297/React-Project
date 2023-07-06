import React from 'react'
import logo1 from './image/logo black.jpg';

// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';

function Navbar() {

    


//   const [isOpen, setIsOpen] = useState(false);
  
//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };
  
  // Rest of the code goes here


  return (
    <section className='section2'>
    <div className='section2_subDiv'>
      <div className='imgDiv'>
       <img src={logo1} alt = ""></img>
      </div>
      
      <div className='ul-Div'>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Financing</li>
          <li>Refer Us</li>
          <li>Contact</li>
          <button>GET A FREE ESTIMATE</button>
          
         
        </ul>
      </div>
    </div>
   </section>



  )
}

export default Navbar;