import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react";
import { useContext } from 'react'
import { CartContext } from './Main';
import { Link } from 'react-router-dom';


function Home() {
    const { cart } = useContext(CartContext)
    const [Shopdata, Setdata] = useState([])
     const {handleclick} = useContext(CartContext)
     


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then((response) => {
                Setdata(response.data)
                // console.log(response.data)
            })


    }, [])


    // function handleclick(e, id) {
    //     e.preventDefault()
    //     setCart([...cart, id])
    //     console.log(cart)

    //     // Setdatafanc([...AddedtoCart,title])
    //     // Setdatafancimg([...AddtoImg,image])
    //     console.log(AddedtoCart)


    // }







    return (
        <div className='box'>
            {Shopdata.map((item, index) => {
                return (
                    <div className='itembox' key={index} >
                        <Link className='redirtsingle' to={`products/${item.id}`} >
                            <img src={item.image}></img>
                            <h3>$ {item.price}</h3>
                            {/* <h3>{item.category}</h3> */}
                            <p>{item.title}</p>
                        </Link>
                        {(cart.find(aaya=>aaya.id === item.id)!== undefined) ? 
                        <h5>Added To Cart</h5> :
                            (<Link className='btn' to='product' onClick={(e) => handleclick(e,{
                                id:item.id,
                                title:item.title,
                                price:item.price,
                                image:item.image,


                            } )}>Add To Cart</Link>)
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Home