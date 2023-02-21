import { NavLink, Outlet } from 'react-router-dom'
import React from 'react'



function Home() {
  return (
    <div className='nav'>
       <img className='centerposter' src='newweb/carPoster.jpg'></img>
      <div className='navbar'>
        <div className='logo'>
          
          <img src='newweb/carDekho-newLogo.svg'></img>
          </div>
        <div className='link'>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contect'>Contect</NavLink></li>
        <li><NavLink to='/service'>Service</NavLink></li>
        </div>
      </div>
      <div>
        <h2 className='buyers'>Best Buyrs</h2>
        </div>
      <div className='person'>
        

        <span className='men men1'>
          <img src='newweb/Nitesh.jpeg'></img>
          <h4>Nitesh kumawat</h4>
        </span>

        <span className='men men1'>
          <img src='newweb/Nitesh.jpeg'></img>
          <h4>Nitesh kumawat</h4>
        </span>


        <span className='men men1'>
          <img src='newweb/Nitesh.jpeg'></img>
          <h4>Nitesh kumawat</h4>
        </span>

        <span className='men men1'>
          <img src='newweb/Nitesh.jpeg'></img>
          <h4>Nitesh kumawat</h4>
        </span>

        <span className='men men1'>
          <img src='newweb/Nitesh.jpeg'></img>
          <h4>Nitesh kumawat</h4>
        </span>

        <span className='men men1'>
          <img src='newweb/Nitesh.jpeg'></img>
          <h4>Nitesh kumawat</h4>
        </span>

      </div>

    <div className='recommendedBox'>
      <div><h1 className='recommendh1'>Recommended Cars For You
      </h1></div>
      <div className='recommendedCar'>
      <span className='car1 allcar'>
        <img src='newweb/Hyundai-Verna.jpg'></img>
        <h5>Hyundai Verna</h5>
        <number>₹ 9.64 - 15.72 Lakh*</number>
        <p>Avaiable Now</p>
        <button>View Current Offers</button>
      </span>

      <span className='car2 allcar'>
        <img src='newweb/Maruti-Dzire.avif'></img>
        <h5>Maruti Dzire</h5>
        <number>₹ 6.44 - 9.31 Lakh*</number>
        <p>Avaiable Now</p>
        <button>View Current Offers</button>
      </span>

      <span className='car3 allcar'>
        <img src='newweb/Maruti-Baleno.avif'></img>
        <h5>Maruti Baleno</h5>
        <number>₹ 6.56 - 9.83 Lakh*</number>
        <p>Avaiable Now</p>
        <button>View Current Offers</button>
      </span>

      <span className='car3 allcar'>
        <img src='newweb/Hyundai-i20.jpg'></img>
        <h5>Hyundai i20</h5>
        <number>₹ 7.19 - 11.83 Lakh*</number>
        <p>Avaiable Now</p>
        <button>View Current Offers</button>
      </span>
     
      </div>

    </div>

   
      
      


      <div>
        {/* <Outlet /> */}
      </div>

    </div>
  )
}

export default Home