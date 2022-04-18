import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const [year, setyear] = useState(new Date().getFullYear());

  return (
    <footer>
      <div className='container'>
        <div className='footer_content'>
          <div className='left'>
            <div className='section info'>
              <div className='section_header'>
                <Image src={require('../assets/images/branding.png')} width={128.08} height={40} alt='Logo' />
              </div>
              <div className='section_content'>
                <ul>
                  <li><Link href='/about'>Home</Link></li>
                  <li><Link href='/about'>About</Link></li>
                  <li><Link href='/contact'>Contact</Link></li>
                  <li><Link href='/contact'>Publish</Link></li>
                </ul>
              </div>
            </div>
  
            <div className='section quick_links'>
              <div className='section_header'>
                <h2>Quick Links</h2>
              </div>
  
              <div className='section_content'>
                <ul>
                  <li><Link href='/about'>Bangladesh</Link></li>
                  <li><Link href='/about'>International</Link></li>
                  <li><Link href='/services'>Sports</Link></li>
                  <li><Link href='/portfolio'>Education</Link></li>
                  <li><Link href='/contact'>Business</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className='right'>
            <div className='section subscribe'>
              <div className='section_header' style={{marginBottom: '5px'}}>
                <h2>Subscribe Newsletter</h2>
              </div>
              <div className='section_content'>
                <form className='newsletter_subscribe_form default'>
                  <div className='form_header'>
                    <p>Subscribe to our newsletter to get daily updates.</p>
                  </div>
                  <div className='inputs' style={{marginTop: '10px'}}>
                    <div className='input_container'>
                      <input type='text' placeholder='Enter your email' />
                    </div>
                  </div>

                  <div className='actions' style={{marginTop: '15px'}}>
                    <button className='submit_btn'>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
  
            <div className='section social_links'>
              <div className='section_header'>
                <h2>Social Links</h2>
              </div>
              <div className='section_content'>
                <ul className='links'>
                  <li><a href='#'>Facebook</a></li>
                  <li><a href='#'>Twitter</a></li>
                  <li><a href='#'>Instagram</a></li>
                  <li><a href='#'>Linkedin</a></li>
                </ul>
                
                <div className='image'>
                  <Image src={require('../assets/images/hovered.png')} width={80} height={38.8} alt='Hovered' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer_bottom'>
          <p className='copyright'>&copy; {year} HOVERED NEWS<br /><span>All rights reserved.</span></p>
        </div>
      </div>
    </footer>
  )
}