import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contect from './About'
import Blog from './About'
import Service from './About'
import './Newweb.css'
const Mainpage = () => {


    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />}>
                    
                </Route>
                <Route path='/about' element={<About />}></Route>
                    <Route path='/contect' element={<Contect />}></Route>
                    <Route path='/blog' element={<Blog />}></Route>
                    <Route path='/service' element={<Service />}></Route>
                {/* <Route path='*' element={<Notfound />}></Route> */}

            </Routes>
        </BrowserRouter>

    )
}

export default Mainpage