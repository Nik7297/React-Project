import React from 'react'
import { useState,useEffect } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Singlepage() {
const {id}=useParams()
const [Shopsingledata, Setsingledata] = useState('')
useEffect(() => {
    axios.get('https://fakestoreapi.com/products/'+id)
    .then((response)=>{
        Setsingledata(response.data)
        console.log(response.data)
    })

  
}, [])

  return (
    
        <div className='page'>
         <div className='image'>
         <img src={Shopsingledata.image}></img>
         </div>
         <div className='datile'>
         <h2>Price : $ {Shopsingledata.price}</h2>
         <h2>{Shopsingledata.title}</h2>
         <p>{Shopsingledata.description}</p>
         <a className='btn' href=''>Add To Cart</a>
         </div>
    </div>
    
    
   
  )
}

export default Singlepage