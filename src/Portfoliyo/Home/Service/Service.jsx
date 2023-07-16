import React from 'react'
import './Service.css'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import MyModale from './Modal';
import { useState } from 'react';

function Service() {
    const [Popup, setPopup] = useState(false)

    const Callmodel =()=>{
        return (
            setPopup(false)
        )
        
    }
    // const MyModale = ()=> {
    //     return(
    //         <div className='Modal_box'>
    //         <div className='popup'>
    //         <h3 className='heading'>I knowe this service</h3>
    //         <button className='popup_btn' onClick={Callmodel}>close</button>
    //         </div>
    //     </div>
    //     )
    // }


    const service_data =[
        {
            heading:'UI/UX',
            logo_name:<DesignServicesIcon/>,
            
        },
        {
            heading:'Front-end Development',
            logo_name: <CodeIcon/>,
            
        },
        {
            heading:'Branding',
            logo_name:<BrushIcon/>,
            
        },
    ]


  return (
    <section>
        {/* <Modale></Modale> */}
        <h1 className='service_heading'>Services</h1>
        <div className='service_three_box'>

            {service_data.map((sarvice_dataPass,index)=>{
                return(
                    <div className='service-box' onClick={()=>setPopup(true)}>

                    <div className='service-data-wrapper'>
                    <div className='icon_text'>
                        <div className='icon_text_iconbox'>
                            <span className='service_ico'>{sarvice_dataPass.logo_name}</span>
                        </div>
                        <div className='icon_text_textbox'>
                            <p className='para'>{sarvice_dataPass.heading}</p>
                        </div>
                    </div>
            
                    <div className='modalButton'>
                        <p >Viwe more <span className='btn_arrow'><ArrowRightAltIcon/></span></p>
                    </div>
                    </div>
            
                    
                    </div>
                    
                )
            })
            }

      



        {/* second box


        <div className='service-box'>

        <div className='service-data-wrapper'>
        <div className='icon_text'>
            <div className='icon_text_iconbox'>
                <span className='service_ico'><CodeIcon/></span>
            </div>
            <div className='icon_text_textbox'>
                <p className='para'>Front-end<br/> Development</p>
            </div>
        </div>

        <div className='modalButton'>
            <p onClick={()=>setPopup(true)}>Viwe more <span className='btn_arrow'><ArrowRightAltIcon/></span></p>
            
        </div>
        </div>

        
        </div> */}

        {/* third box */}


        {/* <div className='service-box'>

        <div className='service-data-wrapper'>
        <div className='icon_text'>
            <div className='icon_text_iconbox'>
                <span className='service_ico'><BrushIcon/></span>
            </div>
            <div className='icon_text_textbox'>
                <p className='para'>Branding </p>
            </div>
        </div>

        <div className='modalButton'>
            <p onClick={()=>setPopup(true)}>Viwe more <span className='btn_arrow'><ArrowRightAltIcon/></span></p>
        </div>
        </div>

        
        </div> */}

    </div>
    {Popup && <MyModale Callmodel={Callmodel} />}
    </section>
  )
}

export default Service