import { Suspense } from "react";
import Footer from "../Footer/Footer";
import StickyFooter from "../Footer/StickyFooter";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import MobileMenu from "../Menu/MobileMenu";
import { useCartContext } from "@/contexts/contex";
import Backdrop from "../FiltersDrawer/Backdrop";

const Layout = ({ children }) => {
  const {mobileMenu, setMobileMenu} = useCartContext();
  console.log(mobileMenu);
  return (
    <>
      {mobileMenu && <MobileMenu mobileMenu={mobileMenu}/>}
      {mobileMenu && (
            <>
              <Backdrop close={() => setMobileMenu(false)} />
            </>
          )}
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
      <StickyFooter />
    </>
  );
};

export default Layout;
