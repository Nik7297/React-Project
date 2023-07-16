import React from 'react'
import logo from '../images/Nitesh_white_logo.jpg'
import { Link} from 'react-router-dom'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import  './Main.css'

function Header() {

const [isOpen, setIsOpen] = useState(false);
const [menuOpen, setaayaOpen] = useState(false);

  
function setmenuOpen(e){
    // console.log(e.key); 
    // menuOpen(e.key) 

  }
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }
 
  return (
    <section className='headetbar'>
        <div className='logo'>
            <img src={logo}></img>
        </div>

        

        <div className='navli'>
            <ul className='nav navthird ' id={menuOpen == true || menuOpen === "Escape"?"open_menu":""}>
                
                <li><a href='#'>About</a></li>
                <li><a to='/about'>Skills</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Feedback</a></li>
                <li className='Arrow_icon'  onClick={()=>setmenuOpen(setaayaOpen(false))}><ArrowBackIcon/></li>
                
            </ul>

            <div className='contact'>
          <button >
          <a href='/contact' >Contact Me</a>
          </button>
        </div>

        <div className='hubarg_menu' onClick={()=>setmenuOpen(setaayaOpen(true))}><MenuIcon/></div>
           
        </div>


{/* <nav className="navbar">
      <div className="nav-container">
        <a to="/" className="nav-logo">
          Logo
        </a>
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a to="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a to="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a to="/skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a to="/services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a to="/portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a to="/blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a to="/feedback" className="nav-link">
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          <span className="nav-icon"></span>
        </button>
      </div>
    </nav> */}

       
    </section>
  )
}

export default Header




//  import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <a to="/" className="nav-logo">
//           Logo
//         </a>
//         <div className={`nav-menu ${isOpen ? "active" : ""}`}>
//           <ul className="nav-list">
//             <li className="nav-item">
//               <a to="/" className="nav-link">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a to="/about" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a to="/skills" className="nav-link">
//                 Skills
//               </a>
//             </li>
//             <li className="nav-item">
//               <a to="/services" className="nav-link">
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a to="/portfolio" className="nav-link">
//                 Portfolio
//               </a>
//             </li>
//             <li className="nav-item">
//               <a to="/blog" className="nav-link">
//                 Blog
//               </a>
//             </li>
//             <li className="nav-item">
//               <a to="/feedback" className="nav-link">
//                 Feedback
//               </a>
//             </li>
//           </ul>
//         </div>
//         <button className="nav-toggle" onClick={toggleNav}>
//           <span className="nav-icon"></span>
//         </button>
//       </div>
//     </nav>
    
//   );
// }

// export default Navbar;