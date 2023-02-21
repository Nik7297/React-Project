import { Link, Outlet } from 'react-router-dom'
import React from 'react'

function Home() {
  return (
    <div>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contect'>Contect</Link></li>
      <li><Link to='/service'>Service</Link></li>
      
      
    <Outlet />
    </div>
  )
}

export default Home