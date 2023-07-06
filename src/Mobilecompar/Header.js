import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
  
   <li><Link to='/home'>Home</Link></li>
   <li><Link to='/singlepage'>Singlepage</Link></li>
   <li><Link to='/compare'>Compare</Link></li>
   

   <Outlet/>
    </div>
  )
}

export default Header