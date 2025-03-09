import React from 'react'

const Bookings = () => {
  return (
    <div>
        {/* <h1>Bookings</h1> */}
        <div className='card'>
            <div class="booking_text">
              <p className='p'>Enter Ticket Details</p>
              <p>Check Your Email Or SMS that you recevied while booking</p>
            </div>
            <div className='form'>
                <input type='text' placeholder='Please enter the bokking ID'></input>
                <input type='number' placeholder='Please enter the modile number'></input>
                <button className='btn btn-danger bu1'>Ticket Details</button>
            </div>
            
        </div>
        <div className='card'>
            <div class="booking_text">
              <p className='p'>Frequently Asked Questions</p>
              <p>How to cancel my booking?</p>
            </div>
            <div className='card-header'>
              <p>Where can I check the cancellation policy?</p>
            </div>
            <div className='card-header'>
              <p>You can check the cancellation policy defined by the bus partner in your booking confirmation email or by checking cancellation policy in the upcoming bookings section. Alternatively, you can review the cancellation policy before proceeding to cancel the ticket.</p>
            </div>
            <div className='card-header'>
              <p>My bus service was cancelled. What should I do now?</p>
            </div>
            <div className='card-header'>
              <p>Where and by when will I get my refund??</p>
            </div>
           
            
        </div>
    </div>
  )
}

export default Bookings