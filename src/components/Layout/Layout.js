import { Suspense } from "react";
import Footer from "../Footer/Footer";
import StickyFooter from "../Footer/StickyFooter";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
      {/* <StickyFooter /> */}
    </>
  );
};

export default Layout;
