import React, { useState } from "react";
import logo1 from "./image/logo black.jpg";
// import { CgMenu, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <section className="section2-">
        <div className="section2_subDiv">
          <div className="imgDiv">
            <img src={logo1} alt=""></img>
          </div>

          <div className="ul-Div  ">
            <div className="openMenu" onClick={() => setIsOpen(!isOpen)}>
              {/* <CgMenu></CgMenu> */}
            </div>
            <ul
            
              className="container borderXwidth"
              style={{
                left: isOpen ? "0px" : " ",
              }}
            >
              <div className="closemenu" onClick={() => setIsOpen(false)}>
                {/* <CgClose></CgClose> */}
              </div>

              
                {/* <Link to="/about">About</Link> */}
                <a href="#">About</a>

              
            
                {/* <Link to="/service">Services</Link> */}
                <a href="#">About</a>
              
            
                {/* <Link to="/about">Projects</Link> */}
                <a href="#">About</a>
              
            
                {/* <Link to="/about">Financing</Link> */}
                <a href="#">About</a>
              
            
                {/* <Link to="/about">Refer Us</Link> */}
                <a href="#">About</a>
              
              
                {/* <Link to="/about">Contact</Link> */}
                <a href="#">About</a>
              
            </ul>
            <button className="headerButton">GET A FREE ESTIMATE</button>
          </div>
        </div>
      </section>
      {/* bottom footer is here 291 */}

      {/* <BotomFooter></BotomFooter> */}

      {/* copyright div 298  */}

      {/* <CopyrightFooter></CopyrightFooter> */}
    </>
  );
}

export default Navbar;
