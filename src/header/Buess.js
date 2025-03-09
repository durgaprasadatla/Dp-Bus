import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from '../PHOTOS/img2.jpg'
import img3 from '../PHOTOS/img3.webp'
import img4 from '../PHOTOS/img4.jpg'
import img5 from '../PHOTOS/img5.jpeg'
import phone from '../PHOTOS/phone3.png'
import apple from '../PHOTOS/applelogo.png'
import android from '../PHOTOS/androidlogo.jpeg'

const Buess = () => {
  return (
    <div>
        <div className='main_page'>
          <div className='main_img'>
            <div id="carouselExampleAutoplaying" class="carousel slide ca1" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={img4} class="d-block w-100" alt="..." />
                  </div>  
                  <div class="carousel-item">
                    <img src={img5} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div> 
          </div>
          <div className='main_page2'>
                <form >
                    <i class="bi bi-bus-front-fill bus_icon">
                    <input type='text' placeholder=' Leaving from' >
                    </input></i>
                    <hr></hr>
                    <i class="bi bi-geo-alt-fill bus_icon"></i>
                    <input type='text' placeholder='To'></input>
                    <hr></hr>
                    <p>Journy Date</p>
                    <input type='Date'></input>
                    <hr></hr>
                    <button className='btn btn-danger'>search Bsuese</button>
                </form>
        
            <ul className='nav justify-content-center nav_text'>
              <li className='nav-item'>
                <i class="bi bi-bus-front-fill "></i>
                  <a className='nav-link active dp' aria-current="page">Airport<br></br> Buess</a>
              </li>
              <li className='nav-item'>
                  <i class="bi bi-person-fill ic"></i>
                  <a className='nav-link active ic'>Refer % <br></br>
                  Earn</a>
              </li>
              <li className='nav-item'>
                  <i class="bi bi-credit-card-fill ic"></i>
                  <a className='nav-link active ic'>Creadit <br></br>
                  Cards</a>
              </li>
              <li className='nav-item'>
                  <i class="bi bi-bus-front-fill ic"></i>
                  <a className='nav-link active ic'>Plan <br></br>
                  Trips</a>
              </li>
            </ul>     
            
          </div>
        </div>
        <p className='flight_more_text'>Do You More With Buesess</p>
        <div className='card7'>
          <div className='card1'>
            <div className='flight_more'>
              <i className='bi bi-bus-front-fill bus_icon2'></i>
              <p>Bus <br></br> Tracker</p>
            </div>
            <div className='flight_more'>
              <i className='bi bi-ticket-fill flight_icon2'></i>
              <p>tickets</p>
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
              <p>Bus Stop<br></br>CAB</p>
            </div> <div className='flight_more'>
              <i className='bi bi-clipboard-check flight_icon2'></i>
              <p>Pan<br></br> Booking</p>
            </div> <div className='flight_more'>
              <i className='bi bi-bell-fill flight_icon5'></i>
              <p>Fare<br></br> Alerts</p>
            </div>            
          </div>
        </div>
        {/* card */}
        <div className='main_card'>
            <p className='dp'>Bus Booking best  Discount Offers</p>
              <div className='card1'>
              <div className='card_img1'>
                <img src={img1} alt=''></img>
              </div>
              <div className='card_img1'>
                <img src={img5} alt=''></img>
              </div>
              <div className='card_img1'>
                <img src={img3} alt=''></img>
              </div>
              <div className='card_img1'>
                <img src={img4} alt=''></img>
              </div>
              </div>
        </div>
        
        {/* help requirements */}
        <div className='main_card2'>
          <div className='card2_text'>
            <p className='dp'>Why Choose DpBus For Bus Ticket Booking ?</p>
            <p className='p1'>DpBus is India’s fastest growing online ticket booking platform. DpBus is the official ticketing partner of several State Road Transport Corporation (SRTC) operators and over 4000+ private <br></br> bus partners covering more than 3,50,000 bus routes</p>
          </div>
          <div className='card2_servece'>
            <div className='card2'>
              <div className='card'>
                <div className='card4'>
                  <div className='card2_icon'>
                  <i class="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className='card2_icon_text'>
                    <p className='p'>3,50,000+ Bus Routes</p>
                    <p>offering unparalleled choices <br></br>for your travel needs</p>
                  </div>
                </div>
              </div>
              <div className='card'>
                <div className='card4'>
                    <div className='card2_icon'>
                      <i class="bi bi-bus-front-fill "></i>
                    </div>
                    <div className='card2_icon_text'>
                      <p className='p'>4000+ Bus Partners</p>
                      <p>ranging from State RTCs to <br></br>private partners</p>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card4'>
                      <div className='card2_icon'>
                        <i className='bi bi-ticket-perforated-fill '></i>
                      </div>
                      <div className='card2_icon_text'>
                        <p className='p'>Fastest Bus Booking</p>
                        <p>swift and seamless bus ticket<br></br> booking experience</p>
                      </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card4'>
                    <div className='card2_icon'>
                    <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div className='card2_icon_text'>
                      <p className='p'>24/7 Customer Support</p>
                      <p>available for all your bus<br></br> booking needs</p>
                    </div>
                  </div>
                </div>
            </div>

          </div>
          {/* <h1>app info</h1> */}
          <p className='app_info'>App Info</p>
            <div className='app_img'>
              <div className='app_img2'>
                <img src={phone}></img>
              </div>
              <diV className="app_img3">
                <div className='app_main_text'>
                  <p className='p'>Make Your Travel Memorable<br></br>
                  Install DpBus App</p>
                  <div className='app_text3'>
                    <div className='app_text'>
                      <div className='app_text1'>
                        <ul>
                          <p className='p'>
                          <i class="bi bi-check-lg tick"></i>Get Notified</p>
                          <p>When the bus starts and is<br></br>
                          about to reach you.</p>
                        </ul>
                      </div>
                      <div className='app_text1'>
                        <ul>
                          <p className='p1'>    <i class="bi bi-check-lg tick"></i>Lightning Fast</p>
                          <p>Book in 30 seconds even on Low  Network</p>
                        </ul>
                      </div>
                    </div>                     
                  </div>
                  <div className='app_text3'>
                    <div className='app_text'>
                      <div className='app_text1'>
                        <ul>
                        <p className='p'>     <i class="bi bi-check-lg tick"></i>
                        Trusted by Millions</p>
                        <p>Over 200,000 reviewsfrom our customers.</p>
                        </ul>
                      </div>
                      <div className='app_text1'>
                        <ul>
                          <p className='p1'>    <i class="bi bi-check-lg tick"></i>Enjoy Other Stuff</p>
                          <p>Games, offers, Free Rides
                          and a lot more.</p>
                        </ul>
                      </div>
                    </div>  
                    
                  </div>
                  <div className='logo_img'>
                  <img className='img' src={apple} alt=''></img>
                  <img src={android}></img>
                  <div className='stars_text'>
                    <div className='stars_text1'>                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </div>
                    <div className='text'>
                      <p>4.8/5 based on 298648 reviews<br></br>
                          Trusted by 5+ Crores Travellers</p>
                    </div>
                  </div>
                </div>
                </div>             
              </diV>        
            </div>             
            <div className='app_text3'>
              <div className='app_text'>
                <div className='app_text1'>
                  <p className='p'>Fastest Bus Booking</p>
                  <p  className='p1'>swift and seamless bus ticket<br></br> booking experience</p>
                </div>
                <div className='app_text1'>
                  <p className='p2'>Fastest Bus Booking</p>
                  <p  className='p3'>swift and seamless bus ticket<br></br> booking experience</p>
                </div>
              </div>                      
            </div>  
            
         {/* footer        */}
         
      <div className='card-footer fo'>
        <div className=' card-header fo1'>
              <div className='home_text'>
                <h4>Get Connected With us on social networks</h4>
              </div>
              <div class="home_social_icons">
                    <a href="https://facebook.com" class="btn btn-outline-danger" target="_self"><i class="bx bxl-facebook"></i></a>
                    <a href="https://twitter.com" class="btn btn-outline-primary" target="_self">
                        <i class="bx bxl-twitter"></i></a>

                    <a href="https://instagram.com" class="btn btn-outline-danger" target="_self">
                        <i class="bx bxl-instagram"></i> 
                    </a>
                    <a href="https://Linkedin.com" class="btn btn-outline-danger" target="_self">
                        <i class="bx bxl-linkedin"></i> 
                    </a>
                    <a href="https://google.com" class="btn btn-outline-danger" target="_self">
                        <i class="bx bxl-google"></i> 

                    </a>
                    <a href="https://github" class="btn btn-outline-danger" target="_self">
                    <i class="bx bxl-github"></i>
                    </a>                       
                          
              </div>
        </div>
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
        
    </div>
  )
}

export default Buess