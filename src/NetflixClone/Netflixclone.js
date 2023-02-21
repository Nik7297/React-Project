import React from 'react'
import requests from './Netflixapi'
import Datacall from './Netflixcall'

function Netflixclone() {
  return (
    <div className='netflixclone'>

        <Datacall 
         heading="Trending"
         callData={requests.fetchTrending} 
         />
        <Datacall 
        heading="Netflix Originals"
        callData={requests.fetchNetflixOriginals}/>
        <Datacall 
        heading="Top Rated"
        callData={requests.fetchTopRated}/>
        <Datacall 
        heading="Action Movies"
        callData={requests.fetchActionMovies}/>
        <Datacall 
        heading="Comedy Movies"
        callData={requests.fetchComedyMovies}/>
        <Datacall 
        heading="Horror Movies"
        callData={requests.fetchHorrorMovies}/>
        <Datacall 
        heading="Romance Movies"
        callData={requests.fetchRomanceMovies}/>
        <Datacall 
        heading="Documentaries"
        callData={requests.fetchDocumentaries}/>


    </div>
  )
}

export default Netflixclone