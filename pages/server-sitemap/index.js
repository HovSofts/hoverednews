import { getServerSideSitemap, getServerSideSitemapIndex } from "next-sitemap";

export function getServerSideProps(ctx){
  const fields = [];
  
  return getServerSideSitemap(ctx, fields)
}

export default function Site(){
  
}