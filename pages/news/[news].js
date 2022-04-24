import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
// Components
import Comments from "../../components/Comments";
import PageTransition from '../../components/PageTransition';
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseClient";

export async function getServerSideProps(context) {
  const docRef = doc(db, 'news', context.params.news);
  const docSnap = await getDoc(docRef);
  var newsData = 'wait';
  
  if (docSnap.exists()) {
    newsData = docSnap.data();
    
  } else {
    newsData = 'not found';
  }

  return {
    props: {
      newsData: JSON.stringify(newsData),
    }
  }
}

export default function News({ newsData, setShowPageTransition, setShowSnackbar, setSnackbarData }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [data, setData] = useState(JSON.parse(newsData).data);

  PageTransition(setShowPageTransition);

  useEffect(() => {
    updateDoc(doc(db, 'news', data.id), {
      "data.views": increment(1)
    })
  }, []);

  function share(){
    const shareData = {
      title: data.title,
      text: data.title,
      url: 'https://hoverednews.vercel.app/news/' + data.id,
    }

    if (navigator.share) {
      navigator.share(shareData).then(() => {
        console.log('Successful share')
      }).catch((error) => {
        console.log('Error sharing', error)
      })
    }
    else{
      console.log('Share not supported')
    }
  }

  function copyURL(){
    navigator.clipboard.writeText('https://hoverednews.vercel.app/news/' + data.id).then(() => {
      setShowSnackbar(true);
      setSnackbarData({
        duration: 6000,
        message: 'URL copied to clipboard',
        type: 'success'
      })
    })
  }

  return (
    <div className="news_page page">
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3563302535835946" crossorigin="anonymous" />
      {
        JSON.parse(newsData) === 'not found' ?
        <div className="container">
          <Head>
            <title>News Not Found । Hovered News</title>
          </Head>
          
          <div className="not_found">
            <Image src={require('../../assets/images/page banners/404.png')} alt="Not Found" width={200} height={200} />
            <h1>News Not Found</h1>
          </div>
        </div>
        :
        <>
          <Head>
            <title>{data.title} । Hovered News</title>
            <meta property="og:image" content={data.thumbnail} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:url" content={`https://hoverednews.vercel.app/news/${data.id}`} />
          </Head>
    
          <div className="container">
            <div className="header">
              <h1 className="title">{data.title}</h1>
              <div className="infos">
                <div className="info views">
                  <i className="fa-solid fa-eye" /> {data.views + 1}
                </div>

                <div className="info">
                  {
                    data.category.map((category, index) => {
                      return (
                        index === data.category.length - 1 ?
                        <Link href={"/topic/"+category}><a className="category">{category}</a></Link>
                        :
                        <Link href={"/topic/"+category}><a className="category">{category}, </a></Link>
                      )
                    })
                  }
                </div>
                <div className="date info">{data.date}</div>
              </div>

              <div className="actions">
                <a className="circle icon"><i className="fa-brands fa-facebook" /></a>
                <a onClick={share}><i className="fa-solid fa-share" /> <span>Share</span></a>
                <a onClick={copyURL}><i className="fa-regular fa-copy" /> <span>Copy Link</span></a>
              </div>
            </div>
    
            <div className="content">
              {/* <div className="news_content">
                <p>২০২৩ সালের এসএসসি-সমমান পরীক্ষা এপ্রিল মাসে এবং এইচএসসি-সমমান পরীক্ষা জুনে অনুষ্ঠিত হবে। করোনাভাইরাসের কারণে ক্লাসে অংশগ্রহণ করতে না পারায় ২০২২ সালের মতো সংক্ষিপ্ত সিলেবাসে এসব পরীক্ষা অনুষ্ঠিত হবে।</p>
                <br />
                <div className={imageLoaded? "image_container" : "image_container blur"}>
                  <Image src={require('../../assets/images/news-banner.jpg')} onLoadingComplete={() => {setTimeout(() => {setImageLoaded(true)}, 500)}} layout="fill" className="image" />
                </div>
                <br />
                <p>মঙ্গলবার (১২ এপ্রিল) শিক্ষা মন্ত্রণালয়ের সভাকক্ষে এক প্রেস ব্রিফিংয়ে শিক্ষামন্ত্রী ডা. দীপু মনি এসব তথ্য জানান।</p>
                <br/>
                <ul>
                  <li>আমাদের সাধারণ এসএসসি ও সমমান পরীক্ষা ফেব্রুয়ারিতে অনুষ্ঠিত হয়।</li>
                  <li>এসব কিছু বিবেচনা করে ২০২৩ সালের এসএসসি ও সমমান পরীক্ষা ২০২২ সালের পরীক্ষার জন্য ঘোষিত সংক্ষিপ্ত সিলেবাস অনুসারে অনুষ্ঠিত হবে।</li>
                  <li>শিক্ষামন্ত্রী বলেন, বর্তমানে যারা একাদশ শ্রেণিতে অধ্যায়নরত তারা ২০২৩ সালের এইচএসসি ও সমমান পরীক্ষায় অংশ গ্রহণ করবেন।</li>
                  <li>এসএসসি ও সমমানের শ্রেণি কার্যক্রম ২০২৩ সালের মার্চ পর্যন্ত চলবে।</li>
                  <li>কিন্তু সামগ্রিক দিক বিবেচনা করে ২০২৩ সালের এসএসসি ও সমমান পরীক্ষা এপ্রিল মাসে এবং এইচএসসি ও সমমান পরীক্ষা জুনে নেওয়ার সিদ্ধান্ত গ্রহণ করেছি।</li>
                </ul>
                <br/>
                <p>তিনি বলেন, আমাদের সাধারণ এসএসসি ও সমমান পরীক্ষা ফেব্রুয়ারিতে অনুষ্ঠিত হয় এবং এইচএসসি ও সমমান পরীক্ষা এপ্রিলে অনুষ্ঠিত হয়। কিন্তু সামগ্রিক দিক বিবেচনা করে ২০২৩ সালের এসএসসি ও সমমান পরীক্ষা এপ্রিল মাসে এবং এইচএসসি ও সমমান পরীক্ষা জুনে নেওয়ার সিদ্ধান্ত গ্রহণ করেছি। এসব পরীক্ষা সব বিষয়ে হবে, পূর্ণ নম্বরে হবে ও পূর্ণ সময়ের পরীক্ষা অনুষ্ঠিত হবে।</p>
                <br/>
                <blockquote><span>"</span>শিক্ষামন্ত্রী বলেন, বর্তমানে যারা একাদশ শ্রেণিতে অধ্যায়নরত তারা ২০২৩ সালের এইচএসসি ও সমমান পরীক্ষায় অংশ গ্রহণ করবেন।<span>"</span></blockquote>
                <br/>
                <p>দীপু মনি বলেন, অনেক শিক্ষার্থী ২০২০ সালের অষ্টম শ্রেণিতে জেএসসি বা জেডিসি পরীক্ষা দিতে পারেনি এবং নবম শ্রেণিতে প্রথম সাময়িক পরীক্ষাও দিতে পারেনি। যদিও এই পুরো সময়টা অনেকেই টেলিভিশনে ক্লাসে অংশ নিয়েছে, অনলাইন ক্লাসে অংশ নিয়েছে এবং অধিকাংশ এ্যাসাইনমেন্ট করেছে। তারপর এসব এ্যাসাইনমেন্ট, ক্লাসগুলো ২০২২ এর পরীক্ষার্থীদের জন্য নির্ধারিত ১৫০ কর্মদিবসের পুনঃবিন্যাসকৃত যে সিলেবাস সে অনুসারে পরিচালিত হয়েছে। এসব কিছু বিবেচনা করে ২০২৩ সালের এসএসসি ও সমমান পরীক্ষা ২০২২ সালের পরীক্ষার জন্য ঘোষিত সংক্ষিপ্ত সিলেবাস অনুসারে অনুষ্ঠিত হবে।<br/><br/>শিক্ষামন্ত্রী বলেন, বর্তমানে যারা একাদশ শ্রেণিতে অধ্যায়নরত তারা ২০২৩ সালের এইচএসসি ও সমমান পরীক্ষায় অংশ গ্রহণ করবেন। এই শিক্ষার্থীদের ২০২১ সালের পহেলা জুলাই থেকে একাদশ শ্রেণিতে ক্লাস করার কথা ছিল কিন্তু তারা ক্লাস শুরু করতে পেরেছেন ২০২২ সালের ২ মার্চ থেকে অর্থাৎ ইতোমধ্যে তারা ৮ মাস ক্লাস করার সুযোগ পায়নি। আগামী ডিসেম্বর পর্যন্ত তাদের ক্লাসের স্বাভাবিক কার্যক্রম অব্যাহত থাকলে তারা সবমিলিয়ে ২০০ কর্মদিবস শ্রেণি কার্যক্রমে অংশগ্রহণ করতে পারবে, আর স্বাভাবিক অবস্থায় তারা ৩০০ শ্রেণি কার্যক্রমে অংশগ্রহণ করতে পারত। এই পরীক্ষার্থীরা ২০২১ এসএসসি ও সমামানের সংক্ষিপ্ত পরীক্ষায় অংশগ্রহণ করে তারা উত্তীর্ণ হয়েছে। এ অবস্থায় ২০২৩ সালের এইচএসসি ও সমমানের পরীক্ষা ২০২২ সালের জন্য নির্ধারিত ১৮০ কর্মদিবসের পুর্নঃবিন্যাসকৃত সংক্ষিপ্ত সিলেবাস অনুযায়ী অনুষ্ঠিত হবে।<br/><br/>শ্রেণিকক্ষে পাঠদানের বিষয়ে মন্ত্রী বলেন, এইচএসসি ও সমমানের শ্রেণি কার্যক্রম ২০২৩ সালের ফ্রেব্রুয়ারি পর্যন্ত চলবে। এসএসসি ও সমমানের শ্রেণি কার্যক্রম ২০২৩ সালের মার্চ পর্যন্ত চলবে।</p>
              </div> */}
    
              <div className="news_content">
                <div className={imageLoaded? "image_container" : "image_container blur"}>
                  <Image src={data.thumbnail} onLoadingComplete={() => {setTimeout(() => {setImageLoaded(true)}, 500)}} layout="fill" className="image" alt="News Banner" />
                </div>
                <br />
                <div dangerouslySetInnerHTML={{__html: data.content}} />
              </div>
    
              <div className="action_content">
                <Comments />
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}
