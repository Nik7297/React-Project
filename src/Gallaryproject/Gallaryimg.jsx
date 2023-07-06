import React from "react";
import './GallaryStyle.css'
import {useNavigate,Outlet} from "react-router-dom"

function GridExample() {
  const navigate = useNavigate();

  const gallary = [
    {
      img:'assets/GallaryImgStore/Dance/img (15).jpg',
      title:'Dance',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      functionPath:"/dancegallary",
    },
    {
      img:'assets/GallaryImgStore/singing/img (5).jpg',
      title:'singing',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      functionPath:'/singinggallary'
    },
    {
      img:'assets/GallaryImgStore/singing/img (5).jpg',
      title:'singing',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      functionPath:'/singinggallary'
    },
    
  ]
  
  return (
    <>
    <div className="gallary_store_box">
      {gallary.map((gallaryimg, idx) => (
        <div key={idx}>
          {/* <div className="img_title_des_box"> */}
          <div className="img_title_des_box" onClick={()=>navigate(`${gallaryimg.functionPath}`)}>
            <img className="img_dance" variant="top" src={gallaryimg.img} />
            <div className="title_pera">
              <h3>{gallaryimg.title}</h3>
              <p>
               {gallaryimg.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    {/* <Outlet/> */}
    </>
  );
}

export default GridExample;