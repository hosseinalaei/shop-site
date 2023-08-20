import Footer from "../Footer/Footer";
import StickyFooter from "../Footer/StickyFooter";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <StickyFooter />
    </>
  );
};

export default Layout;
