import "./calendar.styles.scss"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@fullcalendar/react/dist/vdom'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import UpcomingEvents from "../../assets/Calendar/upcomingevents.svg"

const Calendars = ()=> {
    return(
        <div className="container calendar-container">

                <div className="d-flex justify-content-between">
                    <h3 className="py-4 ms-3">Calendar</h3>
                    <div className="py-4 me-3"> 
                    <button>Toyota</button>
                    <button>Time</button>
                    <button>Status</button>
                    </div>
                     </div>
                
            <div className="ms-3 d-flex flex-row justify-content-between mb-3">

                <div className="d-flex flex-column justify-content-between">

                <Calendar/>
                <img src={UpcomingEvents} alt="" className="mt-2 w-100" />

                </div>
            <FullCalendar 
           
            plugins={[timeGridPlugin, bootstrap5Plugin]}
            initialView="timeGridDay"
            views={"monthGridYear"}
            themeSystem="bootstrap5"
          />
            </div>

        </div>
    )
}

export default Calendars