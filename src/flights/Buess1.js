import React from 'react'
import HotelNavbar1 from '../Hotels/HotelNavbar1'
import img1 from '../PHOTOS/img2.jpg'
import img3 from '../PHOTOS/img3.webp'
import img4 from '../PHOTOS/img4.jpg'
import img5 from '../PHOTOS/img5.jpeg'
import BusNavbar2 from '../Buess/BusNavbar2'

const Buess1 = () => {
  return (
    <div>
      <HotelNavbar1 />
      {/* <hr></hr> */}
        <div className='bus_img'>
          <BusNavbar2 />
           <div className='card_do1'>    
           <div className='form3'>
                  <input type='text' placeholder=' From'></input>
                  <input type='text' placeholder='To'></input>
                  <input type='Date'></input>
                  <button className='btn btn-danger bu4'>Ticket Details</button>
              </div>
          </div>
        </div>
       
       
        <div className='main_card2'>
            < p className='card2_main'>Why Choose DpHotels For Bus Ticket Booking ?</p>
            <div className='card2'>
              <div className='card'>
                <div className='card4'>
                  <div className='flights_icon1'>
                    <i class="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className='flights_icon_text1'>
                    <p className='p'>5,50,000+ Bueses</p>
                    <p>offering unparalleled choices <br></br>for your travel needs</p>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card4'>
                    <div className='flights_icon1'>
                      <i class="bi bi-bus-front-fill "></i>
                    </div>
                    <div className='flights_icon_text1'>
                      <p className='p'>10000+ Bueses Partners</p>
                      <p>ranging from State Bueses to <br></br>private partners</p>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card4'>
                      <div className='flights_icon1'>
                      <i className='bi bi-ticket-perforated-fill '></i>
                      </div>
                      <div className='flights_icon_text1'>
                        <p className='p'>Fastest Bueses Booking</p>
                        <p>swift and seamless bus ticket<br></br> booking experience</p>
                      </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card4'>
                    <div className='flights_icon1'>
                    <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div className='flights_icon_text1'>
                      <p className='p'>24/7 Customer Support</p>
                      <p>available for all your bus<br></br> booking needs</p>
                    </div>
                  </div>
                </div>
            </div>

        </div>

        <div className='flight_offers'>
          <div className='main_card'>
            <p>Flights Booking best  Discount Offers</p>
              <div className='card1'>
                <div className='card_img'>
                <img src={img1} alt=''></img>
                </div>
                <div className='card_img'>
                <img src={img5} alt=''></img>
                </div>
                <div className='card_img'>
                <img src={img3} alt=''></img>
                </div>
                <div className='card_img'>
                <img src={img4} alt=''></img>
                </div>
              </div>
          </div>
        </div>
        <div className='card-footer fo'>
        
          <div className='card-body fo2'>
              <div className='fo3'>
                <div>
                  <h3>Top Bueses Routes</h3>
                </div>
                <div className='text'>
                  <ul>
                    <li>Hyderabad to Bangalorore Bus</li>
                    <li>Hyderabad to Mumbai Bus</li>
                    <li>Hyderabad to Nellore Bus</li>
                    <li>Hyderabad to Machilipatanam </li>
                    <li>Hyderabad to Chennai BUs</li>
                    <li>Hyderabad to Madurai Bus</li>
                    <li>Hyderabad to Ahmedabad Bus</li>
                    <li>Vijayawada to Hyderabad Bus</li>
                    <li>Vijayawada to Chennai Bus</li>
                    <li>Mumbai to Madurai Bus</li>
                    <li>Mumbai to Hyderabad Bus</li>
                    <li>Delhi to Hyderabad Bus</li>
                  </ul>
                </div>
                
              </div>
              <div className='fo4'>
                <div>
                  <h3>Bueses from Top Sites</h3>
                </div>
                <div className='text'>
                  <li>Hyderabad Bus Tickets</li>
                  <li>Tirupathi Bus Ticket</li>
                  <li>Vijayawada Bus Ticket</li>
                  <li>Machilipatanam Bus Tickets</li>
                  <li>Ongol Bus Tickets</li>
                  <li>Chennai Bus Tickets</li>
                  <li>Coimbator Bus Tickets</li>
                  <li>Mumbai Bus Tickets</li>
                  <li>Indore Bus Tickets</li>
                  <li>Surat Bus Tickets</li>
                  <li>Rajkot Bus Tickets</li>
                  <li>Udaipur Bus Tickets</li>
                </div>
              </div>
              <div className='fo5'>
                <div> 
                  <h3>Top RTC Buses</h3>
                </div>
                <div className='text'>
                  <ul>
                    <li>APSRTC</li>
                    <li>GSRTC</li>
                    <li>HRTC</li>
                    <li>RSRTC</li>
                    <li>UPSRTC</li>
                    <li>PRTC</li>
                    <li>TGSRTC</li>
                    <li>KERALA RTC</li>
                    <li>TNSTC</li>
                    <li>OSRTC</li>
                    <li>BSRTC</li>
                    <li>JKSRTC</li>
                  </ul>
                </div>
              </div>
              <div className='fo6'>
                <div>
                <h3>Contact Page</h3>
                </div>
                <div className='con'>
                  <i className='bx bxs-home'> Hyderabad, India.</i><br></br>
                  <i className='bx bxs-envelope'> hello@gmail.com.</i><br></br>
                  <i className='bx bxs-phone'> +91 9515670223.</i>
                </div>
              </div>
            </div>
            <div className='card-footer fo7'>
              <i className='bx bxs-user'> Designd by Durga Prasad</i>
            </div>
        </div>
      </div>
  )
}

export default Buess1