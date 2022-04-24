import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import $ from 'jquery';
// Icons
import AvatarIcon from '../assets/icons/AvatarIcon';
import { BangladeshIcon, BusinessIcon, HomeIcon, InternationalIcon, SportsIcon, SearchIcon, EducationIcon, TechnologyIcon } from '../assets/icons/NavIcons';
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
  }, [showSearchForm]);

  var objToday = new Date();
  var domEnder = function() {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th"
  }();
  var dayOfMonth = ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder;
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  var curMonth = months[objToday.getMonth()];
  var curYear = objToday.getFullYear();

  const today = dayOfMonth + ' ' + curMonth + ", " + curYear;
  
  // Get update of time syncronously
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' }));
    }, 1000);
  }, []);

  // Update todays date
  

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
          <div className="date">{today}</div>
          <div className="time">{time}</div>
        </div>
        {/* <div className="profile">
          <div className="image">
            <AvatarIcon />
          </div>
          <div className="name">Anonymous</div>
          <div className="actions">
              <>
                <Link href="/signup" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} className="signup-btn">Sign In</Link>
              </>
          </div>
        </div> */}
        <div className="links select-n">
          <Link href="/" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><HomeIcon /></div>
              <div className="text">Home</div>
            </a>
          </Link>

          <Link href="/topic/bangladesh" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><BangladeshIcon /></div>
              <div className="text">Bangladesh</div>
            </a>
          </Link>

          <Link href="/topic/international" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><InternationalIcon /></div>
              <div className="text">International</div>
            </a>
          </Link>

          <Link href="/topic/business" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><BusinessIcon /></div>
              <div className="text">Business</div>
            </a>
          </Link>

          <Link href="/topic/sports" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><SportsIcon /></div>
              <div className="text">Sports</div>
            </a>
          </Link>

          <Link href="/topic/education" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><EducationIcon /></div>
              <div className="text">Education</div>
            </a>
          </Link>

          <Link href="/topic/technology" activeClassName="active" onClick={() => {setShowSidebar(!showSidebar)}} exact>
            <a>
              <div className="icon"><TechnologyIcon /></div>
              <div className="text">Technology</div>
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
