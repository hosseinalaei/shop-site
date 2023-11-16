import Image from "next/image";

import prod1 from "../../assets/images/demos/demo15/products/1-1-1.jpg";
import prod2 from "../../assets/images/demos/demo15/products/1-1-2.jpg";

import prod3 from "../../assets/images/demos/demo15/products/1-2-1.jpg";
import prod4 from "../../assets/images/demos/demo15/products/1-2-2.jpg";

import prod5 from "../../assets/images/demos/demo15/products/1-3-1.jpg";
import prod6 from "../../assets/images/demos/demo15/products/1-3-2.jpg";

import prod7 from "../../assets/images/demos/demo15/products/1-4-1.jpg";
import prod8 from "../../assets/images/demos/demo15/products/1-4-2.jpg";

import prod9 from "../../assets/images/demos/demo15/products/1-5-1.jpg";
import prod10 from "../../assets/images/demos/demo15/products/1-5-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const SpecialOffers = () => {
  return (
    <div className="grey-section">
      <div className="container-fluid">
        <div className="special-offers-wrapper d-flex d-sm-flex bg-white pt-6 pb-1">
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-5 d-flex align-items-center justify-content-center product-lg br-sm">
            <div>
              <h2 className="title">پیشنهادهای ویژه!</h2>
              <h4 className="price-info">
                تا
                <span className="text-primary ls-25">50% تخفیف</span>
              </h4>
              <div className="product-countdown-container text-white align-items-center ">
                <label className="d-block text-default">
                  عجله کن! پایان پیشنهاد در:
                </label>
                <div
                  className="product-countdown countdown-compact font-weight-bold"
                  // data-until="+10d"
                  // data-relative="true"
                  // data-compact="false"
                  // data-labels-short="true"
                >
                  <span class="countdown-row countdown-show4">
                    <span class="countdown-section">
                      <span class="countdown-amount">00</span>
                      <span class="countdown-period">روز</span>
                    </span>
                    <span class="countdown-section">
                      <span class="countdown-amount">00</span>
                      <span class="countdown-period">ساعت</span>
                    </span>
                    <span class="countdown-section">
                      <span class="countdown-amount">00</span>
                      <span class="countdown-period">دقیقه</span>
                    </span>
                    <span class="countdown-section">
                      <span class="countdown-amount">00</span>
                      <span class="countdown-period">ثانیه</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-10 col-xl-9 col-lg-8 col-md-7">
            <Swiper
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}

              // className="swiper-container swiper-theme"
              // data-swiper-options="{
              //   'spaceBetween': 20,
              //   'breakpoints': {
              //       '0': {
              //           'slidesPerView': 2
              //       },
              //       '768': {
              //           'slidesPerView': 3
              //       },
              //       '992': {
              //           'slidesPerView': 4
              //       },
              //       '1200': {
              //           'slidesPerView': 5
              //       }
              //   }
              //   }"
            >
              <div className="swiper-wrapper row cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                <SwiperSlide
                // className="swiper-slide product-wrap"
                >
                  <div className="product text-center">
                    <figure className="product-media">
                      <Link href="product-default.html">
                        <Image
                          src={prod1}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod2}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </Link>
                      <div className="product-action-horizontal">
                        <Link
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></Link>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <Link href="product-default.html">ساعت طلا </Link>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                // className="swiper-slide product-wrap"
                >
                  <div className="product text-center">
                    <figure className="product-media">
                      <Link href="product-default.html">
                        <Image
                          src={prod3}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod4}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </Link>
                      <div className="product-action-horizontal">
                        <Link
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></Link>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <Link href="product-default.html">کیف سفید مدرسه</Link>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">22000 تومان</ins>
                        <del className="old-price">28000 تومان </del>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                // className="swiper-slide product-wrap"
                >
                  <div className="product text-center">
                    <figure className="product-media">
                      <Link href="product-default.html">
                        <Image
                          src={prod5}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod6}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </Link>
                      <div className="product-action-horizontal">
                        <Link
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></Link>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <Link href="product-default.html">
                          کمربند جیر مردانه
                        </Link>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">75000 تومان</ins>
                        <del className="old-price">79000 تومان</del>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                // className="swiper-slide product-wrap"
                >
                  <div className="product text-center">
                    <figure className="product-media">
                      <Link href="product-default.html">
                        <Image
                          src={prod7}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod8}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </Link>
                      <div className="product-action-horizontal">
                        <Link
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></Link>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <Link href="product-default.html">
                          گوشی مینی بی سیم{" "}
                        </Link>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">85000 تومان </ins>
                        <del className="old-price">125000 تومان </del>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                // className="swiper-slide product-wrap"
                >
                  <div className="product text-center">
                    <figure className="product-media">
                      <Link href="product-default.html">
                        <Image
                          src={prod9}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod10}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </Link>
                      <div className="product-action-horizontal">
                        <Link
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></Link>
                        <Link
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></Link>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <Link href="product-default.html">
                          تغییر ماشین آلارم
                        </Link>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">78000 تومان</ins>
                        <del className="old-price">88000 تومان</del>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>

        <div
          className="notification-wrapper d-flex bg-dark br-sm mb-10 justify-content-center"
          style={{ animationDuration: "1.2s" }}
        >
          <div
            className="content d-flex align-items-center"
            style={{ maxWidth: "80%", width: "100%", padding: "2rem 0" }}
          >
            <i className="w-icon-mobile mr-2 mb-1"></i>
            <p
              className="font-weight-normal ls-normal"
              style={{
                fontSize: "2.6rem",
                marginTop: "0",
                marginRight: "-0.1rem",
                marginBottom: "0rem",
                marginLeft: "2rem",
                color: "#eee",
                lineHeight: 1,
              }}
            >
              امروز برنامه جدید ما را دانلود کنید! پیشنهادات ما را فقط برای
              موبایل از دست ندهید و با اندریود پلی خرید کنید.
            </p>
            <Link
              href="#"
              className="btn btn-white btn-outline btn-rounded btn-icon-right font-weight-bold text-capitalize ml-auto"
            >
              دانلود <i className="w-icon-long-arrow-down"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
