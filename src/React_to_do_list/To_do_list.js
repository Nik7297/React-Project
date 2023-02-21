import React, { useState } from 'react'
import RestoreFromTrashTwoToneIcon from '@mui/icons-material/RestoreFromTrashTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import BrushTwoToneIcon from '@mui/icons-material/BrushTwoTone';
import './Todo.css'
function To_do_list(){


    let [inputvalue,inputfunc] = useState('')
    let [taskvalue,setTask] =useState([])

    let [editvalue,editFunction] =useState(false)

    let [complete, setComplete] = useState([])

    // let [line,setLine] = useState(false)
    
   function inputChange(e){
    inputfunc(e.target.value)
    // console.log(inputvalue)

   }

   function formsubmit(e){
    e.preventDefault()
    if(editvalue === false){
    setTask([...taskvalue,inputvalue])
    }
    else{
    taskvalue[editvalue] = inputvalue
    editFunction(true)
    }

    inputfunc('')



   }

   function editI(e,index){
    e.preventDefault()
    inputfunc(taskvalue[index])
    editFunction(index)
  

   }

   function doneI(e,index){
    e.preventDefault()
    setComplete([...complete, index])
    console.log(complete)
    // setLine(true)

   }

  // function checkIcon(e,kuchbe){
  //   e.preventDefault()
  //   setTask()
  // }

   function deleteIcon(e,index){
    e.preventDefault()
    setTask(
      taskvalue.filter( (nouse,position)=>{
        return(
          index!==position
          
        )
      
      })

    )

   }

   function Autodiv(){
    return (
      <div>
        <ul className='unorder_list'>{
          taskvalue.map((tasks,index)=>{
            return(
              <li key={index}
              // style ={{textDecoration : line ? "line-through" : " "}}
              className={(complete.includes(index)) ? "giveclass" : " "}
              //   {if(complete.includes(index)){
              //      className="giveclass"
              //   }else{
              //      className{" "}
              //   }
              // }
              
              >
                {tasks}
                <span className='ancr'>
                <a href='#' onClick={(e)=>{doneI(e,index)}}><DoneAllTwoToneIcon></DoneAllTwoToneIcon></a>
                <a href='#' onClick={(e)=>{editI(e,index)}}><BrushTwoToneIcon></BrushTwoToneIcon></a>
                <a href='#' onClick={(e)=>{deleteIcon(e,index)}}><RestoreFromTrashTwoToneIcon/></a>
                </span>
              </li>
            )
          })
          
        }
        </ul>
      </div>
    )
   }



    
  return (
    <div className='todo_box'>
        <h4>To do list</h4>
        <form onSubmit={formsubmit}>
            <input type='text'
            placeholder='Enter the task'
            value={inputvalue}
            onChange={inputChange}
            >
            </input>

            <button type='submit'>
                Add Task

            </button>
        </form>
        <Autodiv/>
      
    </div>

  )
}

export default To_do_list

