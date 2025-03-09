import React from 'react'
import { NavLink } from 'react-router-dom'

export const FilghtsNavbar = () => {
  return (
    <div>
         <NavLink to="/"  className="" style={{margin:"20px" ,fontSize:"40px" ,marginTop:"0.3em",marginRight:"620px",textDecoration:"none",fontWeight:"600",width:"100px",color:"red"}}>dpbus</NavLink>
        <NavLink to="/offers" style={{margin:"20px" ,fontSize:"20px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i className='bi bi-tag-fill offer_icon'></i>Offers</NavLink>
        <NavLink to="/bookings" style={{margin:"20px" ,fontSize:"20px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i className='bi bi-ticket-perforated-fill ticket_icon'></i>Bookings</NavLink>
        <NavLink to="/help" style={{margin:"20px" ,fontSize:"20px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"black"}}><i class="bi bi-telephone-fill"></i>Help</NavLink>
        <NavLink to="/account" style={{margin:"20px" ,fontSize:"20px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"orange"}}><i className='bi bi-person-fill'></i>Signup/Login</NavLink>
    </div>
  )
}
