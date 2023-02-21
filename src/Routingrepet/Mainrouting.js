import React from 'react'
import { Route, Routes, BrowserRouter, NavLink } from 'react-router-dom'
import Home from './Home'
import Trending from './Trending.js'
import ExplorerBook from './ExplorerBook.js'
import Lists from './Lists.js'
import Collections from './Collections.js'
import Blog from './Blog'
import Contact from './Contact'
import Singledata from './Singledata.js'
import Notfind from './Notfind'
import Book from './Book'


function Mainrouting() {
  return (
    <BrowserRouter>
      {/* <NavLink to={'/home'}>Home</NavLink>
    <NavLink to={'/Contact'}>Contect</NavLink>
    <NavLink to={'/Blog'}>Blog</NavLink> */}
      <Routes>
        {/* <Route path='/' element={<Home/>}> */}
        <Route path='/' element={<Home />}>
          <Route path='/Trending' element={<Trending />}></Route>
          <Route path='/ExplorerBook' element={<Book />}>
            <Route index element={<ExplorerBook />} ></Route>

            <Route path=':id' element={<Singledata />}></Route>
          </Route>
          <Route path='/Lists' element={<Lists />}></Route>
          <Route path='/Collections' element={<Collections />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='*' element={<Notfind />}></Route>
        </Route>

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Mainrouting;