import React from 'react'
// Components
import PageTransition from '../components/PageTransition'

export default function Contact({ setShowPageTransition }) {
  PageTransition(setShowPageTransition);

  return (
    <div className='contact_page page'>
      <div className='container'>
        <div className='header'>
          <h1>Contact Us</h1>
        </div>

        <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.040553694544!2d91.81285531532825!3d22.352097546660424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd91a24a02a19%3A0xce7ea8d88967fea1!2sHovered!5e0!3m2!1sen!2sbd!4v1650620126657!5m2!1sen!2sbd" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <section className='contact_info'>
          <div className='content'>
            <div className='item'>
              <div className='icon'>
                <span className='fas fa-map-marker-alt'></span>
              </div>
              <div className='name'>Address</div>
              <span>59/1 Salam Mension, Bagghona, Chattogram</span>
            </div>

            <div className='item'>
              <div className='icon'>
                <span className='fas fa-mobile-alt'></span>
              </div>
              <div className='name'>Phone Number</div>
              <span>+880 1724904320</span>
            </div>

            <div className='item'>
              <div className='icon'>
                <span className='fas fa-envelope-square'></span>
              </div>
              <div className='name'>Email Address</div>
              <span>hoverednews@gmail.com</span>
            </div>
          </div>
        </section>

        <div className='wrapper'>
          <div className='left'>
            <section>
              <form className='contact_form default bg_w'>
                <div className='section_title'>Send Us a Message</div>
  
                <div className='inputs'>
                  <div className='input_container'>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' />
                  </div>
                  <div className='input_container'>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' />
                  </div>
                  <div className='input_container'>
                    <label htmlFor='subject'>Your Message</label>
                    <textarea type='text' id='subject'></textarea>
                  </div>
                </div>

                <div className='actions'>
                  <button className='submit_btn'>Send Message</button>
                </div>
              </form>
            </section>
          </div>

          <div className='right'>
            <section className='faqs'>
              <div className='section_title'>Frequently Asked Questions</div>
               
              <div className='content'>
                <div className='item'>
                  <div className='toggle_btn 1' onClick={()=> {$('.toggle_btn.1').toggleClass('show')}}>Curabitur eget leo at velit imperdiet viaculis vitaes? <span className='fas fa-chevron-down'></span></div>
                  <div className='toggle_content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa.</p>
                  </div>
                </div>
                <div className='item'>
                  <div className='toggle_btn 2' onClick={()=> {$('.toggle_btn.2').toggleClass('show')}}>Curabitur eget leo at velit imperdiet viaculis vitaes? <span className='fas fa-chevron-down'></span></div>
                  <div className='toggle_content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa.</p>
                  </div>
                </div>
                <div className='item'>
                  <div className='toggle_btn 3' onClick={()=> {$('.toggle_btn.3').toggleClass('show')}}>Curabitur eget leo at velit imperdiet viaculis vitaes? <span className='fas fa-chevron-down'></span></div>
                  <div className='toggle_content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa.</p>
                  </div>
                </div>
                <div className='item'>
                  <div className='toggle_btn 4' onClick={()=> {$('.toggle_btn.4').toggleClass('show')}}>Curabitur eget leo at velit imperdiet viaculis vitaes? <span className='fas fa-chevron-down'></span></div>
                  <div className='toggle_content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
