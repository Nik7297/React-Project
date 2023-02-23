import React ,{useContext, useState} from 'react'
import { CartContext } from './Main'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

function Cart() {
  const {cart, setCart} = useContext(CartContext)
  const [prize,setPrize] = useState(0)

    // console.log(cart)

  function removeitem(e,ind){
    e.preventDefault()
    console.log(ind)
    setCart(
    cart.filter((ed,id)=>{
      return(
        ind !== id
      )
    })
    )

    
    
  }

  if(cart.length==0){
    // console.log("yes")
    return(
      <div className='cartif'>
        <img src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'></img>
        <h1>Missing Cart items?</h1>
        <p> To see the items you previously items adde</p>
      </div>

    )
    
  }
  else{
    return (
    
      <div className='cartitemall'>
        
          
        
        {
      
          cart.map((get,index)=>{
            return(
              <div className='twodiv' key={index}>
                <div className='cartimgbox'>
                <img src={get.image}></img>
                </div>
                <div className='cartdetailbox'>
                <h3 className='cartdetailboxh3'>Price: $ {get.price}</h3>
                <p className='cartdetailboxp'>{get.title}</p>
                  </div>
  
                  <div ><a href='' className='btnremove' onClick={(e)=>removeitem(e,index)}><CloseTwoToneIcon /></a> </div>

                  
                </div>
            )
          })
          
        }

        {
        cart.map((priz,index)=>{
          // setPrize(
            console.log(priz)
          // [...prize,{priz.price}]


          // )
          return(
            <div>
             
              
              <h1>Total :{priz.price}</h1>
             
             
            
             </div>
            
          
          )
        })
        }
        
      </div>
    )
  }
  
  
  
}

export default Cart