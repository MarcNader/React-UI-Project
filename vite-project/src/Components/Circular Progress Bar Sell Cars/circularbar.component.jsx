import "./circularbar.styles.scss"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const CircularBar = () => {
    const percentage="44%";
    return (
      
     <CircularProgressbar
       value={44}
       text={<tspan dy={10} dx={-22}>{percentage}</tspan>}
       styles={
         buildStyles({
         pathColor: "green",
         textColor: "black",
         trailColor: "white",
         textSize: "1.7em",
       })}
     />
    
    )
}

export default CircularBar