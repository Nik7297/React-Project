import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

function SingleBlog() {
    let [post ,setpost] = useState('')
    let {id} = useParams()
    useEffect(()=>{
        async function result(){
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts/" +id)
            setpost(response.data)
            console.log(response.data)
            }
            result()
    },[])
   
  return (
   <h1 >{post.title}</h1>
  )
}

export default SingleBlog