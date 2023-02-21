import React from "react";
import "./Home.css"
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";


function Home() {
    return (
        <>

        <Header></Header>
       
        <Section
         name="Model Y "
         text="Schedule a Demo Drive"
         leftbtn="coustom order"
         rightbtn="View Inventory"
         ico={true}
         imgchange="model-y.jpg"
         
         ></Section>
        
        <Section
         name="Model 3 "
         text="Schedule a Demo Drive"
         leftbtn="coustom order"
         rightbtn="View Inventory"
         imgchange="model-3.jpg"
         
         ></Section>

        <Section
         name="Model S "
         text="Schedule a Demo Drive"
         leftbtn="coustom order"
         rightbtn="View Inventory"
         imgchange="model-s.jpg"
         ></Section>

        <Section
         name="Model X "
         text="Schedule a Demo Drive"
         leftbtn="coustom order"
         rightbtn="View Inventory"
         imgchange="model-x.jpg"
         ></Section>

        <Section
         name="Solar Panels "
         text="Lowest Cost Solar Panels in America"
         leftbtn="Order Now"
         rightbtn="Learn More"
         imgchange="solar-panel.jpg"
         ></Section>
                    
        <Section
         name="Solar Roof"
         text="Produce Clean Energy From Your Roof"
         leftbtn="Order Now"
         rightbtn="Learn More"
         imgchange="solar-roof.jpg"
         ></Section>

        <Section
         name="Accessories"
         
         leftbtn="Shop Now"
         imgchange="Accessories.jpg"
         ></Section>
        
        
        <Footer></Footer>
      
              
        </>
    )
}

export default Home