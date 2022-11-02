import "./booking.styles.scss"
import Cars from "../../Components/Cars/cars.component"
import Volvo1 from "../../assets/Cars List/Volvo1.svg"
import Volvo2 from "../../assets/Cars List/Volvo2.svg"
import Volvo3 from "../../assets/Cars List/Volvo3.svg"

import Audi1 from "../../assets/Cars List/Audi1.svg"
import Audi2 from "../../assets/Cars List/Audi1.svg"
import Audi3 from "../../assets/Cars List/Audi1.svg"

import Opel1 from "../../assets/Cars List/Opel1.svg"
import Opel2 from "../../assets/Cars List/Opel2.svg"
import Opel3 from "../../assets/Cars List/Opel3.svg"

// import SearchBox from "../../Components/Search-Box/search-box.component"
import { useEffect, useState } from "react"




const Booking = () => {

    const CarsList=[
            
        {
            Name: "Volvo XC40",
            id:1,
            fav:false,
            Passengers: 4,
            Image:Volvo1,

        },

        {
            Name: "Volvo XC60",
            id:2,
            fav:false,
            Passengers: 4,
            Image:Volvo2,


        },
        {
            Name: "Volvo S90",
            id:3,
            fav:false,
            Passengers: 4,
            Image:Volvo3,


        },
        {
            Name: "Opel Manta GSe",
            id:4,
            fav:false,
            Passengers: 2,
            Image:Opel1,

           

        },
        {
            Name: "Opel Corse Sedan",
            id:5,
            fav:false,
            Passengers: 4,
            Image:Opel3,


        },
        {
            Name: "Opel Astra ",
            id:6,
            fav:false,
            Passengers: 4,
            Image:Opel3,


        },
      
        {
            Name: "Audi A5/S5",
            id:7,
            fav:false,
            Passengers: 4,
            Image:Audi1,

        },
        {
            Name: "Audi Q7",
            id:8,
            fav:false,
            Passengers: 4,
            Image:Audi2,

        },

        {
            Name: "Audi A7",
            id:9,
            fav:false,
            Passengers: 4,
            Image:Audi3,

        },

    ]

    const [search, setSearch] = useState("");
    const [filteredcars, setFilteredCars] = useState(CarsList);

    useEffect(() => {
        const newfilteredcars = CarsList.filter((car) => {

            if(search=="all")
            {return car;}
            else{
                return car.Name.toLocaleLowerCase().includes(search);
            }
         
    });
    
        setFilteredCars(newfilteredcars);
    }, [search])


    return (

        <div className="container booking-container">

                <h2 className="py-4 ms-3">Booking</h2>
        

                <div className="select-buttons">
             
                <select name="Date" id="date" >
                    <option value="new">new</option>
                    <option value="old">old</option>
                    <option value="all">All</option>
                </select>
                
                <select name="cars" id="cars" onChange={(e) =>{    
                    setSearch(e.target.value)
                   }}>
                    <option value="all">All</option>
                    <option value="volvo">Volvo</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>

                </select>
              

                </div>

                <div className="Cars-Container">
                    
                    {filteredcars.map(car => {
                        
                       return <Cars key={car.id} cars={car}/>
                    })}

                </div>
        </div>





    )



}

export default Booking