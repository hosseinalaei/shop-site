import IntroSection from "./IntroSection";
import MiddleBanner from "./MiddleBanner";
import NewProducts from "./NewProducts";
import SpecialOffers from "./SpecialOffers";
import SpecialProducts from "./SpecialProducts";
import TopCategories from "./TopCategories";
// import 'swiper/react';
import 'swiper/css';
const MainPage = () => {
  return (
    <div className="page-wrapper">
      <h1 className="d-none">قالب فروشگاهی چند فروشندگی وولمارت</h1>
      <main className="main">
        <IntroSection />
        <TopCategories />
        <SpecialOffers />
        <SpecialProducts />
        {/* <MiddleBanner />
        <NewProducts /> */}
      </main>
    </div>
  );
};

export default MainPage;
