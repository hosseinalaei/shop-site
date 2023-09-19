import Image from "next/image";
import dot1 from "../../assets/images/sl1.jpeg";
import dot2 from "../../assets/images/sl2.webp";
import dot3 from "../../assets/images/s3.jpg";

import bg1 from "../../assets/images/sl1.jpeg";
import bg2 from "../../assets/images/sl2.webp";
import bg3 from "../../assets/images/s3.jpg";

import slide1 from "../../assets/images/demos/demo9/slides/1.jpeg";
import slide2 from "../../assets/images/demos/demo9/slides/2.jpeg";
import slide3 from "../../assets/images/demos/demo9/slides/3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import { useEffect, useRef, useState } from "react";
import SingleSlide from "../Header/SingleSlide";

const IntroSection = () => {
  const [sliderData, setSliderData] = useState(null);
  const swiperRef = useRef(null);

  const getSlides = async () => {
    try {
      const response = await fetch(
        "https://138.201.167.230:5050/Slider/GetActiveSliders"
      );
      const resData = await response.json();
      console.log(resData);
      setSliderData(resData)
    } catch (error) {
      console.log("getCategories error", error);
    }
  };
  const handleSlideChange = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  useEffect(() => {
    getSlides();
    const swiperContainer = swiperRef.current;
  }, []);
  console.log(sliderData);
  return (
    <section className="intro-section mb-6">
      <Swiper
        // className="swiper-container swiper-theme animation-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl"
        ref={swiperRef}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <div className="swiper-wrapper row gutter-no cols-1">
          {sliderData && sliderData.data.map(item =>(
            <SingleSlide id={item.id} sliderBgImg ={item.sliderBackImageName} key={item.id}/>
          ))}
          {/* <SwiperSlide
          // className="swiper-slide banner banner-fixed intro-slide intro-slide2"
          >
            <div
              className="banner banner-fixed content-center intro-slide intro-slide1"
              style={{
                backgroundImage: `url(${bg2.src})`,
                backgroundColor: "#EDEEF0",
              }}
            >
              <div className="container">
                <div className="banner-content d-inline-block y-50">
                  <div
                    className="slide-animate"
                    data-animation-options="{
                                        'name': 'fadeInDownShorter', 'duration': '1s'
                                    }"
                  >
                    {/* <h5 className="banner-subtitle text-primary text-uppercase font-weight-bold mb-2">
                      فقط این هفته!
                    </h5>
                    <h3 className="banner-title text-capitalize ls-25">
                      کفش طلایی اورجینال
                    </h3>
                    <hr className="banner-divider bg-dark" />
                    <p className="text-dark">
                      ارسال رایگان تمامی سفارشات <strong>80000 تومان</strong>
                    </p>
                    <a
                      href="demo9-shop.html"
                      className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                    >
                      اکنون بخرید <i className="w-icon-long-arrow-left"></i>
                    </a> */}
                  {/* </div>
                </div> */}
                {/* <figure
                  className="slide-image skrollable slide-animate floating-item"
                  data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
                  data-child-depth="0.2"
                >
                  <Image
                    src={slide2}
                    alt="Slide"
                    width={448}
                    height={510}
                    // style={{ backgroundColor: "#DBDBDD" }}
                    data-bottom-top="transform: translatex(-10vh);"
                    data-top-bottom="transform: translateX(10vh);"
                  />
                </figure> */}
              {/* </div>
            </div> */}
          
        </div>
        <div className="custom-dots swiper-img-dots">
          <a
            href="#"
            className="active"
            onClick={() => {
              handleSlideChange(0);
            }}
          >
            <Image src={dot1} alt="Dot" width="70" height="70" />
          </a>
          <a
            href="#"
            onClick={() => {
              handleSlideChange(1);
            }}
          >
            <Image src={dot2} alt="Dot" width="70" height="70" />
          </a>
          <a
            href="#"
            onClick={() => {
              handleSlideChange(2);
            }}
          >
            <Image src={dot3} alt="Dot" width="70" height="70" />
          </a>
        </div>
      </Swiper>
       
    </section>
  );
};

export default IntroSection;
