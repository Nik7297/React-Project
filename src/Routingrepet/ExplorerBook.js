import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Blog() {
  let [data,setData] = useState([])
  
  
  
  useEffect(()=>{

    function fatchdata(){
      axios.get('https://openlibrary.org/subjects/love.json?limit=100')
      .then((responce)=>{
        setData(responce.data.works)
        console.log(responce.data.works)

      })

    }
    fatchdata()
    
  },[])

  return (
    <div className='datebox'>
      <div className='books'>Books</div>
    
    {
      
      data.map((aaya,index)=>{
        
        return(
          <div key={index}  className='hpimgbox'>
          <Link to={`/ExplorerBook/${aaya.cover_edition_key}`}>
            <img src={`https://covers.openlibrary.org/b/id/${aaya.cover_id}-L.jpg`}></img>
          </Link>
          <Link to={`/ExplorerBook/${aaya.cover_edition_key}`}><h1>{aaya.title}</h1></Link>
          <p><span className='by'>by </span>{aaya.authors[0].name}</p>
          
          
          </div>
        )
      })

    }
    </div>
  )
}

export default Blog