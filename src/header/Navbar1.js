import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div>
         <NavLink to="/"  className="" style={{margin:"20px" ,fontSize:"50px" ,marginTop:"0.3em",marginRight:"420px",textDecoration:"none",fontWeight:"600",width:"100px",color:"white"}}>DPBUS</NavLink>
                    {/* <NavLink to="/bookings" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"orange"}}><i className='bi bi-ticket-perforated-fill ticket_icon1'></i>Bookings</NavLink> */}
                    <NavLink to="/bookings" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"orange"}}>IRCTC FOOD BOOKING</NavLink>
                    <NavLink to="/account" style={{margin:"20px" ,fontSize:"30px" ,marginTop:"0.3em",marginRight:"20px",textDecoration:"none",width:"100px",borderRadius:"20px",color:"orange"}}><i className='bi bi-person-fill'></i>Signup/Login</NavLink>
    </div>
  )
}

export default Navbar1