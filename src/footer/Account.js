import React from 'react'

const Account = () => {
  return (
    <div>
     
      <div class=" sign_up">
          <form>
              <p>Sign Up</p>
            <input type='text' placeholder='Name' className='input'></input>
            <input type='email' placeholder='Email'></input>
            <input type='number' placeholder='Number'></input>
            <input type='password' placeholder='Password'></input>
            <input type='submit' value="Submit" className='submit'></input>
            <hr></hr>
            <div className='sign_up_icons'>
                <a href="https://facebook.com" class="btn btn-outline-primary pr" target="_self"><i class="bx bxl-facebook face">facebook</i></a>,
                <a href="https://google.com" class="btn btn-outline-danger dan" target="_self"><i class="bx bxl-google">google</i> </a>
            </div>
            <div className='sign_text'>
              <a className='a'>Allready you have an Account ?</a>
              <a className='a1'>Login</a>
            </div>
          
          </form>
          <form>
              <p>Login</p>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <input type='submit' value="Submit" className='submit'></input>
            {/* <a>Forget Password</a> */}
            <hr></hr>
            <div className='sign_up_icons'>
                <a href="https://facebook.com" class="btn btn-outline-primary pr" target="_self"><i class="bx bxl-facebook face">facebook</i></a>,
                <a href="https://google.com" class="btn btn-outline-danger dan" target="_self"><i class="bx bxl-google">google</i> </a>
            </div>
            <div className='sign_text'>
              <a className='a'>Allready you have an Account ?</a>
              <a className='a1'>Signup</a>
            </div>
          
          </form>
          
          
      </div>      
    </div>
  )
}

export default Account