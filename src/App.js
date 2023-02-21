import { useState } from "react";
import Home from "./TeslaClone/home";



function Counter() {
    let [importvalue,setCount] = useState(0)
    
        function IncrimentCounter(e,change){
            e.preventDefault()

            change==="inc"
            importvalue>20?setCount(importvalue + 1)
            :setCount(importvalue - 1);

            // if(change==='inc'){
            //     setCount(importvalue+1)
            // } else{
            //     setCount(importvalue-1) 
            // }

        }
            
        //     if(importvalue<20) 
        //     setCount(importvalue + 1)
        // }
        // function DicrimentCounter(e){
        //     e.preventDefault()
        //     if(importvalue>0)
        //     setCount(importvalue - 1)
        // }



// function Counter() {
//     let [importvalue ,setCount] =useState(0)

//    function IncrimentCounter(e,chang){

//    }





return(
            <>
                <a href="" onClick={(e) => IncrimentCounter(e,"inc")}>Incriment</a>
                <p>{importvalue}</p>
                <a href="" onClick={(e) => IncrimentCounter(e,"dec")}>Dicriment</a>
            </>
        )


}

export default Counter





















// import { useState } from "react";

// function Counter() {
//     const [Count,setCount] = useState(0)
//     function IncrimentCounter(){
//         if(Count<20) 
//         setCount(Count + 1)
//     }
//     function DicrimentCounter(){
//         if(Count>0)
//         setCount(Count - 1)
//     }

//     return(
//         <>
//             <button onClick={IncrimentCounter}>Incriment</button>
//             <p>{Count}</p>
//             <button onClick={DicrimentCounter}>Dicriment</button>
//         </>
//     )
// }

// export default Counter

























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
