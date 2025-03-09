import React from 'react'
import BuessNavbar from '../Buess/BuessNavbar'
import HotelNavbar from '../Hotels/HotelNavbar1'
import img1 from '../PHOTOS/img2.jpg'
import img3 from '../PHOTOS/img3.webp'
import img4 from '../PHOTOS/img4.jpg'
import img5 from '../PHOTOS/img5.jpeg'
const Trains1= () => {
  return (
    <div>
      <HotelNavbar />
        <div className='train_main'>
          <BuessNavbar />
          <div className='card_do'>    
              <div className='hotel_text'>
                <p>Trains for Yours 30% offer</p> 
              </div>                
              <div className='form1'>
                  <input type='text' placeholder=' From'></input>
                  <input type='text' placeholder='To'></input>
                  <input type='Date'></input>
                  <button className='btn btn-danger bu'>Ticket Details</button>
              </div>
          </div>
        </div>
        <p className='flight_more_text'>Do You More With Trains</p>
        <div className='card7'>
          <div className='card1'>
            <div className='flight_more'>
              <i className='bi bi-train-front-fill bus_icon2'></i>
              <p>Flight <br></br> Tracker</p>
            </div>
            <div className='flight_more'>
              <i className='bi  bi-ticket-perforated-fill flight_icon2'></i>
              <p>Book <br></br> Tickets</p>
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
       
        <div className='main_card2'>
            < p className='card2_main'>Why Choose trains For trains Ticket Booking ?</p>
            <div className='card2'>
              <div className='card'>
                <div className='card4'>
                  <div className='flights_icon1'>
                    <i class="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className='flights_icon_text1'>
                    <p className='p'>5,50,000+ Trains</p>
                    <p>offering unparalleled choices <br></br>for your travel needs</p>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card4'>
                    <div className='flights_icon1'>
                      <i class="bi bi-train-front-fill "></i>
                    </div>
                    <div className='flights_icon_text1'>
                      <p className='p'>10000+ Trains Partners</p>
                      <p>ranging from State flights to <br></br>private partners</p>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card4'>
                      <div className='flights_icon1'>
                      <i className='bi bi-ticket-perforated-fill '></i>
                      </div>
                      <div className='flights_icon_text1'>
                        <p className='p'>Fastest Trains Booking</p>
                        <p>swift and seamless flights ticket<br></br> booking experience</p>
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
                      <p>available for all your flights<br></br> booking needs</p>
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
            <div className='card-body foter2'>
                <div className='foter3'>
                  <div>
                    <h3>Top Trains</h3>
                  </div>
                  <div className='text'>
                    <ul>
                      <li>Hyderabad to Bangalorore trains</li>
                      <li>Hyderabad to Mumbai trains</li>
                      <li>Hyderabad to Machilipatanam<br></br> trains</li>
                      <li>Hyderabad to Gudivada trains </li>
                      <li>Hyderabad to Chennai trains</li>
                      <li>Hyderabad to Madurai trains</li>
                      <li>Hyderabad to Jarmani trains</li>
                      <li>US to Hyderabad trains</li>
                      <li>UK to Chennai trains</li>
                      <li>Mumbai to Madurai trains</li>
                      <li>Mumbai to Hyderabad trains</li>
                      <li>Delhi to Hyderabad trains</li>
                    </ul>
                  </div>
                  
                </div>
                <div className='foter4'>
                  <div>
                    <h3>Trains  Top Tickets sales</h3>
                  </div>
                  <div className='text'>
                    <li>Hyderabad trains Tickets</li>
                    <li>Machilipatanam trains<br></br> Ticket</li>
                    <li>Vijayawada trains Ticket</li>
                    <li>Gudivada trains Tickets</li>
                    <li> Benguluru trains Tickets</li>
                    <li>Chennai trains Tickets</li>
                    <li>Coimbator trains Tickets</li>
                    <li>Mumbai trains Tickets</li>
                    <li>Indore trains Tickets</li>
                    <li>Surat trains Tickets</li>
                    <li>Rajkot trains Tickets</li>
                    <li>Udaipur trains Tickets</li>
                  </div>
                </div>
                <div className='foter5'>
                  <div> 
                    <h3>The Most Famous Trains</h3>
                  </div> 
                  <div className='text'>
                    <ul>
                    <li>Indian Pacific </li>
                      <li>Trans-Siberian Express</li>
                      <li>Orient Express </li>
                      <li>Flying Scotsman</li>
                      <li>Blue Train</li>
                      <li>Super Chief</li>
                      <li>Maharajas’ Express</li>
                      <li>ViewAll</li>
                    </ul>
                  </div>
                </div>
                <div className='foter6'>
                  <div> 
                    <h3>Popular Trains India</h3>
                  </div>
                  <div className='text'>
                    <ul>
                      <li>Vivek Express </li>
                      <li> Himsagar Express</li>
                      <li>Darjeeling Himalayan Railway </li>
                      <li> Palace on Wheels </li>
                      <li>Golden Chariot</li>
                      <li> Maharaja Express </li>
                      <li>Deccan Odyssey</li>
                      <li>Maitree Express</li>
                      <li> Howrah-Jaisalmer Express</li>
                      <li> Island Express</li>
                    </ul>
                  </div>
                </div>         
            </div>
            <div className='card-footer foter7'>
                <i className='bx bxs-user'> Designd by Durga Prasad</i>
            </div>
        </div>

        </div>
    // </div>
  )
}

export default Trains1