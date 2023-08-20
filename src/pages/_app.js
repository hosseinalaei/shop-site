import "@/styles/globals.css";
import "@/styles/demo.css";
import Layout from "@/components/Layout/Layout";
import "@/styles/style-rtl.min.css";
import "../assets/fontawesome-free/css/all.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
