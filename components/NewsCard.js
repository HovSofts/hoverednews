import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// CSS
// Icons
import { BangladeshIcon, BusinessIcon, HomeIcon, InternationalIcon, SportsIcon, SearchIcon } from '../assets/icons/NavIcons';

export default function NewsCard(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={props.type === "vertical" ? "news_card news_card_2" : "news_card"}>
      {/* {
        props.cardTitle? <Link href="/business" className="card-title"><props.cardTitleIcon /> Business</Link> : <></>
      } */}
      <div className={imageLoaded? "thumbnail" : "thumbnail blur"}>
        <Image src={props.thumbnail} alt="News Banner" onLoadingComplete={() => {setTimeout(() => {setImageLoaded(true)}, 500)}} layout="fill" />
      </div>
      <div className="infos">
        <Link href={props.link}><a className="title" onClick={() => {localStorage.setItem('article_index', props.index)}}>{props.title}</a></Link>
        <p className="short-description">{props.description}</p>
        {/* <div className='actions'>
          <Link className='btn_primary' to={props.link}>Read More</Link>
        </div> */}
      </div>
    </div>
  )
}
