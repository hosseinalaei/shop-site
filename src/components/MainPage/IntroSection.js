import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dot1 from "../../assets/images/s3.jpg";
import dot2 from "../../assets/images/b1.jpg";
import dot3 from "../../assets/images/b2.jpg";
import dot4 from "../../assets/images/banner_SlideBanner_bDQ85G_2a1aa76a-70c1-42b6-84bb-684726c5b51c.webp";
import dot5 from "../../assets/images/banner_SlideBanner_OG2q61_14533bbf-5c31-4609-9075-28f4b2a1be52.webp";

import bg1 from "../../assets/images/s3.jpg";
import bg2 from "../../assets/images/b1.jpg";
import bg3 from "../../assets/images/b2.jpg";
import bg4 from "../../assets/images/banner_SlideBanner_bDQ85G_2a1aa76a-70c1-42b6-84bb-684726c5b51c.webp";
import bg5 from "../../assets/images/banner_SlideBanner_OG2q61_14533bbf-5c31-4609-9075-28f4b2a1be52.webp";

import slide1 from "../../assets/images/demos/demo9/slides/1.jpeg";
import slide2 from "../../assets/images/demos/demo9/slides/2.jpeg";
import slide3 from "../../assets/images/demos/demo9/slides/3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import axios from "axios";
import HomeSlider from "../Slider/HomeSlider";
import HomeSliderThumbs from "../Slider/HomeSliderThumbs";

const IntroSection = () => {
  const [sliders, setSliders] = useState([]);
  const swiperRef = useRef(null);

  const handleSlideChange = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  const getSlider = async () => {
    try {
      const response = await axios.get(
        "https://138.201.167.230:5050/Slider/GetActiveSliders"
      );
      if (response.status === 200) {
        setSliders(response.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getSlider();
    const swiperContainer = swiperRef.current;
  }, []);

  return (
    <section className="intro-section mb-6">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <div className="swiper-wrapper row gutter-no cols-1">
          {/* {sliders.length > 0 && <HomeSlider data={sliders} />} */}
          <SwiperSlide>
            <div
              className="banner banner-fixed content-center intro-slide intro-slide1"
              style={{
                backgroundImage: `url(${bg1.src})`,
                backgroundColor: "#EEF4F4",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="banner banner-fixed content-center intro-slide intro-slide1"
              style={{
                backgroundImage: `url(${bg2.src})`,
                backgroundColor: "#EDEEF0",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${bg3.src})`,
              backgroundColor: "#D4D6D5",
            }}
          >
            <div
              className="banner banner-fixed intro-slide intro-slide1 content-center"
              style={{
                backgroundImage: `url(${bg3.src})`,
                backgroundColor: "#D4D6D5",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${bg4.src})`,
              backgroundColor: "#D4D6D5",
            }}
          >
            <div
              className="banner banner-fixed intro-slide intro-slide1 content-center"
              style={{
                backgroundImage: `url(${bg4.src})`,
                backgroundColor: "#D4D6D5",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${bg5.src})`,
              backgroundColor: "#D4D6D5",
            }}
          >
            <div
              className="banner banner-fixed intro-slide intro-slide1 content-center"
              style={{
                backgroundImage: `url(${bg5.src})`,
                backgroundColor: "#D4D6D5",
              }}
            ></div>
          </SwiperSlide>
        </div>
        <div className="custom-dots swiper-img-dots">
          {/* {sliders.length > 0 && (
            <HomeSliderThumbs
              data={sliders}
              handleSlideChange={handleSlideChange}
            />
          )} */}
          <Link
            href="#"
            className="active"
            onClick={() => {
              handleSlideChange(0);
            }}
          >
            <Image src={dot1} alt="Dot" width="70" height="70" />
          </Link>
          <Link
            href="#"
            onClick={() => {
              handleSlideChange(1);
            }}
          >
            <Image src={dot2} alt="Dot" width="70" height="70" />
          </Link>
          <Link
            href="#"
            onClick={() => {
              handleSlideChange(2);
            }}
          >
            <Image src={dot3} alt="Dot" width="70" height="70" />
          </Link>
          <Link
            href="#"
            onClick={() => {
              handleSlideChange(3);
            }}
          >
            <Image src={dot4} alt="Dot" width="70" height="70" />
          </Link>
          <Link
            href="#"
            onClick={() => {
              handleSlideChange(4);
            }}
          >
            <Image src={dot5} alt="Dot" width="70" height="70" />
          </Link>
        </div>
      </Swiper>
    </section>
  );
};

export default IntroSection;
