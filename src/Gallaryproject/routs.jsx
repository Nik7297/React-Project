import React from 'react'
import Gallary from './Gallaryimg'
import DanceGallary from './DanceGallary/Dancegallary'
import Singinggallary from './SingingGallary/Singinggallary'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function routs() {
  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Gallary/>}></Route>
        <Route path='/dancegallary' element={<DanceGallary/>}></Route>
        <Route path='/singinggallary' element={<Singinggallary/>}></Route>

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default routs;