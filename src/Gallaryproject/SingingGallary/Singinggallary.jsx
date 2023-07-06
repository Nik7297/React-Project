import React from 'react'
import './singinggallayStyle.css'

function SingingGallary() {
   const  SingingGallaryimg=[
        {
            img:'assets/GallaryImgStore/singing/img (1).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (2).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (3).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (4).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (5).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (5).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (5).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (5).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (5).jpg',
        },
        {
            img:'assets/GallaryImgStore/singing/img (5).jpg',
        },
        
    ]
  return (
   <div className='singing_gallary_wrapper'>
    {
        SingingGallaryimg.map((Singingimg,indx)=>(
            
                <div className='singing_imggallarybox' key={indx}>
                <img className='singing_img_tag' src={Singingimg.img}  />
                </div>
            
        ))
    }
    
   </div>
  )
}

export default SingingGallary;