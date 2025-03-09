import React from 'react'
import Navbar1 from './Navbar1'
import train1 from '../PHOTOS/train1.jpeg'
import train2 from '../PHOTOS/train2.jpg'

const Trains = () => {
  return (
    <div>
        {/* <h1>Trains</h1> */}
        <div className='train_img'>
          <Navbar1 />
          <div className='train_img2'>
            <h1>TRAIN TICKET BOOKING</h1>
            <p>Powered By confirmtkt</p>
          </div>
          <div>
            <div className="form">
              <img src={train1} alt=''></img>
                <input type="text" placeholder='From'></input>
                <img src={train2} alt=''></img>
                <input type="text" placeholder='To'></input>
                <input type='Date'></input>
                <button className='btn btn-danger'>search Trains</button>
            </div>
          </div>                                        
        </div>

        <h1 className='train_main_text'>IRCTC Authorised Partner</h1>
        <div className='train_text3'>
          <div className='train_text'>
            <div className='train_text1'>
                <div className='train_icon'>
                  <i className='bi bi-ticket-perforated-fill '></i>
                </div>
                <div className='train_icon_text'>
                  <p className='p'>Fastest Bus Booking</p>
                  <p >With our same train alternates and prediction feature,<br></br> increase your chances of getting confirm train tickets.</p>
                </div>
            </div>
            <div className='train_text1'>
                <div className='train_icon'>
                  <i className='bi bi-ticket-perforated-fill '></i>
                </div>
                <div className='train_icon_text'>
                  <p className='p'>
                  Free Cancellation on Train Tickets</p>
                  <p>Get a full refund on train tickets by opting our <br></br>free cancellation feature.</p>
                </div>
            </div>
             <div className='train_text1'>
                <div className='train_icon'>
                  <i className='bi bi-bank '></i>
                </div>
                <div className='train_icon_text'>
                  <p className='p'>Instant Refund & Cancellation</p>
                  <p>Get an instant refund and book your next Train<br></br> ticket easily.</p>
                </div>
            </div>
            
          </div>
          <div className='train_text2'>
            <div className='train_text1'>
                <div className='train_icon'>
                  <i className='bi bi-credit-card '></i>
                </div>
                <div className='train_icon_text'>
                  <p className='p'>UPI Enabled Secured Payment</p>
                  <p >Payment on Confirmtkt is highly secured. Easy<br></br> UPI and other multiple payment modes available.<br></br> increase your chances of getting confirm train tickets.</p>
                </div>
            </div>
            <div className='train_text1'>
                <div className='train_icon'>
                  <i className='bi bi-telephone-fill '></i>
                </div>
                <div className='train_icon_text'>
                  <p className='p'>Train Booking & Enquiry Support</p>
                  <p>24X7 customer support, for any train enquiry & <br></br>booking related queries call 08068243910. <br></br>free cancellation feature.</p>
                </div>
            </div>
             <div className='train_text1'>
                <div className='train_icon'>
                <img src={train2} alt=''></img>
                </div>
                <div className='train_icon_text'>
                  <p className='p'>Live Train Status Tracking</p>
                  <p>Train status & notification of your Train tickets.<br></br> ticket easily.</p>
                </div>
            </div>
            
          </div>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Trains