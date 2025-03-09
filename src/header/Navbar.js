import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
            <NavLink to="/"  className="" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",fontWeight:"600",width:"100px"}}>dpbus</NavLink>
            <NavLink to="/buess" style={{margin:"20px" ,fontSize:"25px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"red"}}><i className='bi bi-bus-front-fill icon'></i>Busess</NavLink>
            <NavLink to="/trains" style={{margin:"20px" ,fontSize:"25px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i className='bi bi-train-front-fill icon'></i>Trains</NavLink>
            <NavLink  to="/flights" style={{margin:"20px" ,fontSize:"25px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i className='bi bi-airplane-fill flight_icon'></i>Flights</NavLink>
            <NavLink to="/hotels" style={{margin:"20px" ,fontSize:"25px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i className='bi bi-building-fill hotel_icon'></i>Hotels</NavLink>
            <NavLink to="/offers" style={{margin:"20px" ,fontSize:"25px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i className='bi bi-tag-fill offer_icon'></i>Offers</NavLink>
            <NavLink to="/bookings" style={{margin:"20px" ,fontSize:"25px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i className='bi bi-ticket-perforated-fill ticket_icon'></i>Bookings</NavLink>
            <NavLink to="/help" style={{margin:"20px" ,fontSize:"25px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i class="bi bi-telephone-fill"></i>Help</NavLink>
            <NavLink to="/account" style={{margin:"20px" ,fontSize:"25px" ,marginTop:"1em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"orange"}}><i className='bi bi-person-fill'></i>Signup/Login</NavLink>
    </div> 
   
  )
}

export default Navbar
 