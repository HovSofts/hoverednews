import React, { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import Image from 'next/image';
import Link from 'next/link';
import $ from 'jquery';
// Icons
import AvatarIcon from '../assets/icons/AvatarIcon';
import { BangladeshIcon, BusinessIcon, HomeIcon, InternationalIcon, SportsIcon, SearchIcon } from '../assets/icons/NavIcons';
import CrossIcon from '../assets/icons/CrossIcon';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);

  useEffect(() => {
    // Handle Sticky Navbar
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $(".main_nav").addClass("sticky");
      }
      else{
        $(".main_nav").removeClass("sticky");
      }
    });
  }, [])
  
  useEffect(() => {
    if(showSearchForm){
      $(".search-form-toggle input").focus();
    }
  }, [showSearchForm])

  return (
    <>
      {/* Top Nav */}
      <nav className="main_nav">
        <div className='container'>
          <div className={showSidebar? "sidebar-toggle animate select-n" : "sidebar-toggle select-n"} onClick={() => {setShowSidebar(!showSidebar)}}><div></div></div>
          <Link href="/">
            <div className='branding'>
              <Image src={require('../assets/images/branding.png')} alt="Hovered News" />
            </div>
          </Link>
          <form className="search-form">
            <input type="search" placeholder="Corona Virus" required />
            <button type="submit"><SearchIcon /></button>
          </form>
          <button className={showSearchForm? "search-btn animate" : "search-btn"} onClick={() => {setShowSearchForm(!showSearchForm)}}>
            {
              showSearchForm? <CrossIcon /> : <SearchIcon />
            }
          </button>
          <form className={showSearchForm? "search-form-toggle show" : "search-form-toggle"}>
            <input type="search" placeholder="Corona Virus" required />
            <button type="submit"><SearchIcon /></button>
          </form>
        </div>
      </nav>

      {/* Side Nav */}
      <nav className={showSidebar? "side_nav show" : "side_nav"}>
        <div className="date_time select-n">
          <div className="date">7 August, 2021</div>
          <div className="time">12:00pm</div>
        </div>
        <div className="profile">
          <div className="image">
            <AvatarIcon />
          </div>
          <div className="name">Forhad Hossain</div>
          <div className="actions">
              <>
                <Link href="/signup" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} className="signup-btn">Sign In</Link>
              </>
          </div>
        </div>
        <div className="links select-n">
          <Link href="/" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><HomeIcon /></div>
              <div className="text">Home</div>
            </a>
          </Link>

          <Link href="/bangladesh" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><BangladeshIcon /></div>
              <div className="text">Bangladesh</div>
            </a>
          </Link>

          <Link href="/international" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><InternationalIcon /></div>
              <div className="text">International</div>
            </a>
          </Link>

          <Link href="/business" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><BusinessIcon /></div>
              <div className="text">Business</div>
            </a>
          </Link>

          <Link href="/sports" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><SportsIcon /></div>
              <div className="text">Sports</div>
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
