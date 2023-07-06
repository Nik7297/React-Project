import React from 'react'
import "./Financestyle.css"
import Financing_poster_img from "../image/Financing_poster_img.jpg"
import { useState } from "react";

function IndexFinanc() {

      const [Thisform, setThisform] = useState("");
      // const [ShowAnswer, setShowAnswer] = useState(true)

  function AddClass() {
    setThisform("sent");
  }
  return (
    <>
    <div className='finance-mainBox'>

<div className='section1'>
      <div className={Thisform}>
        {/* <small>Enter message optional and click button "Send"</small> */}
<div className="wrapper centered">
  <article class="letter">
    <div className="side">
      <h1>Contact us</h1>
      <p>
        <input type="text" placeholder="Enter Your name" ></input>
      </p>
      <p>
        <input type="text" placeholder="Enter Your Number" ></input>
      </p>
      <p>
        <input type="email" placeholder="Enter Your email" ></input>
      </p>
     
    </div>
    
    <div className="side">
    <p>
        <textarea placeholder="Your Query"></textarea>
      </p>
      <p>
        <button id="sendLetter" onClick={AddClass}>Send</button>
      </p>
    </div>
  </article>
  <div className="envelope front"></div>
  <div className="envelope back"></div>
</div>
<p className="result-message centered">Thank you for your message</p>
    </div>
    </div>




<div className='finance-sub2'>
<div>
<div>
  <h2>Edmond, OK & OKC area roofing and construction loans</h2>

  <p>Construction loans can be used when your roof needs to be replaced at an unexpected time or your insurance deductible is hard to manage. Or maybe you want to expand your outdoor living area with a new pergola or outdoor kitchen, or add new windows to reduce your energy bill.</p>

  <p>Many roofing contractors, ourselves included, offer financing options through partners such as Tinker Federal Credit Union (TFCU) and Wells Fargo.</p>

  <p>Loan options include 100% Financing, 0% Interest Loans, and Low Payment loans. The application process is quick and easy.</p>

  <p>Contact us today to discuss financing options for your project.</p>
</div>




</div>




</div>



      
    </div>
    </>
  )
}

export default IndexFinanc;




// import { useState } from "react";

// function App() {
//   const [className, setClassName] = useState("");

//   function addClass() {
//     setClassName("sent");
//   }

//   return (
//     <div className={className}>
//       <button onClick={addClass}>Send Letter</button>
//     </div>
//   );
// }
