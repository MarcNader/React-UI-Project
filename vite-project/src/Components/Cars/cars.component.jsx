import "./cars.styles.scss"
import Person from "../../assets/Cars List/person icon.svg"
import Reload from "../../assets/Cars List/reload.svg"
import Heart from "../../assets/Cars List/Heart.svg"
import Favorite from "../../assets/Cars List/Favorite.svg"
import { useState } from "react"

const Cars= ({cars})=> {

    const [check,setcheck]=useState(false)
    return (

        <div className="container car-component">
            
            <div className="car-title">
            <h5>{cars.Name}</h5>
            <img src={(cars.fav ? Favorite : Heart)}  onClick={() => {
             cars.fav= !cars.fav;
             setcheck(!check);
          }} />
                 </div>

            <div className="car-component-image">

                <img src={cars.Image} alt="" className="car-img"  />
                </div>

               <div className="Car-component-footer">

                <div>  
                <img src={Person} alt="" />
               {cars.Passengers}
               <img src={Reload} alt="" />
               Manual </div>
              

               <div> 400$/d </div>
                </div> 


            </div>



       



    )
}
export default Cars