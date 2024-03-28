import Banner from "./components/banner/Banner.tsx";
import Features from "./components/features/Features.tsx";
import LatestPosts from "./components/latestPosts/LatestPosts.tsx";
import NavBar from "./components/navbar/NavBar.tsx";
import ProductSlider from "./components/productSlider/ProductSlider.tsx";
import { BlogPosts, iphones, smartWatches } from "./data/index.ts";
import Header from "./header/Header.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Features />
      <ProductSlider title="mobile & tablets" data={iphones} delay={7000} />
      <ProductSlider title="smart watches" data={smartWatches} delay={5000} />
      <Banner/>
      <LatestPosts title="latest posts" posts={BlogPosts}/>
    </>
  );
}

export default App;
