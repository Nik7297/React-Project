import React from 'react'

function Header() {
  return (
    <div style={
    {
      backgroundColor:'red',
      display:'flex',
    }}>
      <h5>Advida</h5>
      <ul style={
    {
      listStyle:'none',
      
      display:'flex',
    }}>
        <li>Home</li>
        <li>About</li>
        <li>Contect Us</li>
      </ul>
    </div>
  )
}

export default Header