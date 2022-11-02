import "./sellcars.styles.scss"
import Mercedes from "../../assets/Sell Car/sellcar.png"
import SellCarChart from "../../Components/Sell Car Chart/sellcarchart.component"
import CircularBar from "../../Components/Circular Progress Bar Sell Cars/circularbar.component"
import RadialBarCharts  from "../../Components/Radial BarChart/radialbarchart.component"
const SellCars = () =>{

    return (

        <div className="container sellcars-container">

            <h3 className="py-4 ms-3">Sell Cars</h3>

            <div className="row ms-3 d-flex justify-content-between">

                    <div className="col-md-6 carcol d-inline-flex flex-column">

                            <h4 className="pt-3 ps-3 d-inline-flex" >2022 Mercedes Benz</h4>
                             <img src={Mercedes} id="mercedes" className="d-flex align-self-center pb-3" />

                    </div>

                    <div className="col-md-5 me-3 d-inline-flex chart-col">

                           <SellCarChart/>
                            

                    </div>



            </div>

            <h3 className="py-4 ms-3">Offers</h3>

                <div className="third-row ms-3">

                    <div className="first-element pt-3">
                            <h5>Killian James</h5>
                           <p className="m-0 text-primary"><h6 className="d-inline-flex text-secondary">$16,605</h6> average price</p> 
                           <p>market average is $16,224</p> 
                           <button className="button-hamada">hamada</button>

                    </div>
                    <div className="second-element pt-2"> 
                    <CircularBar/>
                    <p>Impression Share</p>
                    </div>
                    
                    
                    <div className="second-element pt-2"> 
                         <RadialBarCharts/>

                         </div>
                         

                    


                    <div className="first-element">
                            <h5>Killian James</h5>
                           <p className="m-0 text-primary"><h6 className="d-inline-flex text-secondary">$16,605</h6> average price</p> 
                           <p>market average is $16,224</p> 
                           <button className="button-hamada">hamada</button>

                    </div>
                       <div className="first-element">
                            <h5>Killian James</h5>
                           <p className="m-0 text-primary"><h6 className="d-inline-flex text-secondary">$16,605</h6> average price</p> 
                           <p>market average is $16,224</p> 
                           <button className="button-hamada">hamada</button>

                    </div>

                </div>

                <div className="third-row ms-3">

                        <div className="first-element pt-3">
                                <h5>Killian James</h5>
                            <p className="m-0 text-primary"><h6 className="d-inline-flex text-secondary">$16,605</h6> average price</p> 
                            <p>market average is $16,224</p> 
                            <button className="button-hamada">hamada</button>

                        </div>
                        <div className="second-element pt-2"> 
                        <CircularBar/>
                        <p>Impression Share</p>
                        </div>


                        <div className="second-element pt-2"> 
                            <RadialBarCharts/>

                            </div>
    

                <div className="first-element">
                        <h5>Killian James</h5>
                    <p className="m-0 text-primary"><h6 className="d-inline-flex text-secondary">$16,605</h6> average price</p> 
                    <p>market average is $16,224</p> 
                    <button className="button-hamada">hamada</button>

                </div>
                <div className="first-element">
                        <h5>Killian James</h5>
                    <p className="m-0 text-primary"><h6 className="d-inline-flex text-secondary">$16,605</h6> average price</p> 
                    <p>market average is $16,224</p> 
                    <button className="button-hamada">hamada</button>

                </div>

</div>

                



        </div>
        
    )
}

export default SellCars