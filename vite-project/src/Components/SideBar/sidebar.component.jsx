import "./sidebar.styles.scss"
import NavIcon from "../../assets/Vector 1.svg"
import { NavLink } from 'react-router-dom'
import AssetIcon from "../../assets/Icons/assets.svg"
import DashboardIcon from "../../assets/Icons/dashboard.png"
import BuyCarIcon from "../../assets/Icons/buycar.png"
import SellCarIcon from "../../assets/Icons/sellcar.png"
import BookingIcon from "../../assets/Icons/booking.svg"
import CalendarIcon from "../../assets/Calendar/Calendar.png"

const SideBar= () => {

    return (
        <div className="side-bar">

        <div className="Header">
        <img src={NavIcon} className="NavIcon" alt="none found to display" />
        <h3 className="motiv">Motiv.</h3>
        </div>

        <div className="Body">
       <NavLink  to={"dashboard"} className="Link"> <img src={DashboardIcon } alt="" className="logo mx-2" />
        Dashboard</NavLink>
        
        <NavLink  to={"assets"} className="Link"> <img src={AssetIcon } alt="" className="logo mx-2" />
        Assets</NavLink>

        <NavLink  to={"booking"} className="Link"> <img src={BookingIcon } alt="" className="logo mx-2" />
        Booking</NavLink>
        
        <NavLink  to={"buy-cars"} className="Link"> <img src={BuyCarIcon } alt="" className="logo mx-2" />
        Buy Cars</NavLink>

        <NavLink  to={"sell-cars"} className="Link"> <img src={AssetIcon } alt="" className="logo mx-2" />
        Sell Cars</NavLink>

        <NavLink  to={"calendar"} className="Link"> <img src={CalendarIcon } alt="" className="logo mx-2" />
        Calendar</NavLink>
        <NavLink  to={"messages"} className="Link"> <img src={CalendarIcon } alt="" className="logo mx-2" />
        Messages</NavLink>
{/* 
        <NavLink  to={"assets"} className="Link"> <img src={AssetIcon } alt="" className="logo mx-2" />
        Assets</NavLink> */}
        {/* <div>Groups</div>
        <div>Groups</div> */}
        </div>

        <div className="Footer">
        {/* <NavLink  to={"SignIn"} className="Link"> <img src={CalendarIcon}  className="logo mx-2" />
        SignIn</NavLink> */}
        <NavLink  to={""} className="Link"> <img src={CalendarIcon}  className="logo mx-2" />
        Logout</NavLink>

        </div>
    </div>

    )
}

export default SideBar