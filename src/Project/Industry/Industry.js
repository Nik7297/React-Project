import React from 'react'
import Poster from '../assets/indestry_poster.jpg'
import Bg_ani from '../assets/bg-ani.svg'
import "./industryDesign.css";

function Industry() {

  // const [Domains, setDomanis] = useState()

  // setDomanis(
    
  // )
  
  return (
    <div className='wrapper'>
        <div className='poster'>
            <img src={Poster}  />
            <div className='posterupdiv'>
            <h1 className='poster_h1'>Industries We Serve</h1>
            <p className='poster_p'>Discover how DianApps breakthrough technologies are transforming industries.</p>
            <button className='btn_line'><a href="">Talk to our Experts</a></button>
        </div>

        <div className='overlapSlideText'>
        {/* <div className='shape'></div> */}
        <div className='overlapSlide'>
            
            <h1 className='heading_yello '>Industry Solutions</h1>
            <p>Digitally change your business with support from a trusted DianApps expert who knows all aspects of different industries and technologies.</p>
        </div>
        </div>


        </div>

        

        <div className='transformational_app'>
        <img src={Bg_ani} alt="" class="aos-init aos-animate" data-aos="fade-down" data-aos-duration="600" data-aos-delay="300"></img>
            <div className='transformational_h1p'>
            <h1 className='heading_yello transformational_h1'>Transformational App & Web <br></br> Development<br></br>
Across Industries   </h1>
            <p className='transformational_p'>Leverage next-gen technologies to build industry leading solutions that offers scalable and transformational user experience seamlessly. Our software app developers have profound knowledge in technology and uses tech-savvy tools to deliver holistic app & web solutions to individuals and businesses with a vision to help them stay competitive, maintain their business operations more professionally to not be versatile but also save cost effectively. With sheer customer satisfaction in mind, we dedicatedly develop highly intriguing apps that strictly meet the business requirements and cater a wide spectrum of projects irrespective of the industry you hail from, we have everything organised for you.</p>
            </div>
        </div>
       
       <div className='Domains'>

        <div className='Domains_top'>
        <h1>Domains</h1>
        <p>No matter what is your business domain, our collaborative designing process engages you and your team in each step.</p>
        </div>

        <div className=''>
          <div className='Healthcare_box' >
           <h3>  Healthcare </h3>
           <p>
             Delivering world-class Healthcare solutions to improve medical care. 
           </p>
          </div>

          <div>
           <h3>  E-commerce </h3>
           <p>
           
Our eCommerce solutions that deliver a digital product for businesses. 
           </p>
          </div>

          <div>
           <h3>   Social Media </h3>
           <p>
          
Our Social media solutions help businesses to reach their audience and engage with the world.
           </p>
          </div>

          <div>
           <h3>  Business</h3>
           <p>
          

Our Business Solutions help in delivering cloud-based business applications that improves your growth.
           </p>
          </div>

          
        </div>

       </div>


    </div>
  )
}

export default Industry