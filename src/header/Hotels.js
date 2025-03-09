import React from 'react'
import HotelNavbar from '../Hotels/HotelNavbar'
import HotelNavbar1 from '../Hotels/HotelNavbar1'
import img1 from '../PHOTOS/img2.jpg'
import img3 from '../PHOTOS/img3.webp'
import img4 from '../PHOTOS/img4.jpg'
import img5 from '../PHOTOS/img5.jpeg'

const Hotels = () => {
  return (
    <div>
      <HotelNavbar1 />
        <div className='hotel_img'>
          <HotelNavbar />
          <div className='card_do'>    
              <div className='hotel_text'>
                <p>Hotels for Yours 30% offer</p> 
              </div>                
              <div className='form2'>
                  <input type='text' placeholder=' From' className='in'></input>
                  <input type='Date'></input>
                  <input type='text' placeholder='Single Room'></input>
                  <button className='btn btn-danger bu1'>Ticket Details</button>
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
            < p className='card2_main'>Why Choose DpHotels For Hotels Ticket Booking ?</p>
            <div className='card2'>
              <div className='card'>
                <div className='card4'>
                  <div className='flights_icon1'>
                    <i class="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className='flights_icon_text1'>
                    <p className='p'>5,50,000+ Hotels</p>
                    <p>offering unparalleled choices <br></br>for your travel needs</p>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card4'>
                    <div className='flights_icon1'>
                      <i class="bi bi-building-fill "></i>
                    </div>
                    <div className='flights_icon_text1'>
                      <p className='p'>10000+ Hotels Partners</p>
                      <p>ranging from State Hotels to <br></br>private partners</p>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card4'>
                      <div className='flights_icon1'>
                      <i className='bi bi-ticket-perforated-fill '></i>
                      </div>
                      <div className='flights_icon_text1'>
                        <p className='p'>Fastest Hotels Booking</p>
                        <p>swift and seamless Hotels ticket<br></br> booking experience</p>
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
                      <p>available for all your Hotels<br></br> booking needs</p>
                    </div>
                  </div>
                </div>
            </div>

        </div>
        <div className='card-footer fo'>
            <div className='card-body foter2'>
                <div className='foter3'>
                  <div>
                    <h3>Top Hotels</h3>
                  </div>
                  <div className='text'>
                    <ul>
                      <li>van Der Valk Hotel Eindhoven-Best</li>
                      <li>Hotel The Match</li>
                      <li>Tulip Inn Eindhoven Airport</li>
                      <li>Budgethotel de Zwaan </li>
                      <li>Campaline Eindhoven</li>
                      <li>Crown Hotel Eindhoven Center</li>
                      <li>WestCord Hotel Eindhoven</li>
                      <li>Hotel La Reine</li>
                      <li>Holiday Inn Eindhoven</li>
                      <li>NH Collection Eindhoven</li>
                      <li>B&B Landgoed De Grote Beek</li>
                      <li>Sandton Eindhoven Centre</li>
                    </ul>
                  </div>
                  
                </div>
                <div className='foter4'>
                  <div>
                    <h3>Hotels from Top Cites</h3>
                  </div>
                  <div className='text'>
                    <li>Hyderabad Hotels</li>
                    <li>UK Hotels</li>
                    <li>Vijayawada Hotels</li>
                    <li>US Hotels</li>
                    <li> Benguluru Hotels</li>
                    <li>Chennai Hotels</li>
                    <li>Coimbator Hotels</li>
                    <li>Mumbai Hotels</li>
                    <li>Indore Hotels</li>
                    <li>Surat Hotels</li>
                    <li>Rajkot Hotels</li>
                    <li>Udaipur Hotels</li>
                  </div>
                </div>
                <div className='foter5'>
                  <div> 
                    <h3>India Hotels</h3>
                  </div> 
                  <div className='text'>
                    <ul>
                      <li>La Place Sarovar <br></br>Portico,Lucknow</li>
                      <li>Zip by spree Hotels Gangtok</li>
                      <li>Brij Anayra,Dharamshala</li>
                      <li>Fairfiels By Marriott Jodhpur</li>
                      <li>Maidens Hotels</li>
                      <li>Sterling Kufri</li>
                      <li>ViewAll</li>
                    </ul>
                  </div>
                </div>
                <div className='foter6'>
                  <div> 
                    <h3>Legal </h3>
                  </div>
                  <div className='text'>
                    <ul>
                      <li>Privacy Policy </li>
                      <li>Cookie Policy </li>
                      <li>Terams and Conditions</li>
                      <li>Taxes & Fees </li>
                      <li>Taxes & Fee</li>
                      <li>Our Services Fees </li>
                      <li>Post-Ticking Fees</li>
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

export default Hotels