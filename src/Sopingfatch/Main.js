import React, { useState,createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Header from './Header'
import About from './Home'
import Contect from './Home'
import Cart from './Cart'
import './Style.css'
import Singlepage from './Singlepage';



export const CartContext=createContext({})

function Main() {
  const[cart,setCart]=useState([])

  return (
  <CartContext.Provider value={{cart,setCart}} >
    <BrowserRouter>
            <Header/>
            <Routes>
                
                <Route path='/' element={<Home />}></Route>
                <Route path='/products/:id' element={<Singlepage/>}></Route>
                <Route path='/contect' element={<Contect />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
               

            </Routes>
        </BrowserRouter>
        </CartContext.Provider>
  )
}

export default Main