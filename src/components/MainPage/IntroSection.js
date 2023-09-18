import Image from "next/image";
import dot1 from "../../assets/images/demos/demo9/slides/1.jpeg";
import dot2 from "../../assets/images/demos/demo9/slides/2.jpeg";
import dot3 from "../../assets/images/demos/demo9/slides/3.png";

import bg1 from "../../assets/images/demos/demo9/slides/1.jpeg";
import bg2 from "../../assets/images/demos/demo9/slides/2.jpeg";
import bg3 from "../../assets/images/demos/demo9/slides/3.png";

import slide1 from "../../assets/images/demos/demo9/slides/1.jpeg";
import slide2 from "../../assets/images/demos/demo9/slides/2.jpeg";
import slide3 from "../../assets/images/demos/demo9/slides/3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import { useEffect, useRef } from "react";

const IntroSection = () => {
  const swiperRef = useRef(null)

  const handleSlideChange = (index) =>{
    swiperRef.current.swiper.slideTo(index)
  }

  useEffect(() =>{
    const swiperContainer = swiperRef.current;
  },[])
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
          <SwiperSlide
          // className="swiper-slide banner banner-fixed content-center intro-slide intro-slide1"
          >
            <div
              className="banner banner-fixed content-center intro-slide intro-slide1"
              style={{
                backgroundImage: `url(${bg1.src})`,
                // backgroundColor: "#EEF4F4",
              }}
            >
              <div className="container">
                <div className="banner-content d-inline-block y-50">
                  <div
                    data-animation-options="{
                                        'name': 'zoomIn', 'duration': '1s'
                                    }"
                  >
                    {/* <h5 className="banner-subtitle text-uppercase font-weight-bold">
                      معاملات و تبلیغات
                    </h5>
                    <h3 className="banner-title text-capitalize ls-25">
                      <span className="text-primary">فصل زمستان</span>
                      <br />
                      مجموعه سبک زندگی مد
                    </h3>
                    <a
                      href="demo9-shop.html"
                      className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                    >
                      اکنون بخرید <i className="w-icon-long-arrow-left"></i>
                    </a> */}
                  </div>
                </div>
                {/* <figure
                  className="slide-image skrollable slide-animate floating-item"
                  data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true,'scalarY':0}"
                  data-child-depth="0.4"
                >
                  <Image
                    src={slide1}
                    alt="Slide"
                    width={448}
                    height={510}
                    // style={{ backgroundColor: "#DBDBDD" }}
                    data-bottom-top="transform: translatex(-10vh);"
                    data-top-bottom="transform: translateX(10vh);"
                  />
                </figure> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
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
                  </div>
                </div>
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
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            // className="swiper-slide banner banner-fixed intro-slide intro-slide3 content-center"
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
            >
              <div className="container">
                <div className="banner-content y-50">
                  <div
                    className="content-left mr-auto slide-animate mb-4 mb-lg-0"
                    data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }"
                  >
                    {/* <h5 className="banner-subtitle text-white br-xs">
                      فقط تا پایان فط این هفته
                    </h5>
                    <h3 className="banner-title text-uppercase font-weight-normal mb-0 ls-25">
                      مدل <strong className="ml-2">فروش ویژه </strong>
                    </h3>
                    <p className="text-dark font-weight-normal text-uppercase mb-0 ls-25">
                      تا{" "}
                      <strong className="text-uppercase text-secondary font-weight-bolder">
                        80% تخفیف{" "}
                      </strong>
                    </p> */}
                  </div>
                  <div
                    className="content-right slide-animate"
                    data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }"
                  >
                    {/* <h4 className="text-white text-uppercase ls-25">
                      راحتی بیشتر در اطراف را انتخاب می کند
                    </h4>
                    <a
                      href="demo9-shop.html"
                      className="btn btn-dark btn-rounded btn-icon-right"
                    >
                      اکنون بخرید <i className="w-icon-long-arrow-left"></i>
                    </a> */}
                  </div>
                </div>
                {/* <figure className="slide-image skrollable slide-animate">
                  <Image
                    src={slide3}
                    alt="Slide"
                    width={448}
                    height={510}
                    // style={{ backgroundColor: "#DBDBDD" }}
                    data-bottom-top="transform: translatex(-10vh);"
                    data-top-bottom="transform: translateX(10vh);"
                  />
                </figure> */}
              </div>
            </div>
          </SwiperSlide>
          
        </div>
        <div className="custom-dots swiper-img-dots">
          <a href="#" className="active" onClick={() =>{handleSlideChange(0)}}>
            <Image src={dot1} alt="Dot" width="70" height="70" />
          </a>
          <a href="#" onClick={() =>{handleSlideChange(1)}}>
            <Image src={dot2} alt="Dot" width="70" height="70" />
          </a>
          <a href="#" onClick={() =>{handleSlideChange(2)}}>
            <Image src={dot3} alt="Dot" width="70" height="70" />
          </a>
          
        </div>
      </Swiper>
      {/* <Swiper
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="swiper-slide banner banner-fixed intro-slide1">
            <figure className="banner-media">
              <Image
                src={slide1}
                alt="Slide"
                width="1903"
                height="600"
                style={{ backgroundColor: "#DBDBDD" }}
              />
            </figure>
            <div className="banner-content x-50 y-50 text-center">
              <h4
                className="banner-date slide-animate"
                data-animation-options="{
                        'name': 'fadeInDownShorter',
                        'duration': '1s',
                        'delay': '.2s'
                        }"
              >
                1401
              </h4>
              <h3
                className="banner-title text-dark text-uppercase slide-animate"
                data-animation-options="{
                        'name': 'fadeInUpShorter',
                        'duration': '1s',
                        'delay': '.2s'
                        }"
              >
                لباس زنانه
              </h3>
              <p
                className="banner-subtitle text-default pl-4 pr-4 slide-animate"
                data-animation-options="{
                        'name': 'fadeInUpShorter',
                        'duration': '1s',
                        'delay': '.4s'
                    }"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. با تولید سادگی نامفهوم از صنعت چاپ
                و با استفاده از طراحان گرافیک است..
              </p>
              <a
                href="demo15-shop.html"
                className="btn btn-dark btn-rounded slide-animate"
                data-animation-options="{
                        'name': 'fadeInUpShorter',
                        'duration': '1s',
                        'delay': '.8s'
                        }"
              >
                مجموعه فروشگاه
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide banner banner-fixed intro-slide2">
            <figure className="banner-media">
              <Image
                src={slide2}
                alt="Slide"
                width="1903"
                height="600"
                style={{ backgroundColor: "#DEE0DF" }}
              />
            </figure>
            <div className="banner-content y-50">
              <h4
                className="banner-subtitle text-primary text-uppercase font-weight-bold slide-animate"
                data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '.5s', 'delay': '.5s'}"
              >
                فط این هفته فقط!
              </h4>
              <h3
                className="banner-title text-dark slide-animate"
                data-animation-options="{
                        'name': 'fadeInRightShorter',
                        'duration': '1s',
                        'delay': '.2s'
                        }"
              >
                برقی با کیفیت بالا
                <br /> تجهیزات
              </h3>
              <hr
                className="divider slide-animate"
                data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.5s'}"
              />
              <h5
                className="banner-price-info text-dark font-weight-normal slide-animate"
                data-animation-options="{
                        'name': 'fadeInRightShorter',
                        'duration': '1s',
                        'delay': '.4s'
                        }"
              >
                ارسال رایگان برای تمامی سفارشات بالای 180.00 تومان
              </h5>
              <a
                href="demo15-shop.html"
                className="btn btn-dark btn-rounded btn-icon-right mb-1 slide-animate"
                data-animation-options="{
                        'name': 'fadeInRightShorter',
                        'duration': '1s',
                        'delay': '.8s'
                        }"
              >
                اکنون بخرید
                <i className="w-icon-long-arrow-left ml-1"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
      {/* <div
            className="swiper-container swiper-theme animation-slider"
            data-swiper-options="{
            'slidesPerView' : 1,
            'loop':true,
            'effect':'fade',
            'autoplay': {
                'delay': 8000,
                'disableOnInteraction': false
            }
        }"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide banner banner-fixed intro-slide1">
                <figure className="banner-media">
                  <Image
                    src={slide1}
                    alt="Slide"
                    width="1903"
                    height="600"
                    style={{"backgroundColor": "#DBDBDD"}}
                  />
                </figure>
                <div className="banner-content x-50 y-50 text-center">
                  <h4
                    className="banner-date slide-animate"
                    data-animation-options="{
                        'name': 'fadeInDownShorter',
                        'duration': '1s',
                        'delay': '.2s'
                        }"
                  >
                    1401
                  </h4>
                  <h3
                    className="banner-title text-dark text-uppercase slide-animate"
                    data-animation-options="{
                        'name': 'fadeInUpShorter',
                        'duration': '1s',
                        'delay': '.2s'
                        }"
                  >
                    لباس زنانه
                  </h3>
                  <p
                    className="banner-subtitle text-default pl-4 pr-4 slide-animate"
                    data-animation-options="{
                        'name': 'fadeInUpShorter',
                        'duration': '1s',
                        'delay': '.4s'
                    }"
                  >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است..
                  </p>
                  <a
                    href="demo15-shop.html"
                    className="btn btn-dark btn-rounded slide-animate"
                    data-animation-options="{
                        'name': 'fadeInUpShorter',
                        'duration': '1s',
                        'delay': '.8s'
                        }"
                  >
                    مجموعه فروشگاه
                  </a>
                </div>
              </div>
              <div className="swiper-slide banner banner-fixed intro-slide2">
                <figure className="banner-media">
                  <Image
                    src={slide2}
                    alt="Slide"
                    width="1903"
                    height="600"
                    style={{"backgroundColor": "#DEE0DF"}}
                  />
                </figure>
                <div className="banner-content y-50">
                  <h4
                    className="banner-subtitle text-primary text-uppercase font-weight-bold slide-animate"
                    data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '.5s', 'delay': '.5s'}"
                  >
                    فط این هفته فقط!
                  </h4>
                  <h3
                    className="banner-title text-dark slide-animate"
                    data-animation-options="{
                        'name': 'fadeInRightShorter',
                        'duration': '1s',
                        'delay': '.2s'
                        }"
                  >
                    برقی با کیفیت بالا
                    <br /> تجهیزات
                  </h3>
                  <hr
                    className="divider slide-animate"
                    data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.5s'}"
                  />
                  <h5
                    className="banner-price-info text-dark font-weight-normal slide-animate"
                    data-animation-options="{
                        'name': 'fadeInRightShorter',
                        'duration': '1s',
                        'delay': '.4s'
                        }"
                  >
                    ارسال رایگان برای تمامی سفارشات بالای 180.00 تومان
                  </h5>
                  <a
                    href="demo15-shop.html"
                    className="btn btn-dark btn-rounded btn-icon-right mb-1 slide-animate"
                    data-animation-options="{
                        'name': 'fadeInRightShorter',
                        'duration': '1s',
                        'delay': '.8s'
                        }"
                  >
                    اکنون بخرید
                    <i className="w-icon-long-arrow-left ml-1"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide banner banner-fixed intro-slide3">
                <figure className="banner-media">
                  <Image
                    src={slide3}
                    alt="Slide"
                    width="1903"
                    height="600"
                    style={{"backgroundColor": "#CECECE"}}
                  />
                </figure>
                <div className="banner-content y-50 ml-4 mr-4">
                  <span
                    className="d-block text-dark text-uppercase font-weight-normal slide-animate"
                    data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.5s'}"
                  >
                    معاملات و تبلیغات
                  </span>
                  <h4
                    className="banner-subtitle text-primary mb-0 ml-0 slide-animate"
                    data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '.5s', 'delay': '.5s'}"
                  >
                    فصل تابستان
                  </h4>
                  <h3
                    className="banner-title text-dark font-weight-bold slide-animate"
                    data-animation-options="{
                        'name': 'fadeInRightShorter',
                        'duration': '1s',
                        'delay': '.2s'
                        }"
                  >
                    سبک زندگی مد
                    <br />
                    مجموعه
                  </h3>
                  <a
                    href="demo15-shop.html"
                    className="btn btn-dark btn-outline btn-rounded btn-icon-right mb-1 slide-animate"
                    data-animation-options="{
                        'name': 'fadeInRightShorter',
                        'duration': '1s',
                        'delay': '.8s'
                        }"
                  >
                    اکنون بخرید
                    <i className="w-icon-long-arrow-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
    </section>
  );
};

export default IntroSection;
