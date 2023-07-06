import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Singlepage from './Singlepage';
import Compare from './Compare';

function CompareMobile() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path='/'  element={<Header />}>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/singlepage' element={<Singlepage />}></Route>
      <Route path='/compare' element={<Compare />}></Route>
    </Route>
    </Routes>

    </BrowserRouter>
   
  )
}

export default CompareMobile