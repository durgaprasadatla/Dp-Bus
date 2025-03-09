import React from 'react'
import OffersFroms from '../offers/OffersFroms'
import img1 from '../PHOTOS/img2.jpg'
import img3 from '../PHOTOS/img3.webp'
import img4 from '../PHOTOS/img4.jpg'
import img5 from '../PHOTOS/img5.jpeg'
const Offers = () => {
  return (
    <div className='container'>
            {/* <div className='card'> */}
              <div className='card_offers'>
                <div className='offers_text'>
                  <h2 className='p3'>Bus Booking Offers</h2>
                  <h2 className='p3'>Exciting offers on Bus Booking Online</h2>
                  <p>Get exciting bus booking offers across India on AbhiBus.Travellers can  quickly, easily and fast on AbhiBus. If you're looking for ways to save money on online bus booking offers today, simply use bus booking coupons on AbhiBus and avail great savings!</p>
                </div>
              </div>  
              <div className='card_offers1'>
                <div className='flight_offers'>
                  <div className='main_card'>
                    <p>Offers Booking best  Discount Offers</p>
                      <div className='offer_card1'>
                        <div className='card_img1'>
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
                        <div className='card_img'>
                           <img src={img3} alt=''></img>
                        </div>
                        <div className='card_img'>
                          <img src={img1} alt=''></img>
                        </div>
                        <div className='card_img'>
                          <img src={img3} alt=''></img>
                        </div>
                        <div className='card_img'>
                          <img src={img1} alt=''></img>
                        </div>
                        <div className='card_img'>
                          <img src={img5} alt=''></img>
                        </div>
                        <div className='card_img'>
                          <img src={img1} alt=''></img>
                        </div>
                        <div className='card_img'>
                        <img src={img4} alt=''></img>
                        </div>
                        <div className='card_img'>
                        <img src={img3} alt=''></img>
                        </div>
                        <div className='card_img'>
                        <img src={img1} alt=''></img>
                        </div>
                        <div className='card_img'>
                        <img src={img3} alt=''></img>
                        </div>
                        <div className='card_img'>
                        <img src={img1} alt=''></img>
                        </div>
                      </div>
                  </div>
                </div>
              </div>               
                

                {/* https://www.abhibus.com/bus-ticket-offers */}
            {/* </div> */}
       
    </div>
  )
}

export default Offers