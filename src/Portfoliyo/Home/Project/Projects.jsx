import React from 'react'
import './Projects.css'
import pic1 from '../../images/pexels-alleksana-4185948.jpg'
import pic2 from '../../images/pexels-alleksana-4185948.jpg'
import pic3 from '../../images/pexels-polina-zimmerman-3779082.jpg'
import pic4 from '../../images/pexels-startup-stock-photos-7059.jpg'
import pic5 from '../../images/poster_table.jpg'


function Projects() {
    const project = [
        {
            img_url:pic1,
            click_link:"dksfkdsk",
            title:'first',
            description:'lorem lorem lorem ',
        },
        {
            img_url:pic2,
            click_link:"dksfkdsk",
            title:'first',
            description:'lorem lorem lorem ',
        },
        {
            img_url:pic3,
            click_link:"dksfkdsk",
            title:'first',
            description:'lorem lorem lorem ',
        },
        {
            img_url:pic4,
            click_link:"dksfkdsk",
            title:'first',
            description:'lorem lorem lorem ',
        },
        {
            img_url:pic5,
            click_link:"dksfkdsk",
            title:'first',
            description:'lorem lorem lorem ',
        },
        
       
    ]
  return (
    <div className='project_wrapper'>
        <h1 className='heading'>Projects</h1>
        <div className='images_box'>
        {
            project.map((dataaaya,indx)=>{
                return(
                 <div className=''>

           <a key={indx} href="">
           <img src={dataaaya.img_url} alt="image" width={400} height={280}/>
           </a>
           <h4>{dataaaya.title}</h4>
           <p>{dataaaya.description}</p>
                 </div>   
                    
           
                    
                )
            })
        }
        </div>
       
    </div>
  )
}

export default Projects