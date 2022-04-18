import Layout from '../components/Layout'
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
import '../styles/home.css'
import '../styles/news.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
