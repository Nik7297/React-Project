import React from 'react'
import './Dancegallary.css'

function Dancegallary() {
   const  Dancegallaryimg=[
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/Dance/img (1).jpg',
        },
    ]
  return (
   <div className='dance_gallary_wrapper'>
    {
        Dancegallaryimg.map((dgallaryimg,indx)=>(
            
                <div className='imggallarybox' key={indx}>
                <img className='img_tag' src={dgallaryimg.img}  />
                </div>
            
        ))
    }
    
   </div>
  )
}

export default Dancegallary