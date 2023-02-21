import { style } from '@mui/system'
import React from 'react'
import imglink from './Imglink';

import "./style.css"


function btnClick(){
  let viewportDiv =document.querySelector(".viweport")
// let imgboxes =document.querySelector(".imgboxes")
let header = document.querySelector(".header")
let start_button = document.querySelector(".start_button")

let time_number = document.querySelector(".time_number")
let  score_number= document.querySelector(".score_number")
let  select_img= document.querySelector(".select_img")

let pic = document.querySelectorAll(".select_img img")




start_button.style.display="none"
    select_img.style.display="block"
    let counter=1;
    let count_scor=1;
    let a=viewportDiv.clientHeight
    let b=viewportDiv.clientWidth

    
    for(let i=0;i<pic.length;i++){
      
    pic[i].onclick=()=>{
       
            
        select_img.style.display="none"
        header.style.display="block"
            setInterval(()=>{
        
            time_number.innerHTML=counter++;
            },1000);
            
            
                setInterval(()=>{
                    if(counter<=30){
            let h=Math.random()*(a)
            let j=Math.random()*(b)
            
            let imz = document.createElement("img")
            if(i==0){
                imz.setAttribute("src",`${imglink.first_img}`)
            }
            if(i==1){
                imz.setAttribute("src",`${imglink.second_img}`)
            }
            if(i==2){
                imz.setAttribute("src",`${imglink.third_img}`)
            }
            
    
    // imz.setAttribute("onclick","imgclick(this)")
    imz.classList.add("autocreatimg")
    viewportDiv.appendChild(imz)
    imz.style.top=h+'px'
    imz.style.left=j+'px'

    imz.onclick=()=>{
      imz.remove()
      score_number.innerHTML = count_scor++;

    }
}else{
    alert("Time Out....⏱\n"+"Your Score is..."+(count_scor-1))
    
}

        },600);

        }
    }
  
}

const Clickgame = () => {
  return (
    <div>

         <div class="start_button">
        <button onClick={btnClick}>Start</button>
    </div>

    <div class="select_img">
        <h1>plese select img & play Game....</h1>
        <img class="first_img" src={imglink.first_img} alt="kya yrr net be on kr l...." />
        <img class="second_img" src={imglink.second_img} alt="kya yrr net be on kr l...." />
        <img class="third_img" src={imglink.third_img} alt="kya yrr net be on kr l...." />

    </div>
    

    <div class="viweport">
        <div class="header">
            <span class="time">Time : <number class="time_number">0</number></span>
            <span>PLAY PaRTy....</span>
            <span>Score : <number class="score_number">0</number></span>
        </div>

       
        
    </div>
    </div>
  )
}

export default Clickgame