import React from 'react'
import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Singledata() {
    let [data,setData] = useState('')
    let {id} = useParams()
  
  
  useEffect(()=>{

    function fatchdata(){
      axios.get('https://openlibrary.org/books/'+id+'.json')
      .then((responce)=>{
        setData(responce.data)
        console.log(responce.data)

      })

    }
    fatchdata()
    
  },[])
  return (
    <div className='siglebook'>
        <div className='imgone'>
        <img src={`https://covers.openlibrary.org/b/id/${data.covers}-M.jpg`}></img>
        </div>
        
        <div className='hpone'>
        <h1>title : {data.title}</h1>
        <p><span className='first'>publish places</span> : {data.publish_places}</p>
        <p><span className='first'>by statement </span>: {data.by_statement}</p>
        <p><span className='first'>publishers</span> : {data.publishers}</p>
        <p><span className='first'>publish date </span>: {data.publish_date}</p>
        <p><span className='first'>Number of pages</span> : {data.number_of_pages}</p>
        <p><span className='first'>latest revision</span> : {data.latest_revision}</p>
        {/* <p><span className='first'>contributions</span> : {data.contributions}</p> */}
        </div>
    </div>
  )
}

export default Singledata