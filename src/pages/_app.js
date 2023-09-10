import "@/styles/globals.css";
// import "@/styles/demo.css";
import Layout from "@/components/Layout/Layout";
// import "@/styles/style-rtl.min.css";
import "../assets/fontawesome-free/css/all.min.css";
import { CartProvider } from "@/contexts/contex";
// import Providers from "@/providers";
import "react-toastify/dist/ReactToastify.css";
import "react-tabs/style/react-tabs.css";
import "../components/FiltersDrawer/Backdrop.css";
import "../components/FiltersDrawer/FiltersDrawer.css";
import "../components/Modal/Modal.css";
import "../components/Modal/backdrop/Backdrop.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/h-header.css';

export default function App({ Component, pageProps }) {
  return (
    // <Providers>
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
    // </Providers>
  );
}
