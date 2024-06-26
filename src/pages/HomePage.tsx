
import Banner from "../components/banner/Banner.tsx";
import CommentsSlider from "../components/commentsSlider/CommentsSlider.tsx";
import Features from "../components/features/Features.tsx";
import Instagram from "../components/instagram/Instagram.tsx";
import LatestPosts from "../components/latestPosts/LatestPosts.tsx";
import ProductSlider from "../components/productSlider/ProductSlider.tsx";
import Subscribe from "../components/subscribe/Subscribe.tsx";
import { BlogPosts, comments, instaPosts, iphones, smartWatches } from "../data/index.ts";
import Header from "../header/Header.tsx";


function HomePage() {
  return (
    <>
      <Header />
      <Features />
      <ProductSlider title="mobile & tablets" data={iphones} delay={7000} />
      <ProductSlider title="smart watches" data={smartWatches} delay={5000} />
      <Banner title="New Year sale"/>
      <LatestPosts title="latest posts" posts={BlogPosts} />
      <CommentsSlider delay={5000} comments={comments} />
      <Subscribe />
      <Instagram images={instaPosts}/>
    </>
  )
}

export default HomePage