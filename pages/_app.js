import { useState } from 'react';
import Head from 'next/head'
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

function MyApp({ Component, pageProps }) {
  const [showPageTransition, setShowPageTransition] = useState(false);

  return (
    <Layout showPageTransition={showPageTransition}>
      <Head>
        <meta name="google-site-verification" content="mqdXZIrtnfIDj924tB40w9VUzTsAoG3WCUlBhvjvghE" />
      </Head>

      <p style={{display: "none"}}>Latest news about Bangladesh, International, Sports, Education, Technology.</p>
      
      <Component {...pageProps} setShowPageTransition={setShowPageTransition} />
    </Layout>
  )
}

export default MyApp
