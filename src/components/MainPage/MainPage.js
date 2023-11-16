import useToken from "@/hooks/useToken";
import IntroSection from "./IntroSection";
import MiddleBanner from "./MiddleBanner";
import SpecialOffers from "./SpecialOffers";
import SpecialProducts from "./SpecialProducts";
import TopCategories from "./TopCategories";
import { useEffect } from "react";
import axios from "axios";

// import 'swiper/react';
import "swiper/css";
import { useCartContext } from "@/contexts/contex";

const MainPage = () => {
  const { cartUpdate } = useCartContext();
  const [storedValue, setToken] = useToken();
  console.log("storedValue", storedValue.token);
  const getOrderDetail = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Order/get-order",
        { id: storedValue.userId },
        {
          headers: {
            Authorization: `Bearer ${storedValue.token}`,
          },
        }
      );
      if (response.status === 200 && response.data.data.orderDetails) {
        // setData(response.data.data);
        cartUpdate(response.data.data.orderDetails);
        // setIsLoading(false);
      } else {
        // cartUpdate([]);
      }
    } catch (error) {
      console.log("eror cart", error);
    }
  };

  useEffect(() => {
    getOrderDetail();
  }, []);
  return (
    <div className="page-wrapper">
      <h1 className="d-none">فروشگاه شاپ آی آر</h1>
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
