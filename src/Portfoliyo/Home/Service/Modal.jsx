import React from 'react'
import "./Modal.css"

const MyModale = ({Callmodel})=> {
    return(
        <div className='Modal_box'>
        <div className='popup'>
        <h3 className='heading'>I knowe this service</h3>
        <button className='popup_btn' onClick={Callmodel}>close</button>
        </div>
    </div>
    )
}

export default MyModale;