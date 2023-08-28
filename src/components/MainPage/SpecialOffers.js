import Image from "next/image";

import prod1 from "../../assets/images/demos/demo15/products/1-1-1.jpg"
import prod2 from "../../assets/images/demos/demo15/products/1-1-2.jpg"

import prod3 from "../../assets/images/demos/demo15/products/1-2-1.jpg"
import prod4 from "../../assets/images/demos/demo15/products/1-2-2.jpg"

import prod5 from "../../assets/images/demos/demo15/products/1-3-1.jpg"
import prod6 from "../../assets/images/demos/demo15/products/1-3-2.jpg"

import prod7 from '../../assets/images/demos/demo15/products/1-4-1.jpg'
import prod8 from '../../assets/images/demos/demo15/products/1-4-2.jpg'

import prod9 from '../../assets/images/demos/demo15/products/1-5-1.jpg'
import prod10 from '../../assets/images/demos/demo15/products/1-5-2.jpg'



const SpecialOffers = () => {
    return ( 
        <div className="grey-section">
          <div className="container-fluid">
            <div className="special-offers-wrapper d-flex bg-white pt-6 pb-1">
              <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-5 d-flex align-items-center justify-content-center">
                <div>
                  <h2 className="title">پیشنهادهای ویژه!</h2>
                  <h4 className="price-info">
                    تا
                    <span className="text-primary ls-25">50% تخفیف</span>
                  </h4>
                  <div className="product-countdown-container text-white align-items-center">
                    <label className="d-block text-default">
                      عجله کن! پایان پیشنهاد در:
                    </label>
                    <div
                      className="product-countdown countdown-compact font-weight-bold text-dark"
                      data-until="+10d"
                      data-relative="true"
                      data-compact="false"
                      data-labels-short="true"
                    >
                      10روز,00:00:00
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-10 col-xl-9 col-lg-8 col-md-7">
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options="{
                'spaceBetween': 20,
                'breakpoints': {
                    '0': {
                        'slidesPerView': 2
                    },
                    '768': {
                        'slidesPerView': 3
                    },
                    '992': {
                        'slidesPerView': 4
                    },
                    '1200': {
                        'slidesPerView': 5
                    }
                }
                }"
                >
                  <div className="swiper-wrapper row cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                    <div className="swiper-slide product-wrap">
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
                              src={prod2}
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
                            <a href="product-default.html">ساعت طلا </a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">60000 تومان</ins>
                            <del className="old-price">64000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-wrap">
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
                              src={prod4}
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
                            <a href="product-default.html">کیف سفید مدرسه</a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">22000 تومان</ins>
                            <del className="old-price">28000 تومان </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-wrap">
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
                              src={prod6}
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
                            <a href="product-default.html">کمربند جیر مردانه</a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">75000 تومان</ins>
                            <del className="old-price">79000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-wrap">
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
                              src={prod8}
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
                            <ins className="new-price">85000 تومان </ins>
                            <del className="old-price">125000 تومان </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-wrap">
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
                              src={prod10}
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
                            <a href="product-default.html">تغییر ماشین آلارم</a>
                          </h4>
                          <div className="product-price">
                            <ins className="new-price">78000 تومان</ins>
                            <del className="old-price">88000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="notification-wrapper d-flex bg-dark br-sm mb-10 justify-content-center"
              style={{ animationDuration: "1.2s" }}
            >
              <div className="content d-flex align-items-center">
                <i className="w-icon-mobile mr-2 mb-1"></i>
                <p className="font-weight-normal ls-normal">
                  امروز برنامه جدید ما را دانلود کنید! پیشنهادات ما را فقط برای
                  موبایل از دست ندهید و با اندریود پلی خرید کنید.
                </p>
                <a
                  href="#"
                  className="btn btn-white btn-outline btn-rounded btn-icon-right font-weight-bold text-capitalize ml-auto"
                >
                  دانلود <i className="w-icon-long-arrow-down"></i>
                </a>
              </div>
            </div>
            
          </div>
        </div>
     );
}
 
export default SpecialOffers;