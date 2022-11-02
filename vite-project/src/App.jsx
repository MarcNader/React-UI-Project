// import { useState } from 'react'
import Navigation from './Routes/Navigation/navigation.component'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import DashBoard from './Components/MainContent/dashboard.component';
import Assets from './Routes/Assets/assets.component';
import Booking from './Routes/Booking/booking.component';
import SellCars from './Routes/Sell Cars/sellcars.component';
import BuyCars from './Routes/Buy Cars/buycars.component';
import Calendars from './Routes/Calendar/calendar.component';
import SignUp from './Routes/Signup/signup.component';
import SignIn from './Routes/Sign-In/signin.component';
import Messages from './Routes/Messages/messages';
function App() {
    
  return (
         <Routes>

          <Route index element={<SignIn/>}/>
            <Route path="/" element={<Navigation/>}>
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='/assets' element={<Assets/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/sell-cars' element={<SellCars/>}/>
            <Route path='/buy-cars' element={<BuyCars/>}/>
            <Route path='/calendar' element={<Calendars/>}/>
            <Route path='/messages' element={<Messages/>}/>

          </Route>

          <Route path='/SignUp' element={<SignUp/>}/>

         </Routes>
  )
}

export default App
