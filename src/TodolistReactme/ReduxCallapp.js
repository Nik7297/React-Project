import React from 'react'
import { Provider } from "react-redux";
import storefile from "./store";
import App from "./App";


function Main() {
  return (
    
      //  <Provider store={storefile}>
        <App />
      // </Provider>
  )
}

export default Main