import { useState } from "react";
import "./sensor.styles.scss"

const Sensor = ({sensors})=> {
        const {Title}=sensors;
    const [checked, setchecked]=useState(false);
      
    const ChangeHandler=()=>{
      return setchecked(!checked)

    }

    return (    

            <div>
              
                
                  
                    <div className="checkbox-span mb-2" >
                        
                 <input type="checkbox"  className="checkbox"  onChange={ChangeHandler}  value=""/>
                  <span style={checked ? { color: "#FF6370" } : {}}>{Title}</span>

                  </div>  

                  
            

            </div>


    )


}

export default Sensor