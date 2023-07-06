import React from 'react'
import {createServer} from "miragejs"

function Singlepage() {

  createServer({
    routes() {
      this.namespace = "api"
  
      this.get("/movies", () => {
        return {
          movies: [
            { id: 1, name: "Inception", year: 2010 },
            { id: 2, name: "Interstellar", year: 2014 },
            { id: 3, name: "Dunkirk", year: 2017 },
          ],
        }
      })
    },
  })




  return (
    <div>Singlepage</div>
  )
}

export default Singlepage