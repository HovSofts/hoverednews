import Script from 'next/script'
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }){
  return (
    <div className="app">
      <Script src="https://kit.fontawesome.com/19b88b9e2d.js" crossorigin="anonymous" />
      <Navbar />
        <div className="page_body">
          {children}
          <Footer />
        </div>
    </div>
  )
}