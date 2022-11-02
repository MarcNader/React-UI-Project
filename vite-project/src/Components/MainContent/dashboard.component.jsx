import "./dashboard.styles.scss"

import Lightning from "../../assets/Car Dashboard/energy.svg"
import Arrow from    "../../assets/Car Dashboard/arrow.svg"
import WaterDrop from  "../../assets/Car Dashboard/waterdrop.svg"
import TireWear from  "../../assets/Car Dashboard/tirewear.svg"

import BarCharts from "../BarChart/barchart.component"


import FirstCar from "../../assets/Part Three/Frame 31.png"
import SecondCar from "../../assets/Part Three/Frame 32.png"
import ThirdCar from "../../assets/Part Three/Frame 33.png"

import Cardchart from "../CardCharts/Cardchart.component"
import GraphicChart from "../GraphicChart/graphicchart.component"


const DashBoard = () => {

    // const CardsData = [
    //     {
    //         title:"Energy",
    //         percentage: "45",
    //         value: "45",
    //         logo: {Lightning},
    //         Class: "energy",
    //         id:1,
    //         dy:10,
    //         dx:-22,
    //     },
    //     {
    //         title:"Range",
    //         percentage: "157k",
    //         value: "45",
    //         logo: {Arrow},
    //         Class: "range",
    //         id:2,
    //     },
    //     {
    //         title:"Range",
    //         percentage: "45",
    //         value: "45",
    //         logo: {Lightning},
    //         Class: "energy",
    //         id:3,
    //     },
    //     {
    //         title:"Energy",
    //         percentage: "45",
    //         value: "45",
    //         logo: {Lightning},
    //         Class: "energy",
    //         id:4,
    //     },


    // ]

    const DashboardData = [
        {
          name: "7 am",
          uv: 100,
      
        },
        {
          name: "9 am",
          uv: 400,

        },
        {
          name: "11 am",
          uv: 700,
      
     
        },
        {
          name: "1 pm",
          uv: 400,
       

        },
        {
          name: "3 pm",
          uv: 500,
     
  
        },
        {
          name: "5 pm",
          uv: 300,
   
        },
        {
          name: "7 pm",
          uv: 600,


        },
        {
            name: "9 pm",
            uv: 500,
          
  
          },
      ];
    return (

        <div className="main-section">
                
                <div className="part-one">
                {/* {CardsData.map(element=> {
                    console.log(element.title);
                   return( <Cardchart key={element.id} title={element.title} percentage={element.percentage} value={element.value} logo={element.logo} Class={"energy"} dy={10} dx={-22}/>
                )})} */}
                    <Cardchart title={"Energy"} percentage={"45"}value={"45"} logo={Lightning} Class={"energy"} dy={10} dx={-22}/>
                    <Cardchart title={"Range"} percentage={"157k"} value={"45"} logo={Arrow} Class={"range"}dy={10} dx={-40}/>
                    <Cardchart title={"Break Fluid"} percentage={"9"} value={"9"} logo={WaterDrop} Class={"break-fluid"}dy={10} dx={-17}/>
                    <Cardchart title={"Tire Wear"} percentage={"25"} value={"25"} logo={TireWear} Class={"tire-wear"}dy={10} dx={-22}/>
                </div>

                <div className="part-two"> 

                <BarCharts/>

                <GraphicChart data={DashboardData} />
               

                
                </div>
                <div className="part-three">

                    <img src={FirstCar} alt="" />
                    <img src={SecondCar} alt="" />
                    <img src={ThirdCar} alt="" />


                </div>
            



         </div>
    )
}
export default DashBoard