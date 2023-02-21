
import React, { useState } from 'react'
import RestoreFromTrashTwoToneIcon from '@mui/icons-material/RestoreFromTrashTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import BrushTwoToneIcon from '@mui/icons-material/BrushTwoTone';

function Todorepet() {
    let [inputvalue,inpFunction]=useState("")
    let [submitvalue,setsubmitTask] =useState([])

    function inputFunction(e){
        inpFunction(e.target.value)
        // console.log(e)

            
    }
    function submitFunction(e){
        e.preventDefault()
        setsubmitTask([...submitvalue,inputvalue])

        inpFunction('')
        

    }
    function doneI(e,id){
        e.preventDefault()
        // setsubmitTask(
        //     submitvalue.filter((pagl,jugad)=>{
        //     return(
        //       id!==jugad
        //     )
        //   })
    
        // )
    
       }

    function deleteI(e,index){
        e.preventDefault()
        setsubmitTask(submitvalue.filter((valu,id)=>{
            return(
                index!==id
                )

        })
        )


    }

  return (
    <div>
        <h1>To Do List</h1>
        <form onSubmit={submitFunction}>
            <input type="text"
            placeholder='Enter Today Task'
            value={inputvalue}
            onChange={inputFunction}>

            </input>
            <button>Add Task</button>
        </form>
        <div>
            <ul>{
            submitvalue.map((valueaae,index)=>{
                return(
                    <>
                   <li >{valueaae}
                   <a href='#' ><BrushTwoToneIcon /></a>
                   <a href='#' onClick={(e)=>{deleteI(e,index)}}><RestoreFromTrashTwoToneIcon /></a>
                   <a href='#' onClick={(e)=>{doneI(e,index)}}><DoneAllTwoToneIcon /></a></li>
                   
                   </>
                )
            })
        }
            </ul>
            
        </div>
    </div>
  )
}

export default Todorepet