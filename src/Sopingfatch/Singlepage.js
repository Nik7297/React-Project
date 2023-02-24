import React from 'react'
import { useState,useEffect,useContext } from "react";
import axios from 'axios'
import { useParams,Link } from 'react-router-dom';
import { CartContext } from './Main';
function Singlepage() {
  const { cart, setCart } = useContext(CartContext)
const {id}=useParams()
const [Shopsingledata, Setsingledata] = useState('')

console.log(id)

function handleclick(e, id) {
  e.preventDefault()
  setCart([...cart, id])
  



}


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
         
         {(cart.find(aaya=>aaya.id === Shopsingledata.id)!== undefined) ? 
                        <h5>Added To Cart</h5> :
                            (<Link className='btn' to='product' onClick={(e) => handleclick(e,{
                                id:Shopsingledata.id,
                                title:Shopsingledata.title,
                                price:Shopsingledata.price,
                                image:Shopsingledata.image,


                            } )}>Add To Cart</Link>)
                        }
        {/* { (cart.includes(Shopsingledata.id)==true) ?<h5>Added to cart</h5> : (<a className='btn'onClick={(e) => handleclick(e, Shopsingledata.id)} href=''>Add To Cart</a>)
          } */}
                        
         
         </div>
    </div>
    
    
   
  )
}

export default Singlepage