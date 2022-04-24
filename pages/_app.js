import { useState } from 'react';
import Head from 'next/head'
import Script from 'next/script';
// Components
import Layout from '../components/Layout'
// CSS
import '../assets/owl carousel/owl.carousel.min.css';
import '../assets/owl carousel/owl.theme.default.min.css';
import '../styles/globals.css'
import '../styles/page-transition.css'
import '../styles/form.css'
import '../styles/navbar.css'
import '../styles/news-card.css'
import '../styles/comments.css'
import '../styles/comment-card.css'
import '../styles/footer.css'
import '../styles/404.css'
import '../styles/home.css'
import '../styles/news.css'
import '../styles/topic.css'
import '../styles/about.css'
import '../styles/contact.css'
import '../styles/privacy.css'

function MyApp({ Component, pageProps }) {
  const [showPageTransition, setShowPageTransition] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarData, setSnackbarData] = useState({duration: 0, type: '', message: ''});

  return (
    <Layout showPageTransition={showPageTransition} showSnackbar={showSnackbar} setShowSnackbar={setShowSnackbar} snackbarData={snackbarData}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3563302535835946" crossorigin="anonymous" />
      <Head>
        <meta name="google-site-verification" content="mqdXZIrtnfIDj924tB40w9VUzTsAoG3WCUlBhvjvghE" />
      </Head>

      <p style={{display: "none"}}>Latest news about Bangladesh, International, Sports, Education, Technology.</p>
      
      <Component {...pageProps} setShowPageTransition={setShowPageTransition} setShowSnackbar={setShowSnackbar} setSnackbarData={setSnackbarData} />
    </Layout>
  )
}

export default MyApp
