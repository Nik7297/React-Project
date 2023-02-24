import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from './Main'
function Header() {
  const {cart}=useContext(CartContext)
  return (
    <div className='header'>
        <h1>Eccomerce</h1>
       <li> <NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contect'}>Contect</NavLink></li>
        <li><NavLink to={'/cart'}>Cart<span>({cart.length})</span></NavLink></li>
    </div>
  )
}

export default Header