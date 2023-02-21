import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './Style.css'

function Home() {
  return (
    <>
    
    <ul className='ulbox'>
        {/* <li><NavLink to={''}>Subjects</NavLink></li> */}
        <li><NavLink to={'/Trending'}>Trending</NavLink></li>
        <li><NavLink to={'/ExplorerBook'}>BookLibrary</NavLink></li>
        <li><NavLink to={'/Lists'}>Lists</NavLink></li>
        <li><NavLink to={'/Collections'}>Collections</NavLink></li>
        <li><NavLink to={'/Blog'}>Blog</NavLink></li>
        <li><NavLink to={'/Contact'}>Contect</NavLink></li>
        
    </ul>
    
    
    <Outlet />
  
    
    </>
  )
  
}

export default Home;