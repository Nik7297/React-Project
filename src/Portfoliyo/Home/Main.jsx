import React from 'react'
import  './Main.css'
import Header from './Header'
import Poster from './Poster/Poster'
import About from './About/About'
import Qualificitionrouts from './Qualifications/Qualificationrouting/Qualify'
import Skill from './Skills/Skill'
import Service from './Service/Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './Contact/Contact'
import Projects from './Project/Projects'
function Main() {
  return (
    <div className='body'>
        <Header/>
        <Poster/>
        <About/>
        <Qualificitionrouts/>
        <Skill/>
        <Service/>
        <Projects/>
        <BrowserRouter>
            <Routes>
                
                    {/* <Route path='/' element={<Contact/>}></Route> */}
                    {/* <Route path='/about' element={<Skill/>}></Route> */}
                    <Route path='/contact' element={<Contact/>}></Route>
                    {/* <Route path='/blog' element={<Service/>}></Route> */}
                    
               
                   

            </Routes>
        </BrowserRouter>
        

    </div>
  )
}

export default Main