import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'


function Blog() {

    let [blog , setBlog] =useState([])
    useEffect(()=>{
        async function fatchdata(){
        let storedata = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setBlog(storedata.data)
        console.log(storedata.data)

        }
        fatchdata()
    },[])

  return (
    <>
    <h1>blog</h1>
    {
      blog.map((blogdata,index)=>{
        return(
        <div key={index}>
            <h1>{blogdata.id}</h1>
            <h1>{blogdata.title}</h1>
        </div>
        )
      })
    }













    {/* {
       blog.map((one,two)=>{
        return(
            <div key={two}>
                <h2>{one.id}</h2>
                <h3><Link to={`/blog/${two}`}> {one.title}</Link></h3>
                <p>{one.body}</p>
            </div>
        )
       })
    } */}
    </>
  )
}

export default Blog