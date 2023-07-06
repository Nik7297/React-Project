import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import Home_footer_up_img from '../image/estimate_img.jpg';
import './Footer.css'
function Footer() {
  return (
    <section className='section_footer'>           {/* width 100% */}
    <div className='section_footer_subDiv'>              {/* width 100% */}
            <div className='section_footer_subDiv_sub'>     {/* width 80% */}
            <div className='footerUp-background-overlay'></div>
              <div className='footer_up_box'>             {/* width 80% */}
                  {/* <div className='img_box'>
                    <img src={Home_footer_up_img}></img>
                  </div> */}
                        

                  <div className='footerup_overlayup_box'>
                        <div className='footerup_up_text'>
                            <div className='footerup_up_text_left'>

                              
                                    <div className='footerup_up_text_left_h3'>
                                    <h3 className='footer_h3'>Get A Free Estimate</h3>
                                    </div>
                                    <div className='footerup_up_text_left_p'>
                                    <p className='footer_p'>
                                    Our promise as a contractor is to build value into every project while delivering professional expertise, exceptional customer service, and quality construction.
                                    </p>
                                    </div>
                            </div>

                            <div className='footerup_up_btn_right'>
                                
                                    <div className='Estimate_btn'>
                                        <a href='#'>
                                            <span className='btn_in_text'>Get A Free Estimate</span>
                                        </a>
                                    </div>

                                    <div className='callbtn'>
                                        <a href='#'>
                                            <span className='btn_ico'>{<CallIcon/>}</span>
                                            <span className='btn_number'>(405) 259-9998</span>
                                        </a>
                                    </div>
                                
                            </div>

                        </div>
                  </div>
              </div>


            </div>
              <div className='footer_bottom_box'></div>
      </div>
    </section>
  )
}

export default Footer