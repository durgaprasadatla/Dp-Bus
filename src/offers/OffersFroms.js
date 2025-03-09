import React from 'react'

const OffersFroms = () => {
  return (
    <div>
        <div className='offers_main'>
              <input type='text' placeholder='From station'></input>
              <input type='text' placeholder='To station'></input>
              <input type='Date'></input>
              <button className='btn btn-primary'>search Bues</button>
        </div>  
    </div>
  )
}

export default OffersFroms