import React from 'react'
import './InpText.css'

function InpText() {
  return (
    <section className='section5'>           {/* width 100% */}
    <div className='section5_subDiv5'>                                  {/* width 80% */}
            <div className='section5_subDiv5_sub'>                             {/* width 80% 1200px*/}
            
              <div className='section5_left'>                     {/*  570px*/}
              <div className='section5_left_heading'>
              <h2>Edmond & OKC Area's Best Roofing & Construction Company</h2>
              
              </div>

              <div className='section5_left_para'>
              <p className='section5-heading-title'>We are passionate about providing quality construction services and a superior customer experience.</p>
              <p className='elementor-clearfix'>How can we help? McCann’s Roofing & Construction is committed to providing our customers with top-quality roofing, construction, and remodeling services at an affordable price.</p>
              <p className='elementor-clearfix'>Services include: Roofing, repair, skylights and sun tunnels, windows and doors, siding, painting, rain gutters, custom patios, gazebos, and pergolas, and insurance claim work due to storm damage.</p>
              </div>
              </div>

              <div className='section5_right'>            {/* 630px*/}

                <div className='section5_right_heading'>
                  <p className='input_top_heading'>Free estimate, no obligation.</p>

                </div>
                <form>
                <div className='section5_right_form'>
                  
                    <label><input type='text' placeholder='Full Name'></input></label>
                    <label><input type='text' placeholder='Phone number'></input></label>
                    <label><input type='email' placeholder='You Email'></input></label>
                    <label><input type='text' placeholder='Address'></input></label>
                    <div className='select_service_div'>
                      <span className='select_service_span'>Select Service</span>
                    <select className='option'>
                      <option value="Roofing">Roofing</option>
                      <option value="Storm Damage">Storm Damage</option>
                      <option value="Construction">Construction</option>
                      <option value="Skylights">Skylights</option>
                      <option value="Windows and Doors">Windows and Doors</option>
                      <option value="Sliding">Sliding</option>
                      <option value="Painting">Painting</option>
                      <option value="Custom Patios">Custom Patios</option>
                      <option value="Virtual Design Center">Virtual Design Center</option>
                      </select>
                      </div>
                      <div>
                <button type='submit' className='btn_submit'>Submit</button>
                </div>
                </div>

                
                </form>
              </div>
            </div>
    </div>
    </section>
  )
}

export default InpText;