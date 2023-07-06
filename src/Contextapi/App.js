import React, { createContext } from 'react'
import ComA from './ComA'

 const Fname =createContext(); 
 const Lname =createContext(); 

function App() {
  return (
   <>
    <Fname.Provider value={'bhawani'}>
    <Lname.Provider value={'Kumawat'}>
        <ComA />

    </Lname.Provider>
    </Fname.Provider>
    </>
    
  )
}

export default App;
export {Fname,Lname};