// 'use client'
import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import slide1 from "../../assets/images/demos/demo15/sliders/slide-1.jpg";
import slide2 from "../../assets/images/demos/demo15/sliders/slide-2.jpg";
import slide3 from "../../assets/images/demos/demo15/sliders/slide-3.jpg";

const IntroSection = () => {
  return (
    <section className="intro-section mb-6">
      <Swiper
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
      </Swiper>
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
