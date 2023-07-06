import { useState } from 'react'

import React from 'react'

function Ravi() {
    // const [first, setfirst] = useState([
    //         name='ravi',
    //         title='angular devloper',
    //         lega='big land',
            


    // ])
    // first.map((v,i)=>{
    //         return(
    //         <div>{v.lega}</div>
    //         )
    //     })
  return (
    <div>Ravi
        {
        [
            {
                name:'ravi',
                title:'angular devloper',
                lega:'big land',
            },
            {
                name:'ravi',
                title:'angular devloper',
                lega:'marji ka ',
            },
            {
                name:'ravi',
                title:'angular devloper',
                lega:'jbrdasti de deya ',
            } ,
            {
                name:'ravi',
                title:'angular devloper',
                lega:'gand me de deya ',
            }
            


        ].map((v,i)=>{
            return(
            <div key={i}>{v.lega}</div>
            )
        })  
    }
    </div>
  )
}

export default Ravi