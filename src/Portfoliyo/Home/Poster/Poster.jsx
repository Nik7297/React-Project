import React from 'react'
import './PosterStyle.css'
import PosterImg from '../../images/poster_table.jpg'



function Poster() {
  return (
    <section className='Poster_box'>
       <div className='poster_img'> <img src={PosterImg}></img></div>

       <div className='poster_text'>
        <h1 className='heading1'>Hi!!</h1>
        <p className='parafirst '>I'm <span className='typing_demo p_font'>Nitesh Kumar Kumawat</span></p>
        <p className='paralast p_font'>Frontend Developer</p>


       </div>

    </section>
  )
}

export default Poster