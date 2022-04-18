import Script from 'next/script'
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, showPageTransition }) {
  
  return (
    <>
      <>
        <div className={showPageTransition === 'hide'? '' : showPageTransition? 'page_transition active' : 'page_transition'}>
        </div>
        {
          showPageTransition?
          <div className="page_transition_line"></div>
          : ''
        }
      </>

      <div className="app">
        <Script src="https://kit.fontawesome.com/19b88b9e2d.js" crossorigin="anonymous" />
        <Navbar />
  
        <div className="page_body">
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}