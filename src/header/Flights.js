import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FilghtsNavbar } from '../flights/FilghtsNavbar';
import FlightsNavbar2 from '../flights/FlightsNavbar2';
import img1 from '../PHOTOS/img2.jpg'
import img3 from '../PHOTOS/img3.webp'
import img4 from '../PHOTOS/img4.jpg'
import img5 from '../PHOTOS/img5.jpeg'

const Flights = () => {
  return (
    <div>
      <FilghtsNavbar />
        <div className='flights_img'>
          <FlightsNavbar2 />
          <div className='card'>    
              <div className='card_text'>
                <p>One Way</p>  
                <p>Round Trip</p> 
              </div>          
              <div className='form1'>
                  <input type='text' placeholder=' From'></input>
                  <input type='text' placeholder='To'></input>
                  <input type='Date'></input>
                  <button className='btn btn-danger bu1'>Ticket Details</button>
              </div>
              <div className='card_text1'>
                <p className='p'>Special Fares (Optional) :</p>
                <p className='p1'>Student</p>  
                <p className='p1'>Senior Citizen</p> 
                <p className='p1'>Armed Forces</p> 
            </div>  
          </div>

        </div>
        <p className='flight_more_text'>Do You More With Flights</p>
        <div className='card7'>
          <div className='card1'>
            <div className='flight_more'>
              <i className='bi bi-airplane-fill flight_icon1'></i>
              <p>Flight <br></br> Tracker</p>
            </div>
            <div className='flight_more'>
              <i className='bi bi-passport flight_icon2'></i>
              <p>Book <br></br> Visa</p>
            </div>
            <div className='flight_more'>
              <i className='bi bi-shield-check flight_icon2'></i>
              <p>Travel <br></br>Insurance</p>
            </div>
            <div className='flight_more'>
              <i className='bi bi-credit-card flight_icon3'></i>
              <p>Credit <br></br> Card</p>
            </div>
            <div className='flight_more'>
              <i className='bi bi-person-fill flight_icon4'></i>
              <p>Goup<br></br> Booking</p>
            </div>
            <div className='flight_more'>
              <i className='bi bi-car-front-fill flight_icon2'></i>
              <p>Air Port<br></br>CAB</p>
            </div> <div className='flight_more'>
              <i className='bi bi-clipboard-check flight_icon2'></i>
              <p>Pan<br></br> Booking</p>
            </div> <div className='flight_more'>
              <i className='bi bi-bell-fill flight_icon5'></i>
              <p>Fare<br></br> Alerts</p>
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
        <div className='main_card2'>
            < p className='card2_main'>Why Choose DPFlights For Bus Ticket Booking ?</p>
            <div className='card2'>
              <div className='card'>
                <div className='card4'>
                  <div className='flights_icon'>
                    <i class="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className='flights_icon_text'>
                    <p className='p'>3,50,000+ flights Routes</p>
                    <p>offering unparalleled choices <br></br>for your travel needs</p>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card4'>
                    <div className='flights_icon'>
                      <i class="bi bi-airplane-fill "></i>
                    </div>
                    <div className='flights_icon_text'>
                      <p className='p'>10000+ flights Partners</p>
                      <p>ranging from State flights to <br></br>private partners</p>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card4'>
                      <div className='flights_icon'>
                      <i className='bi bi-ticket-perforated-fill '></i>
                      </div>
                      <div className='flights_icon_text'>
                        <p className='p'>Fastest flights Booking</p>
                        <p>swift and seamless bus ticket<br></br> booking experience</p>
                      </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card4'>
                    <div className='flights_icon'>
                    <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div className='flights_icon_text'>
                      <p className='p'>24/7 Customer Support</p>
                      <p>available for all your bus<br></br> booking needs</p>
                    </div>
                  </div>
                </div>
            </div>

        </div>

        {/* //fotter */}

        <div className='card-footer fo'>
        <div className='card-body foter2'>
            <div className='foter3'>
              <div>
                <h3>Top flights Routes</h3>
              </div>
              <div className='text'>
                <ul>
                  <li>Hyderabad to Bangalorore flights</li>
                  <li>Hyderabad to Mumbai flights</li>
                  <li>Hyderabad to UK flights</li>
                  <li>Hyderabad to US </li>
                  <li>Hyderabad to Chennai flights</li>
                  <li>Hyderabad to Madurai flights</li>
                  <li>Hyderabad to Jarmani flights</li>
                  <li>US to Hyderabad flights</li>
                  <li>UK to Chennai flights</li>
                  <li>Mumbai to Madurai flights</li>
                  <li>Mumbai to Hyderabad flights</li>
                  <li>Delhi to Hyderabad flights</li>
                </ul>
              </div>
              
            </div>
            <div className='foter4'>
              <div>
                <h3>flights from Top Sites</h3>
              </div>
              <div className='text'>
                <li>Hyderabad flights Tickets</li>
                <li>UK flights Ticket</li>
                <li>Vijayawada flights Ticket</li>
                <li>US flights Tickets</li>
                <li> Benguluru flights Tickets</li>
                <li>Chennai flights Tickets</li>
                <li>Coimbator flights Tickets</li>
                <li>Mumbai flights Tickets</li>
                <li>Indore flights Tickets</li>
                <li>Surat flights Tickets</li>
                <li>Rajkot flights Tickets</li>
                <li>Udaipur flights Tickets</li>
              </div>
            </div>
            <div className='foter5'>
              <div> 
                <h3>Airline flights</h3>
              </div>
              <div className='text'>
                <ul>
                  <li>Air India</li>
                  <li>VIstar</li>
                  <li>IndiGo</li>
                  <li>spice Jet</li>
                  <li>Air India Experss</li>
                  <li>Akasa</li>
                  <li>ViewAll</li>
                </ul>
              </div>
            </div>
            <div className='foter6'>
              <div> 
                <h3>Popular Airline Routes</h3>
              </div>
              <div className='text'>
                <ul>
                  <li>Bangalore to Delhi Indiigo </li>
                  <li>Mumbai to Delhi Air India </li>
                  <li>Delhi to Mumbai Akasa </li>
                  <li>Delhi to Mumbai Akasa </li>
                  <li>Mumbai to Hyderabad Experss</li>
                  <li>Delhi to Bangalore Air India </li>
                  <li>Bangalore to Delhi Akasa Air</li>
                </ul>
              </div>
            </div>         
      </div>
       <div className='card-footer foter7'>
            <i className='bx bxs-user'> Designd by Durga Prasad</i>
          </div>
      </div>
  </div>
    
  )
}

export default Flights