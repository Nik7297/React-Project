import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Blog() {
  // let [data,setData] = useState([])
  
  // useEffect(()=>{

  //   function fatchdata(){
  //     axios.get('https://openlibrary.org/subjects/love.json?limit=100')
  //     .then((responce)=>{
  //       setData(responce.data.works)
  //       console.log(responce.data.works)

  //     })

  //   }
  //   fatchdata()
    
  // },[])

  return (
    <div className='datebox'>
    <div className='books'>Blog</div>
    {/* {
      data.map((aaya,index)=>{
        return(
          <div key={index}  className='hpimgbox'>
          <h1>{aaya.title}</h1>
          <p>{aaya.authors[0].name}</p>
          <img src={`https://covers.openlibrary.org/b/id/${aaya.cover_id}-L.jpg`}></img>
          
          
          </div>
        )
      })

    } */}
    </div>
  )
}

export default Blog