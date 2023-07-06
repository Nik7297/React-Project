import React from 'react'
import  './Main.css'
import Header from './Header'
import Poster from './Poster/Poster'
import About from './About/About'
import Qualificitionrouts from './Qualifications/Qualificationrouting/Qualify'
import Skill from './Skills/Skill'
import Service from './Service/Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <div className='body'>
        <Header/>
        <Poster/>
        <About/>
        <Qualificitionrouts/>
        <Skill/>
        <Service/>
        {/* <BrowserRouter>
            <Routes>
                
                    <Route path='/about' element={<Skill/>}></Route>
                    <Route path='/blog' element={<Service/>}></Route>
                    
               
                   

            </Routes>
        </BrowserRouter> */}
        

    </div>
  )
}

export default Main