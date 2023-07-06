import React from 'react'
import "./BotomFooter.css"
import Roof_logo from "../image/roof_logo_footer.png"
import ok_oklahoma from "../image/ok_oklahoma-city_roofing_2022.webp"
import ok_edmond from "../image/ok_edmond_roofing_2022.webp"
import badge181_25 from "../image/badge181_25@2x.png"

import LocationCityIcon from '@mui/icons-material/LocationCity';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


// import { FaBeer } from 'react-icons/fa';


function BotomFooter() {
  return (
    <section className='botom_section_footer'>
         <div className='botom_section_footer_subDiv'> {/* width 80% */}

         {/*footer first 1 box  */}
             <div className='first_footer_div first_second_third_hei_wid_defalt'>      

                <div className='Img_footer_logo_center'>
                <div className='Roof_logoImg'>
                    <img src={Roof_logo} width="1200" height="621"></img>
                </div>
                </div>

                <div >
                    <p className='first_div_para'>
                    Located in Edmond, Oklahoma, and serving the OKC metro area, McCann’s Roofing and Construction is passionate about providing quality construction services and a superior customer experience. Contact us for all your roofing, construction, and remodeling needs. One Call Does it All!
                    </p>
                </div>
                
                <div className='Expertise_award_img'>
                    <div className='award_img_box_first award_img_box_defalt'> 
                        <img src={ok_oklahoma} alt="" />
                    </div>
                    <div className='award_img_box_second award_img_box_defalt'> 
                        <img  src={ok_edmond} alt="" />
                    </div>
                </div>

                <div>
                    <ul className='first_footerDiv_ul_policy'>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Accessibility Statement</li>
                    </ul>
                </div>

            </div>


              {/* footer second 2 box */}  
            <div className='second_footer_div first_second_third_hei_wid_defalt'>  
                <div>
                <div>
                <h3 className="footer-heading-title footer-heading-style-defalt ">Contact Info</h3>
                </div>

                <div className='contect_info_box'>
                <div className='contect_info_first_box contect_info_common_box '>
                    <span className=' second_box_icon'><i><LocationCityIcon/></i></span>
                <span className="contect_info_icon_text_common">McCann's OKC Roofing &amp; Construction</span>
                </div>
                <div className='contect_info_second_box contect_info_common_box '>
                    <span className=' second_box_icon'><i><PlaceIcon/></i>  </span>
                    <span className="contect_info_icon_text_common">901 W. 15th St. Edmond,  OK 73013</span>
                    
                </div>
                <div className='contect_info_third_box contect_info_common_box '>
                    <span className=' second_box_icon'><PhoneIcon/></span>
                    <span className="contect_info_icon_text_common">(405) 259-9998</span>
                </div>
                </div>

                <div>
                    <div className='second_div_socialmedia_icon'>

                    <div><span className=' social_media_icon'><LinkedInIcon/></span></div>
                    <div><span className=' social_media_icon'><TwitterIcon/></span></div>
                    <div><span className=' social_media_icon'><RedditIcon/></span></div>
                    <div><span className=' social_media_icon'><RedditIcon/></span></div> {/* icon is not found  */}
                    

                    <div><span className=' social_media_icon'><InstagramIcon/></span></div>
                    <div><span className=' social_media_icon'><FacebookIcon/></span></div>
                    
                    </div>

                    <div className='logo_featured_houzz'>
                        <img src={badge181_25}></img>
                    </div>
                </div>

                    <div>
                        <div className='CONTACT_us_text_box'>
                        <span className="CONTACT_us_text">CONTACT US</span>
                        </div>

                        <div>
                            <div>
                                <h3 className="footer-heading-style-defalt ">Our Company</h3></div>

                            <div>
                                    <ul className='our_company_ul'>
                                        <li>About</li>
                                        <li>Blog</li>
                                        <li>Contact</li>
                                        <li>Projects</li>
                                        <li>Services</li>
                                        <li>Link Partners</li>
                                    </ul>
                            </div>
                        </div>
                    </div>

                
                </div>


            </div>

           
        {/* footer third 3 box */}
            <div className='first_second_third_hei_wid_defalt third_footer_div'>      
                

                <div>
                    <div>
                        <h3 className='footer-heading-style-defalt'>Services</h3>
                    </div>

                    <div>
                        <ul className='Services_ul'>
                            <li><span>Construction Services</span></li>
                            <li><span>Residential Roofing</span></li>
                            <li><span>Custom Patios</span></li>
                            <li><span>Gutters</span></li>
                            <li><span>Painting</span></li>
                            <li><span>Siding</span></li>
                            <li><span>Skylights</span></li>
                            <li><span>Windows & Doors</span></li>
                        </ul>
                    </div>

                    <div>
                        <div>
                        <ul className='blog_up_footer_ul'>
							<li >
								<span >GET A FREE ESTIMATE</span>
											
							</li>
						</ul>
                        </div>

                        <div>
                            <h3 className='footer-heading-style-defalt'>Blog</h3>
                        </div>

                        <div>
                        <div>
                                <div>
                                    <h3> How can you tell if your roof has wind damage?</h3>
                                </div>
                                <div className='Read_more'>
                                    <p >Read More »</p>
                                </div>


                            </div>

                            <div>
                                <div>
                                    <h3>What percentage of roof damage is covered by insurance?</h3>
                                </div>
                                <div className='Read_more'>
                                    <p>Read More »</p>
                                </div>


                            </div>


                            <div>
                                <div className='blog_heading'>
                                    <h3>What size of hail will damage a TPO roof?</h3>
                                </div>
                                <div className='Read_more'>
                                    <p >Read More »</p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>  


                  
        </div>

        
    </section>
  )
}

export default BotomFooter;