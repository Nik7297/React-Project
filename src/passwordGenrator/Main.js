import React, { useState } from 'react'

function Main() {
    let [inputvalue,inpFunction]=useState("")

    function inputFunction(e){
        inpFunction(e.target.value)
        console.log(e.target.value)

            
    }


  return (
    <div>
        
        <form>
        <input  type='text' placeholder='password Genrat'
        ></input>
        <div><h5>Password Lenght</h5><input type={'number'}
        value={inputvalue}
        onChange={inputFunction}></input></div>
        <div><h5>Add UpperCase Letter</h5><input type={'checkbox'}></input></div>
        <div><h5>Add LowerCase Letter</h5><input type={'checkbox'}></input></div>
        <div><h5>Include Number</h5><input type={'checkbox'}></input></div>
        <div><h5>Include Symbole</h5><input type={'checkbox'}></input></div>
        <button type='submit'> Genrate password</button>
        </form>
    </div>
  )
}

export default Main