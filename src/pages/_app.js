import "@/styles/globals.css";
import "@/styles/demo9.min.css";
import Layout from "@/components/Layout/Layout";
import "../assets/fontawesome-free/css/all.min.css";
import { CartProvider } from "@/contexts/contex";
// import Providers from "@/providers";
import "react-toastify/dist/ReactToastify.css";
import "react-tabs/style/react-tabs.css";
import "../components/FiltersDrawer/Backdrop.css";
import "../components/FiltersDrawer/FiltersDrawer.css";
import "../components/Modal/Modal.css";
import "../components/Modal/backdrop/Backdrop.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "swiper/css";
import "swiper/swiper-bundle.css";
// import React from "react";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "@/styles/style-rtl.min.css";

export default function App({ Component, pageProps }) {
  return (
    // <Providers>
    // <React.StrictMode>
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
    // </React.StrictMode>
    // </Providers>
  );
}
