import { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import { db } from "../firebaseClient";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import Head from 'next/head'
import Image from 'next/image'
// Components
import NewsCard from '../components/NewsCard'
import PageTransition from '../components/PageTransition';
// Icons
import { GoodAfternoonIcon, GoodEveningIcon, GoodMorningIcon, GoodNightIcon } from '../assets/icons/GreetingIcons';

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export async function getServerSideProps() {
  const res = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-04-15&sortBy=popularity&apiKey=b12f3d6fcb0745ef9ea4b4e7801a1e99');
  const data = await res.json();

  const weatherRes = await fetch('https://api.weatherapi.com/v1/current.json?key=2d767e9221354e7196964133221504 &q=Chittagong&aqi=no');
  const weatherData = await weatherRes.json();

  const news = []
  const collRef = collection(db, "news");
  const q = query(collRef, limit(10), orderBy("data.timestamp", "desc"));
  
  await getDocs(q).then((snapshot) => {
    snapshot.docs.forEach(doc => {
      var docData = doc.data().data;
      docData.id = doc.id;
      
      news.push(JSON.stringify(docData));
    })
  });

  return {
    props: {
      news: news,
      weatherData: weatherData
    }
  }
}

export default function Home({ news, weatherData, setShowPageTransition }) {
  var newsData = news;

  newsData = newsData.map(news => JSON.parse(news));
  console.log(newsData)

  PageTransition(setShowPageTransition);

  // Get greeting text based on time
  const [greetingText, setGreetingText] = useState('');
  
  useEffect(() => {
    var currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 12) {
      setGreetingText("Good Morning");
    }
    else if (currentTime >= 12 && currentTime < 18) {
      setGreetingText("Good Afternoon");
    }
    else if (currentTime >= 18 && currentTime < 19) {
      setGreetingText("Good Evening");
    }
    else if(currentTime >= 19 && currentTime < 24) {
      setGreetingText("Good Night");
    }
  }, [])

  return (
    <div className='home_page page'>
      <Head>
        <title>Hovered News</title>
      </Head>
      
      <h1 style={{display: "none"}}>Hovered News</h1>
      <div className='container'>
        <header>
          <div className="header_left">
            <div className="weather">
              <div className="greetings">
                <div className="graphics">
                  {
                    greetingText === "Good Morning" ?
                    <GoodMorningIcon /> :
                    greetingText === "Good Afternoon" ?
                    <GoodAfternoonIcon /> :
                    greetingText === "Good Evening" ?
                    <GoodEveningIcon /> :
                    <GoodNightIcon />
                  }
                </div>
                <div className="greeting-text select-n">{greetingText}, <span>Anonymous</span></div>
              </div>
  
              <div className="weather_cast">
                <div className="info">
                  <div className="left">
                    <div className="graphics">
                      <Image src={'https:' + weatherData.current.condition.icon} height={90} width={90} />
                    </div>
                    <div className="details">
                      <div className="text">{weatherData.current.condition.text}</div>
                      <div className="location">{weatherData.location.name+', '+weatherData.location.country}</div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="temperature"><span>{weatherData.current.temp_c}°</span>c</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_right">
            {/* <div className="hottest-news">
              <div className="thumbnail">
                <Image src={require('../assets/images/banner.png')} alt="News Banner" layout="fill" objectFit='contain' />
              </div>
              <div className="infos">
                <Link href="/codohov"><a className="title">Bangladesh is celebrating Pohela Boishakh.</a></Link>
                <p className="short-description">CodoHov is one of the largest online teaching platform in Bangladesh. It provides computer training courses related on Programming, Software Development and Career track. In this season they are reaching out 10,000 number of students of their institute. It&apos;s CEOs Forhad Hossain and Shafkat Jahan says, "We are trying to reach more people by simplifying our services.</p>
              </div>
            </div> */}
            
            <OwlCarousel
              className='owl-theme'
              items={1}
              autoPlay={true}
              autoplayHoverPause={true}
              loop={true}
              autoplaySpeed={1000}
              responsive={{
                1800: {items: 1},
                600: {items: 1},
                0: {items: 1}
              }}
              dots={false}
            >
              {
                newsData.map((news, index) => {
                  return (
                    <NewsCard 
                      thumbnail={news.thumbnail}
                      title={news.title}
                      description={news.description}
                      link={"/news/"+news.id}
                      index={index}
                      key={index}
                    />
                  )
                })
              }
            </OwlCarousel>
          </div>
        </header>
  
        {/***** News Ticker *****/}
        <section className="news_ticker">
          <div className="title select-n">Highlights</div>
          <marquee>Bangladesh is celebrating Pohela Boishakh. CodoHov is one of the largest online teaching platform in Bangladesh. It provides computer training courses related on Programming, Software Development and Career track.</marquee>
        </section>
  
        {/***** Trending News Section *****/}
        <section className="trending-news category_news">
          <div className="section_title">Latest News</div>
          <div className="cards_container">
            {/* <NewsCard 
              type="vertical"
              thumbnail={require('../assets/images/banner.png')}
              title="Bangladesh is celebrating Pohela Boishakh."
              description="CodoHov is one of the largest online teaching platform in Bangladesh. It provides computer training courses related on Programming, Software Development and Career track."
              link="/codohov"
            /> */}
            {
              newsData.map((news, index) => {
                return (
                  <NewsCard 
                    type="vertical"
                    thumbnail={news.thumbnail}
                    title={news.title}
                    description={news.description}
                    index={index}
                    link={"/news/"+news.id}
                    key={index}
                  />
                )
              })
            }
          </div>
        </section>
        {/***** Trending News Section *****/}
      </div>
    </div>
  )
}
