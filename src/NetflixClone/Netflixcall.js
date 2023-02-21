import axios from 'axios'
import React ,{ useState,useEffect }from 'react'
import './Netflixclone.css'


function Datacall(props) {
    // console.log(props)
    const [movies,setMoviedata] = useState([])
    let first_path_image ='https://image.tmdb.org/t/p/original'
    let first_path_data ='https://api.themoviedb.org/3/'

    useEffect(()=>{
      async function fetchData(){
        let result =await axios.get(first_path_data+props.callData)
        console.log(result.data.results)
        setMoviedata(result.data.results)
        
      }
      fetchData()
    },[])



  return (
    <div className='box'>
    <h2>{props.heading}</h2>
    <div className='boximage'>

    {
      movies.map((movie,index)=>{
        return(
          <img src={first_path_image+movie.poster_path} key={index}></img>
        )
      })
    
    }
    </div>
    </div>
  )
}

export default Datacall;