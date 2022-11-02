
import "./Cardchart.styles.scss"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";



 const Cardchart = ({title, percentage, logo, Class,value,dy,dx}) => {
   
     const Dict = {
         "Energy": "#B37EFC",
         "Range": "#FF7E86",
         "Break Fluid": "#9747FF",
         "Tire Wear": "#F6CC0D",
        };
        console.log(Dict[title]);

        return (
   

    <div className="chartcard">

        <div className="container">
           <div className="logo"><img src={logo} alt="" className="logo-background"  /> </div> 
            <h5 className={Class}>{title}</h5>
        <CircularProgressbar
          value={value}
          text={<tspan dy={dy} dx={dx}>{percentage}%</tspan>}
          styles={
            buildStyles({
            pathColor: Dict[title],
            textColor: "white",
            trailColor: "white",
            textSize: "1.7em",
          })}
        />
        </div>
        
    </div>
   
  )
}

export default Cardchart