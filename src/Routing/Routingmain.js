import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contect from './Contect';
import Service from './Service';
import Notfound from './Notfound'
import SingleBlog from './SingleBlog';

function Routingmain() {
    return (

        <BrowserRouter>
            <Routes>
                <Route  element={<Home />}>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/blog' element={<Blog />}></Route>
                    <Route path='/blog/:id' element={<SingleBlog />}></Route>
                    <Route path='/contect' element={<Contect />}></Route>
                    <Route path='/service' element={<Service />}></Route>
                </Route>
                    <Route path='*' element={<Notfound />}></Route>

            </Routes>
        </BrowserRouter>

    )
}

export default Routingmain;