import React from "react";
import "./FinanceStyle.css";
import FinanceImg1 from "../image/roof_first (1).jpg";
import FinanceImg2 from "../image/roof_first (2).jpg";
import FinanceImg3 from "../image/roof_first (3).jpg";

function FinanceBox() {
  return (
    <div className="Finance_mainBox">
      {/* <div className='ImgBox_finance'>
            <img src={FinanceImg}></img>
        </div> */}

      <div className="Finance_Img_Form">
        <div className="Finance_up_img_left_right_box">
          <div className="left_posterUp">
            <div className="left_posterUp_heading_box">
              <h1>Roofing & Construction Financing</h1>
            </div>
            <div className="left_posterUp_para_box">
              <p>
                Loan options include 100% Financing, 0% Interest Loans, and Low
                Payment loans. The application process is quick and easy.
              </p>
            </div>
          </div>

          <div className="login-box right_posterUp">
            <h2>Financing Request</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required=""></input>

                <label>Username *</label>
              </div>
              <div className="user-box">
                <input type="text" name="" required=""></input>

                <label>Email *</label>
              </div>
              <div className="user-box">
                <input type="text" name="" required=""></input>
                <label>Mobile Number *</label>
              </div>
              <div className="user-box">
                <input type="text" name="" required=""></input>

                <label>Massage</label>
              </div>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>

      {/* orckasta box */}

      <div className="section2_finance">
        <div className="hero">
          <div>
            <h1 className="hero-title heading1">
              Edmond, OK & OKC area roofing and construction loans
            </h1>
            <div className="hero_para">
              <p>
                Construction loans can be used when your roof needs to be
                replaced at an unexpected time or your insurance deductible is
                hard to manage. Or maybe you want to expand your outdoor living
                area with a new pergola or outdoor kitchen, or add new windows
                to reduce your energy bill.
              </p>

              <p>
                Many roofing contractors, ourselves included, offer financing
                options through partners such as Tinker Federal Credit Union
                (TFCU) and Wells Fargo.
              </p>

              <p>
                Loan options include 100% Financing, 0% Interest Loans, and Low
                Payment loans. The application process is quick and easy.
              </p>

              <p>
                Contact us today to discuss financing options for your project.
              </p>
            </div>
            <a href="#" className="button">
              ONE CALL DOES IT ALL! (405) 259-9998
            </a>
          </div>
          <div className="hero-images">
            <img src={FinanceImg1} alt=""></img>
            <img src={FinanceImg2} alt=""></img>
            <img src={FinanceImg3} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceBox;
