import React from 'react'
import { Fname,Lname } from './App'

function ComC() {
  return (
    <>
   
    <Lname.Consumer>{
    (lname)=>{
        return(
            <Fname.Consumer>{
              (fname)=>{
                return(
                    <>
                    <div><h1>My name is {fname} {lname}</h1></div>
                    </>
                )
            }}</Fname.Consumer>

        )
    }}</Lname.Consumer>
    </>
  )
}

export default ComC;