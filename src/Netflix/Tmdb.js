// import { SecurityUpdateWarningOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import axios from 'axios'
import './Tmdb.css'

function Netflix() {

  let [inputvalue,setInput]=useState('')
  let [moviedata,setmovieData]=useState([])
  let first_path ='https://image.tmdb.org/t/p/original'
  
  let dummy_img ='https://www.lasff.com/uploads/2/6/7/4/26743637/poster-not-available_orig.jpg'

  function inputChang(e){
    setInput(e.target.value)
    // console.log(inputvalue)

  }

  function submitFunction(e){
    e.preventDefault()

    axios.get("https://api.themoviedb.org/3/search/movie?api_key=6f6e0cdaa0e6b248f081e1b02502e8bd&language=en-US&query="+inputvalue+"&page=1&include_adult=false")
    .then(function(responce){
      // console.log(responce.data.results)
      
      
      
      setmovieData(responce.data.results)
      console.log(moviedata)
      

     })
            
     setInput('')
  }


  return (
    <div className='inpbuttonbox'>
    <h1>TMDB Movie Data</h1>
    <form onSubmit={submitFunction}> 
      <input type='text'
      value={inputvalue}
      onChange={inputChang}>
      </input>
      <button type='submit' > Find</button>
    </form>

    {/* className={(complete.includes(index)) ? "giveclass" : " "} */}


    <div className='fulldata'>
      {
      moviedata.map((alldata,index)=>{
        return(
        <div className='fullbox' key={index}>
          {/* {
            if(alldata.poster_path == null){
              src={dummy_img}
            }else{
              src={first_path + alldata.poster_path}
            }
            {(alldata.poster_path ==null)? first_path + alldata.poster_path : dummy_img}
          } */}
          <img src={(alldata.poster_path === null || undefined) ? dummy_img  : first_path + alldata.poster_path  }></img>
          <h5>{alldata.title}</h5>
          </div>
        )
      })
    }
  </div>

    </div>



  //  <>
  //  <form>
  //   <input type='text'
  //   placeholder='Enter Movie Name....'
  //   value={inputvalue}
  //   onClick={inputChange}
  //   >
  //   </input>
  //   <button> Find</button>
  //   </form>
  //   </>
  )
}

export default Netflix