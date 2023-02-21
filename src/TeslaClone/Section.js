import React from 'react'

function Section(props) {
  return (
    <section className="content" style={{backgroundImage:`url('teslaimages/${props.imgchange}')`}}>
            <section className="modelname">
                <h1>{props.name}</h1>
                <a href="">{props.text}</a>

            </section>
            <section className="btn">
                <span className="ancorbtn">
                <a className='leftarrow' href="#">{props.leftbtn}</a>
                {props.rightbtn && <a className='rightarrow' href="#"> {props.rightbtn}</a>}
                </span>



                <div className='arrowbox'>
                {props.ico && <img src="teslaimages/down-arrow.svg"></img>}
                </div>

            </section>

            
            
        </section>
  )
}

export default Section