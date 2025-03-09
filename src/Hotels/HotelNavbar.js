import React from 'react'
import { NavLink } from 'react-router-dom'


const HotelNavbar = () => {
  return (
   <div>
                       <NavLink  to="/flights" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"white"}}><i className='bi bi-airplane-fill flight_icon2'></i>Flights</NavLink>
                       <NavLink to="/hotels1" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"white"}}><i className='bi bi-building-fill hotel_icon2'></i>Hotels</NavLink>
                       <NavLink to="/trains1" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"white"}}><i className='bi bi-train-front-fill icon2'></i>Trains</NavLink>
                       <NavLink to="/buess1" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"0.3em",marginRight:"480px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"white"}}><i className='bi bi-bus-front-fill icon2'></i>Buess</NavLink>
                       <NavLink to="" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"white"}}>Hotels Booking</NavLink>
       </div>
  )
}

export default HotelNavbar