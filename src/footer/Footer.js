import React from 'react'
import App from '../App'

const Footer = () => {
  return (
    <div>
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
                <h3>Lms</h3>
              </div>
              <div>
                <pre>A Learning Management System (LMS) <br></br>is a software platform that facilitates<br></br>
                the creation, delivery, and management of <br></br>
                educational content and training programs</pre>
              </div>
              
            </div>
            <div className='fo4'>
              <div>
              <h3>Courses</h3>
              </div>
              <div className='text'>
              <pre>Full Stack</pre>
              <pre>SAP</pre>
              <pre>AWS</pre>
              <pre></pre>
              <pre>Java</pre>
              </div>
            </div>
            <div className='fo5'>
              <div>
              <h3>UsesFull Links</h3>
              </div>
              <div className='text'>
              <pre>Your Account</pre>
              <pre>Become an</pre>
              <pre>Courses Cost</pre>
              <pre>Help</pre>
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

export default Footer