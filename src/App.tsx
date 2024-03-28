// import Banner from "./components/banner/Banner.tsx";
// import CommentsSlider from "./components/commentsSlider/CommentsSlider.tsx";
// import Features from "./components/features/Features.tsx";
// import Footer from "./components/footer/Footer.tsx";
// import Instagram from "./components/instagram/Instagram.tsx";
// import LatestPosts from "./components/latestPosts/LatestPosts.tsx";
// import NavBar from "./components/navbar/NavBar.tsx";
// import ProductSlider from "./components/productSlider/ProductSlider.tsx";
// import Subscribe from "./components/subscribe/Subscribe.tsx";
// import { BlogPosts, comments, instaPosts, iphones, smartWatches } from "./data/index.ts";
// import Header from "./header/Header.tsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.tsx";
import Footer from "./components/footer/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import { Container } from "@mui/material";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Container
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          minHeight: "20vh"
        }}
      >
        <Footer />
      </Container>
    </>
  );
};

export default App;
