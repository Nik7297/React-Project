import React ,{useContext} from 'react'
import { CartContext } from './Main'

function Cart() {
  const {cart} = useContext(CartContext)
  
  return (
    <div className='cartitemall'>
      {
        cart.map((get)=>{
          return(
            <div className='twodiv'>
              <div className='cartimgbox'>
              <img src={get.image}></img>
              </div>
              <div className='cartdetailbox'>
              <h3 className='cartdetailboxh3'>Price: $ {get.price}</h3>
              <p className='cartdetailboxp'>{get.title}</p>
                </div>

                <div className='btnremove'>❌ </div>
              </div>
          )
        })
        
      }
    </div>
  )
}

export default Cart