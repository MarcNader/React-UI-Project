import "./assets.styles.scss"
import Car from "../../assets/car.svg"
import AssetsGraphChart from "../../Components/Assets-BarChart/assetsgraphchart.component"
import NotiesIcon from "../../assets/Noties.svg"
import { useState } from "react"
import Sensor from "../../Components/Sensor Item/sensor.component"
const Assets = ()=> {
    const AssetsGraphData = [
        {
          name: "12/9",
          uv: 200,
      
        },
        {
          name: "12/9",
          uv: 240,

        },
        {
          name: "12/9",
          uv: 270,
      
     
        },
        {
          name:"12/9",
          uv: 340,
       

        },
        {
          name: "12/9",
          uv: 330,
     
  
        },
        {
          name: "12/9",
          uv: 370,
   
        },
        {
          name: "12/9",
          uv: 270,


        },
        {
            name:"12/9",
            uv: 280,
          
  
          },
          {
            name:"12/9",
            uv: 310,
          
  
          },
          {
            name:"12/9",
            uv: 340,
          
  
          },
          {
            name:"12/9",
            uv: 500,
          
  
          },
          {
            name:"12/9",
            uv: 500,
          
  
          },
      ];

      const sensors= [
        {
            Title: "Asset-Fuel Consumed(10)",
            id:1,

        },
        {
            Title: "Asset-Odometer (km)",
            id:2,

        },
        {
            Title: "Asset-Runtime (km)",
            id:3,
        },
        {
            Title: "Asset-Speed (hr)",
            id:4,
        },
        {
            Title: "Engine Temperature (deg C)",
            id:5,
        },
    ]
 
     
    return (

        
        <div className="booking-container container"> 

                    <h2 className="ps-4 py-3">Assets</h2>

         <div className="main-part">

            {/* First Part  */}

            <div className="booking-car">
                
                <div className="container mt-3">
                        
                    <div className="row ">

                        <div className="col-md-6 justify-content-center">
                            <img src={Car} alt=""  className="threeD-car"/>
                            <h6 id="hello"> Fuel Usage</h6>
                            <h6 className="text-light" > 2000 Ltr</h6>

                        
                        </div>

                        <div className="col-md-6 ps-4 justify-content-center">

                        <h6 id="hello"> Km Driven</h6>
                        <h6 className="text-light" > 120 00 km</h6>


                        </div>


                    </div>
                            <div className="row mt-3 ">

        <div className="col-md-6 justify-content-center">
            
            <h6 id="hello">Total Cost</h6>
            <h6 className="text-light" > 3,500,900$</h6>


        </div>

        <div className="col-md-6 ps-4 justify-content-center">

        <h6 id="hello"> Top Speed</h6>
        <h6 className="text-light" > 100 miles/hr</h6>


        </div>


        </div>

                </div>
                

            </div>


            {/* Second Part  */}

            <div className="booking-part2">

                <div className="first-row">
                    
                   <AssetsGraphChart data={AssetsGraphData}/>
                
                </div>

                <div className="second-row"> 
                        <div className="noties">
                            <img src={NotiesIcon} alt="" />
                        </div>
                        <div className="available-sensors">

                            <div className="container">

                                    <h4 className="my-4">Available Sensors</h4>
                                    <hr />

                                    <div> 
                                    {sensors.map((sensor) => (
                                        <Sensor key={sensor.id} sensors={sensor}/> 
                                        ))}
                                        <button className="button">See All</button>
                                    </div>

                            </div>

                        </div>

                </div>

                <div className="third-row">
                        
                        <h1>HIIII</h1>

                </div>



            </div>
        </div>
        </div>



)

}

export default Assets