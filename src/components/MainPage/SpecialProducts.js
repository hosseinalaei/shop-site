import Image from "next/image";
import banner1 from "../../assets/images/demos/demo15/banner/banner-1.jpg";
import banner2 from "../../assets/images/demos/demo15/banner/banner-2.jpg";
import banner3 from "../../assets/images/demos/demo15/banner/banner-3.jpg";
import banner4 from "../../assets/images/demos/demo15/banner/banner-4.jpg";
import banner5 from "../../assets/images/demos/demo15/banner/banner-5.jpg";
import banner6 from "../../assets/images/demos/demo15/banner/banner-6.jpg";
import banner7 from "../../assets/images/demos/demo15/banner/banner-7.jpg";

import prod1 from "../../assets/images/demos/demo15/products/2-9-1.jpg";
import prod1s from "../../assets/images/demos/demo15/products/2-9-2.jpg";

import prod2 from "../../assets/images/demos/demo15/products/2-2-1.jpg";
import prod2s from "../../assets/images/demos/demo15/products/2-2-2.jpg";

import prod3 from "../../assets/images/demos/demo15/products/2-3-1.jpg";
import prod3s from "../../assets/images/demos/demo15/products/2-3-2.jpg";

import prod4 from "../../assets/images/demos/demo15/products/2-4-1.jpg";
import prod4s from "../../assets/images/demos/demo15/products/2-4-2.jpg";

import prod5 from "../../assets/images/demos/demo15/products/2-5-1.jpg";
import prod5s from "../../assets/images/demos/demo15/products/2-5-2.jpg";

import prod6 from "../../assets/images/demos/demo15/products/2-6-1.jpg";
import prod6s from "../../assets/images/demos/demo15/products/2-6-2.jpg";

import prod7 from "../../assets/images/demos/demo15/products/2-7-1.jpg";
import prod7s from "../../assets/images/demos/demo15/products/2-7-2.jpg";

import prod8 from "../../assets/images/demos/demo15/products/2-8-1.jpg";
import prod8s from "../../assets/images/demos/demo15/products/2-8-2.jpg";

import prod9 from "../../assets/images/demos/demo15/products/2-9-1.jpg";
import prod9s from "../../assets/images/demos/demo15/products/2-9-2.jpg";

import prod10 from "../../assets/images/demos/demo15/products/2-10-1.jpg";
import prod10s from "../../assets/images/demos/demo15/products/2-10-2.jpg";

import special1 from "../../assets/images/special-offer-1.png";
import special2 from "../../assets/images/special-offer-2.png";
import special3 from "../../assets/images/special-offer-3.png";

const SpecialProducts = () => {
  return (
    <div className="container">
      <div
        className="swiper-container swiper-theme category-banner-wrapper pt-2 pb-2 mt-10 mb-10"
        data-swiper-options="{
        'spaceBetween': 20,
        'slidesPerView': 3,
        'breakpoints': {
            '0': {
                'slidesPerView': 1
            },
            '768': {
                'slidesPerView': 2
            },
            '1200': {
                'slidesPerView': 3
            }
        }
        }"
      >
        <div className="swiper-wrapper row cols-md-3 cols-sm-2 cols-1">
          <div className="swiper-slide banner banner-1 banner-fixed br-sm">
            <figure className="banner-media">
              <Image
                src={special3}
                alt="Category Banner"
                width="580"
                height="300"
                style={{ backgroundColor: "#EAEAEA" }}
              />
            </figure>
            {/* <div className="banner-content y-50 text-right">
              <h4 className="banner-subtitle text-capitalize font-weight-normal">
                مجموعه جدید
              </h4>
              <h3 className="banner-title text-capitalize mb-0">
                فروش تابستانی
              </h3>
              <h5 className="banner-price-info font-weight-normal ls-25">
                تا{" "}
                <span className="text-primary font-weight-bolder">
                  30% تخفیف
                </span>
              </h5>
              <a
                href="demo15-shop.html"
                className="btn btn-dark btn-outline btn-rounded btn-icon-right"
              >
                اکنون بخرید <i className="w-icon-long-arrow-left"></i>
              </a>
            </div> */}
          </div>
          <div className="swiper-slide banner banner-2 banner-fixed br-sm">
            <figure className="banner-media">
              <Image
                src={special2}
                alt="Category Banner"
                width="580"
                height="300"
                style={{ bacgroundColor: "#EAEAEA" }}
              />
            </figure>
            {/* <div className="banner-content x-50 y-50 text-center">
              <h5 className="banner-price-info text-primary text-capitalize font-secondary">
                30% تخفیف کل سفارش خود را دریافت کنید!
              </h5>
              <h3 className="banner-title text-uppercase text-white ls-25">
                فروش جمعه سیاه
              </h3>
              <h4 className="banner-subtitle font-weight-normal">
                استفاده از کد{" "}
                <span className="text-white font-weight-bolder">BLKFRl40 </span>{" "}
                در پرداخت.
              </h4>
              <a
                href="shop-banner-sidebar.html"
                className="btn btn-primary btn-rounded"
              >
                اکنون کشف کنید
              </a>
            </div> */}
          </div>
          <div className="swiper-slide banner banner-3 banner-fixed br-sm">
            <figure className="banner-media">
              <Image
                src={special1}
                alt="Category Banner"
                width="580"
                height="300"
                style={{ bacgroundColor: "#EAEAEA" }}
              />
            </figure>
            {/* <div className="banner-content y-50">
              <h4 className="banner-subtitle text-capitalize font-weight-normal">
                تازه رسیده ها{" "}
              </h4>
              <h3 className="banner-title text-capitalize ls-25 mb-0">
                مردانه زنانه{" "}
              </h3>
              <h5 className="banner-price-info font-weight-normal ls-25">
                تا{" "}
                <span className="text-primary font-weight-bolder">
                  50% تخفیف
                </span>
              </h5>
              <a
                href="demo15-shop.html"
                className="btn btn-dark btn-outline btn-rounded btn-icon-right"
              >
                اکنون بخرید <i className="w-icon-long-arrow-left"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="row banner-product-wrapper pb-1 mb-10">
        <div className="banner-product col-xl-3 col-md-4 mb-4 mb-md-0">
          <h2 className="title pt-3 mb-5">محصولات ویژه</h2>
          <div className="banner banner-fixed overlay-zoom br-xs">
            <figure className="banner-media h-100">
              <Image
                src={banner4}
                alt="Product Banner"
                width="431"
                height="610"
                style={{ bacgroundColor: "#E2E2E2" }}
              />
            </figure>
            <div className="banner-content">
              <h5 className="banner-subtitle text-uppercase font-weight-bold">
                تجهیزات جانبی{" "}
              </h5>
              <h3 className="banner-title text-capitalize ls-25">
                همه ساعت های هوشمند
                <br />
                تخفیف{" "}
              </h3>
              <a
                href="demo15-shop.html"
                className="btn btn-dark btn-md btn-outline btn-rounded btn-icon-right"
              >
                اکنون بخرید <i className="w-icon-long-arrow-left"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="product-wrapper col-xl-9 col-md-8">
          <ul className="nav-links list-style-none d-flex flex-wrap filter-random-order">
            <li>
              <a href="demo15-shop.html">ساعت </a>
            </li>
            <li>
              <a href="demo15-shop.html">دیجیتال </a>
            </li>
            <li>
              <a href="demo15-shop.html">کیف دستی </a>
            </li>
            <li>
              <a href="demo15-shop.html">بلندگو </a>
            </li>
            <li>
              <a href="demo15-shop.html">پیراهن </a>
            </li>
            <li>
              <a href="demo15-shop.html">کفش ها </a>
            </li>
            <li>
              <a href="demo15-shop.html">تجهیزات جانبی </a>
            </li>
          </ul>
          <div
            className="swiper-container swiper-theme"
            data-swiper-options="{
                'spaceBetween': 20,
                'breakpoints': {
                    '0': {
                        'slidesPerView': 2
                    },
                    '992': {
                        'slidesPerView': 3
                    },
                    '1200': {
                        'slidesPerView': 4
                    },
                    '1520': {
                        'slidesPerView': 6
                    }
                }
                }"
          >
            <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
              <div className="swiper-slide product-col">
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod1}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod1s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">صدا ساز </a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod2}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod2s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">تسلی دهنده زنانه</a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide product-col">
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod3}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod3s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">جام </a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod4}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod4s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">ضبط کننده بی سیم</a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide product-col">
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod5}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod5s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-label-group">
                        <label className="product-label label-sale">
                          12% تخفیف{" "}
                        </label>
                      </div>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact"
                          data-until="2021, 9, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          00:00:00:00
                        </div>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">ساعت طلا </a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod6}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod6s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">جعبه شارژر مغناطیسی</a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide product-col">
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod7}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod7s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-label-group">
                        <label className="product-label label-sale">
                          19% تخفیف{" "}
                        </label>
                      </div>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact"
                          data-until="2021, 9, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          00:00:00:00
                        </div>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">باتری با ظرفیت انبوه</a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod8}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod8s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">اندازه گیری دیده بان</a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide product-col">
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod9}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod9s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">کیف اسپرت مردانه</a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <Image
                          src={prod10}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <Image
                          src={prod10s}
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">گوشی مینی بی سیم </a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide product-col">
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-11-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <img
                          src="assets/images/demos/demo15/products/2-11-2.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">
                          دستگاه ضبط الکترونیکی موبایل
                        </a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-12-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                        <img
                          src="assets/images/demos/demo15/products/2-12-2.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                      <div className="product-action-horizontal">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="افزودن به سبد "
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="علاقه مندیها"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="مقایسه"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="نمایش سریع"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">ست دوربین حرفه ای</a>
                      </h4>
                      <div className="product-price">
                        <ins className="new-price">60000 تومان</ins>
                        <del className="old-price">64000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-banner-wrapper2 row cols-md-2">
        <div className="banner banner-1 banner-fixed br-sm mb-4">
          <figure className="banner-media br-sm">
            <Image
              src={banner5}
              alt="Category Banner"
              width="880"
              height="300"
              style={{ backgroundColor: "#31343B" }}
            />
          </figure>
          <div className="banner-content y-50" style={{ paddingRight: "4rem" }}>
            <h4 className="banner-subtitle text-white text-uppercase font-weight-bold">
              تازه رسیده ها{" "}
            </h4>
            <h3 className="banner-title text-white ls-25">
              دوربین <span className="text-primary">4K</span>
            </h3>
            <h5 className="banner-price-info text-white font-weight-normal ls-25">
              شروع از 700000 تومان
            </h5>
            <a
              href="demo15-shop.html"
              className="btn btn-white btn-rounded btn-icon-right"
            >
              اکنون بخرید <i className="w-icon-long-arrow-left"></i>
            </a>
          </div>
        </div>
        <div className="banner banner-2 banner-fixed br-sm mb-4">
          <figure className="banner-media br-sm">
            <Image
              src={banner6}
              alt="Category Banner"
              width="880"
              height="300"
              style={{ backgroundColor: "#DEDEDE" }}
            />
          </figure>
          <div className="banner-content y-50" style={{ paddingRight: "4rem" }}>
            <h4 className="banner-subtitle text-uppercase font-weight-bold">
              پرفروش{" "}
            </h4>
            <h3 className="banner-title ls-25">
              مدل <span className="text-primary">ویژه </span>
            </h3>
            <h5 className="banner-price-info font-weight-normal ls-25">
              تا 70% تخفیف{" "}
            </h5>
            <a
              href="demo15-shop.html"
              className="btn btn-dark btn-rounded btn-icon-right"
            >
              اکنون بخرید <i className="w-icon-long-arrow-left"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="row banner-product-wrapper banner-product-wrapper2 pb-1 mb-10">
            <div className="banner-product col-xl-3 col-md-4 mb-4 mb-md-0">
              <h2 className="title pt-3 mb-5">محصولات پرفروش</h2>
              <div className="banner banner-fixed overlay-zoom br-xs">
                <figure className="banner-media h-100">
                  <Image
                    src={banner7}
                    alt="Product Banner"
                    width="431"
                    height="610"
                    style={{ backgroundColor: "#ECECEC" }}
                  />
                </figure>
                <div className="banner-content">
                  <h5 className="banner-subtitle text-uppercase font-weight-bold">
                    فروشنده برتر
                  </h5>
                  <h3 className="banner-title text-capitalize ls-25">
                    ظروف آشپزخانه
                    <br />
                    &و ابزار، غذاخوری
                  </h3>
                  <a
                    href="demo15-shop.html"
                    className="btn btn-dark btn-md btn-outline btn-rounded btn-icon-right"
                  >
                    اکنون بخرید <i className="w-icon-long-arrow-left"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="product-wrapper col-xl-9 col-md-8">
              <ul className="nav-links list-style-none d-flex flex-wrap">
                <li>
                  <a href="demo15-shop.html">تجهیزات جانبی </a>
                </li>
                <li>
                  <a href="demo15-shop.html">لباس ورزشی </a>
                </li>
                <li>
                  <a href="demo15-shop.html">لوازم خانگی </a>
                </li>
                <li>
                  <a href="demo15-shop.html">کتری </a>
                </li>
                <li>
                  <a href="demo15-shop.html">کوله پشتی </a>
                </li>
                <li>
                  <a href="demo15-shop.html">نورپردازی </a>
                </li>
              </ul>
              <div
                className="swiper-container swiper-theme"
                data-swiper-options="{
                'spaceBetween': 20,
                'breakpoints': {
                    '0': {
                        'slidesPerView': 2
                    },
                    '992': {
                        'slidesPerView': 3
                    },
                    '1200': {
                        'slidesPerView': 4
                    },
                    '1520': {
                        'slidesPerView': 6
                    }
                }
                }"
              >
                <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                  <div className="swiper-slide product-col">
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-9-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-9-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">کیف اسپرت مردانه</a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-10-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-10-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">گوشی مینی بی سیم </a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide product-col">
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-11-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-11-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">
                              دستگاه ضبط الکترونیکی موبایل
                            </a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-12-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-12-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">ست دوربین حرفه ای</a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide product-col">
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-1-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-1-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">ضبط موبایل</a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-2-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-2-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">تسلی دهنده زنانه</a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide product-col">
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-3-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-3-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-label-group">
                            <label className="product-label label-sale">
                              40% تخفیف{" "}
                            </label>
                          </div>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                          <div className="product-countdown-container">
                            <div
                              className="product-countdown countdown-compact"
                              data-until="2021, 9, 9"
                              data-format="DHMS"
                              data-compact="false"
                              data-labels-short="Days, Hours, Mins, Secs"
                            >
                              00:00:00:00
                            </div>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">جام </a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-4-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-4-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">ضبط کننده بی سیم</a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide product-col">
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-5-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-5-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-label-group">
                            <label className="product-label label-sale">
                              12% تخفیف{" "}
                            </label>
                          </div>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">ساعت طلا </a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <Image
                              src={prod6}
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <Image
                              src={prod6s}
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">
                              جعبه شارژر مغناطیسی
                            </a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide product-col">
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-7-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-7-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-label-group">
                            <label className="product-label label-sale">
                              12% تخفیف{" "}
                            </label>
                          </div>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">
                              باتری با ظرفیت انبوه
                            </a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-wrap">
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo15/products/2-8-1.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                            <img
                              src="assets/images/demos/demo15/products/2-8-2.jpg"
                              alt="Product"
                              width="300"
                              height="337"
                            />
                          </a>
                          <div className="product-action-horizontal">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="افزودن به سبد "
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="علاقه مندیها"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="مقایسه"
                            ></a>
                            <a
                              href="#"
                              className="btn-product-icon btn-quickview w-icon-search"
                              title="نمایش سریع"
                            ></a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">
                              اندازه گیری دیده بان
                            </a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default SpecialProducts;
