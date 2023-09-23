const NewProducts = () => {
  return (
    <div className="container">
      <div className="title-link-wrapper latest-title after-none pt-6 mb-0 appear-animate">
        <h2 className="title font-size-xl mr-auto mb-3">آخرین محصولات</h2>
        <ul className="nav-links list-style-none d-flex align-items-center flex-wrap">
          <li>
            <a href="demo15-shop.html">تجهیزات جانبی </a>
          </li>
          <li>
            <a href="demo15-shop.html">ساعت </a>
          </li>
          <li>
            <a href="demo15-shop.html">آی پد </a>
          </li>
          <li>
            <a href="demo15-shop.html">درون </a>
          </li>
          <li>
            <a href="demo15-shop.html">هدفون </a>
          </li>
          <li>
            <a href="demo15-shop.html">دوربین ها </a>
          </li>
        </ul>
      </div>
      <div
        className="swiper-container swiper-theme pb-1 mb-8 appear-animate"
        data-swiper-options="{
        'spaceBetween': 20,
        'breakpoints': {
            '0': {
                'slidesPerView': 2
            },
            '768': {
                'slidesPerView': 4
            },
            '992': {
                'slidesPerView': 6
            },
            '1200': {
                'slidesPerView': 8
            }
        }
        }"
      >
        <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
          <div className="swiper-slide product-wrap">
            <div className="product text-center">
              <figure className="product-media">
                <a href="product-default.html">
                  <img
                    src="assets/images/demos/demo15/products/2-1-2.jpg"
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
                  <a href="product-default.html">صدا ساز </a>
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
          <div className="swiper-slide product-wrap">
            <div className="product text-center">
              <figure className="product-media">
                <a href="product-default.html">
                  <img
                    src="assets/images/demos/demo15/products/1-1-2.jpg"
                    alt="Product"
                    width="300"
                    height="337"
                  />
                  <img
                    src="assets/images/demos/demo15/products/1-1-2.jpg"
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
                  <img
                    src="assets/images/demos/demo15/products/1-3-1.jpg"
                    alt="Product"
                    width="300"
                    height="337"
                  />
                  <img
                    src="assets/images/demos/demo15/products/1-3-2.jpg"
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
                  <img
                    src="assets/images/demos/demo15/products/1-4-1.jpg"
                    alt="Product"
                    width="300"
                    height="337"
                  />
                  <img
                    src="assets/images/demos/demo15/products/1-4-2.jpg"
                    alt="Product"
                    width="300"
                    height="337"
                  />
                </a>
                <div className="product-label-group">
                  <label className="product-label label-sale">12% تخفیف </label>
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
                  <a href="product-default.html">گوشی مینی بی سیم </a>
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
                  <img
                    src="assets/images/demos/demo15/products/1-5-1.jpg"
                    alt="Product"
                    width="300"
                    height="337"
                  />
                  <img
                    src="assets/images/demos/demo15/products/1-5-2.jpg"
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
                  <a href="product-default.html">دستگاه هشدار شارژ</a>
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
                  <img
                    src="assets/images/demos/demo15/products/1-2-1.jpg"
                    alt="Product"
                    width="300"
                    height="337"
                  />
                  <img
                    src="assets/images/demos/demo15/products/1-2-2.jpg"
                    alt="Product"
                    width="300"
                    height="337"
                  />
                </a>
                <div className="product-label-group">
                  <label className="product-label label-sale">12% تخفیف </label>
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
                  <a href="product-default.html">کیف سفید مدرسه</a>
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
                  <img
                    src="assets/images/demos/demo15/products/2-10-2.jpg"
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
          <div className="swiper-slide product-wrap">
            <div className="product text-center">
              <figure className="product-media">
                <a href="product-default.html">
                  <img
                    src="assets/images/demos/demo15/products/2-9-2.jpg"
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
                <div className="product-label-group">
                  <label className="product-label label-sale">40% تخفیف </label>
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
                  <a href="product-default.html">کیف اسپرت مردانه</a>
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
                  <img
                    src="assets/images/demos/demo15/products/2-8-2.jpg"
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
                  <a href="product-default.html">اندازه گیری دیده بان</a>
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
                  <img
                    src="assets/images/demos/demo15/products/2-7-2.jpg"
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
                  <a href="product-default.html">باتری با ظرفیت انبوه</a>
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
                  <img
                    src="assets/images/demos/demo15/products/2-6-1.jpg"
                    alt="Product"
                    width="300"
                    height="337"
                  />
                  <img
                    src="assets/images/demos/demo15/products/2-6-2.jpg"
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
      </div>
      <h2 className="title title-brands text-left title-client pb-1 mt-3 mb-4 appear-animate">
        مشتریان ما{" "}
      </h2>
      <div
        className="swiper-container swiper-theme brands-wrapper bg-white br-sm mb-10 appear-animate"
        data-swiper-options="{
        'autoplay': false,
        'autoplayTimeout': 4000,
        'loop': false,
        'spaceBetween': 0,
        'breakpoints': {
            '0': {
                'slidesPerView': 2
            },
            '576': {
                'slidesPerView': 3
            },
            '768': {
                'slidesPerView': 4
            },
            '992': {
                'slidesPerView': 6
            },
            '1200': {
                'slidesPerView': 8
            }
        }
        }"
      >
        <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
          <figure className="swiper-slide">
            <img
              src="assets/images/demos/demo15/brands/1.png"
              alt="Brand"
              width="310"
              height="180"
            />
          </figure>
          <figure className="swiper-slide">
            <img
              src="assets/images/demos/demo15/brands/2.png"
              alt="Brand"
              width="310"
              height="180"
            />
          </figure>
          <figure className="swiper-slide">
            <img
              src="assets/images/demos/demo15/brands/3.png"
              alt="Brand"
              width="310"
              height="180"
            />
          </figure>
          <figure className="swiper-slide">
            <img
              src="assets/images/demos/demo15/brands/4.png"
              alt="Brand"
              width="310"
              height="180"
            />
          </figure>
          <figure className="swiper-slide">
            <img
              src="assets/images/demos/demo15/brands/5.png"
              alt="Brand"
              width="310"
              height="180"
            />
          </figure>
          <figure className="swiper-slide">
            <img
              src="assets/images/demos/demo15/brands/6.png"
              alt="Brand"
              width="310"
              height="180"
            />
          </figure>
          <figure className="swiper-slide">
            <img
              src="assets/images/demos/demo15/brands/7.png"
              alt="Brand"
              width="310"
              height="180"
            />
          </figure>
          <figure className="swiper-slide">
            <img
              src="assets/images/demos/demo15/brands/8.png"
              alt="Brand"
              width="310"
              height="180"
            />
          </figure>
        </div>
      </div>
      <div className="category-banner-wrapper3 row cols-md-2 pt-2 appear-animate">
        <div className="banner banner-1 banner-fixed br-sm mb-4">
          <figure className="banner-media br-sm">
            <img
              src="assets/images/demos/demo15/banner/banner-8.jpg"
              alt="Category Banner"
              width="880"
              height="300"
              style={{ backgroundColor: "#DEDEDE" }}
            />
          </figure>
          <div className="banner-content y-50">
            <h3 className="banner-title text-uppercase font-weight-normal">
              خرید جدیدترین{" "}
              <span className="font-weight-bolder">کالاهای ورزشی</span>
            </h3>
            <span className="d-block divider"></span>
            <h5 className="banner-price-info font-weight-normal">
              شروع در{" "}
              <span className="text-primary font-weight-bolder ls-50">
                170000 تومان{" "}
              </span>
            </h5>
          </div>
        </div>
        <div className="banner banner-2 banner-fixed br-sm mb-4">
          <figure className="banner-media br-sm">
            <img
              src="assets/images/demos/demo15/banner/banner-9.jpg"
              alt="Category Banner"
              width="880"
              height="300"
              style={{ backgroundColor: "#434446" }}
            />
          </figure>
          <div className="banner-content y-50">
            <h3 className="banner-title text-white text-uppercase font-weight-normal">
              گوشی جدید{" "}
              <span className="font-weight-bolder">برای آهنگ پاپ</span>
            </h3>
            <span className="d-block divider"></span>
            <h5 className="banner-price-info text-white font-weight-normal">
              فقط با{" "}
              <span className="text-primary font-weight-bolder ls-50">
                15000 تومان
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div className="widget-wrapper row appear-animate">
        <div className="widget widget-products col-lg-3 mb-5 appear-animate">
          <h4 className="title">تازه رسیده ها </h4>
          <div className="swiper">
            <div
              className="swiper-container swiper-theme nav-top"
              data-swiper-options="{
                    'nav': true,
                    'slidesPerView': 1,
                    'spaceBetween': 0
                    }"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide widget-col">
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-1-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">صدا ساز </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">152000 تومان</ins>
                        <del className="old-price">182000 تومان</del>
                      </div>
                    </div>
                  </div>
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-2-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">تسلی دهنده زنانه</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">182000 تومان</ins>
                        <del className="old-price">202000 تومان</del>
                      </div>
                    </div>
                  </div>
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-3-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">جام </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">182000 تومان</ins>
                        <del className="old-price">192000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide widget-col">
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/1-1-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">ساعت طلا </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">152000 تومان</ins>
                        <del className="old-price">182000 تومان</del>
                      </div>
                    </div>
                  </div>
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/1-2-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">کیف سفید مدرسه</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">182000 تومان</ins>
                        <del className="old-price">202000 تومان</del>
                      </div>
                    </div>
                  </div>
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/1-3-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">کمربند جیر مردانه</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">182000 تومان</ins>
                        <del className="old-price">192000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="swiper-button-next font-weight-normal"></button>
              <button className="swiper-button-prev font-weight-normal"></button>
            </div>
          </div>
        </div>
        <div className="banner banner-1 widget-banner banner-fixed col-lg-6 br-sm mb-6">
          <figure className="banner-media br-sm">
            <img
              src="assets/images/demos/demo15/banner/banner-10.jpg"
              alt="Category Banner"
              width="880"
              height="665"
              style={{ backgroundColor: "#DBDBDB" }}
            />
          </figure>
          <div className="banner-content d-flex flex-column">
            <h5 className="banner-date text-primary">2021</h5>
            <h4 className="banner-subtitle font-weight-normal">مجموعه </h4>
            <h3 className="banner-title text-uppercase font-weight-bold ls-25 mb-0">
              زنانه{" "}
            </h3>
            <p className="text-dark font-weight-normal">پرفروش ترین لباس</p>
            <span className="d-block divider mb-6"></span>
            <a
              href="shop-banner-sidebar.html"
              className="btn btn-dark-light btn-rounded"
            >
              مجموعه ما را مشاهده کنید
            </a>
          </div>
        </div>
        <div className="widget widget-products col-lg-3 mb-5 appear-animate">
          <h4 className="title">حراج</h4>
          <div className="swiper">
            <div
              className="swiper-container swiper-theme nav-top"
              data-swiper-options="{
                    'nav': true,
                    'slidesPerView': 1,
                    'spaceBetween': 0
                    }"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide widget-col">
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-4-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">ضبط کننده بی سیم</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">152000 تومان</ins>
                        <del className="old-price">182000 تومان</del>
                      </div>
                    </div>
                  </div>
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-5-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">ساعت طلا </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">182000 تومان</ins>
                        <del className="old-price">202000 تومان</del>
                      </div>
                    </div>
                  </div>
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-6-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">جعبه شارژر موبایل</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">182000 تومان</ins>
                        <del className="old-price">192000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide widget-col">
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-7-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">باتری با ظرفیت انبوه</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">152000 تومان</ins>
                        <del className="old-price">182000 تومان</del>
                      </div>
                    </div>
                  </div>
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-8-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">اندازه گیری دیده بان</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">182000 تومان</ins>
                        <del className="old-price">202000 تومان</del>
                      </div>
                    </div>
                  </div>
                  <div className="product product-widget">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/demos/demo15/products/2-9-1.jpg"
                          alt="Product"
                          width="300"
                          height="337"
                        />
                      </a>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">کیف اسپرت مردانه</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">182000 تومان</ins>
                        <del className="old-price">192000 تومان</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button className="swiper-button-next font-weight-normal"></button>
              <button className="swiper-button-prev font-weight-normal"></button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="title-link-wrapper after-none mt-6 mb-3 appear-animate">
        <h2 className="title title-post font-size-xl mb-0 pt-2">
          از وبلاگ ما{" "}
        </h2>
        <a href="blog-listing.html" className="mb-0 font-weight-bold ls-25">
          نمایش همه مقالات <i className="w-icon-long-arrow-left"></i>
        </a>
      </div>
      <div
        className="swiper-container swiper-theme post-wrapper mb-9 appear-animate"
        data-swiper-options="{
        'spaceBetween': 20,

        'breakpoints': {
            '0': {
                'slidesPerView': 1
            },
            '576': {
                'slidesPerView': 2
            },
            '768': {
                'slidesPerView': 3
            },
            '992': {
                'slidesPerView': 4
            }
            }
        }"
      >
        <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2">
          <div className="swiper-slide post text-center">
            <figure className="post-media br-sm">
              <a href="post-single.html">
                <img
                  src="assets/images/demos/demo15/blog/post-1.jpg"
                  alt="Post"
                  width="430"
                  height="278"
                  style={{ backgroundColor: "#A8A7A6" }}
                />
              </a>
              <div className="post-calendar">
                <span className="post-day">30</span>
                <span className="post-month">اردیبهشت </span>
              </div>
            </figure>
            <div className="post-details">
              <h4 className="post-title">
                <a href="post-single.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </a>
              </h4>
              <a
                href="post-single.html"
                className="btn btn-link btn-dark btn-underline"
              >
                ادامه مطلب <i className="w-icon-long-arrow-left"></i>
              </a>
            </div>
          </div>
          <div className="swiper-slide post text-center">
            <figure className="post-media br-sm">
              <a href="post-single.html">
                <img
                  src="assets/images/demos/demo15/blog/post-2.jpg"
                  alt="Post"
                  width="430"
                  height="278"
                  style={{ backgroundColor: "#95A0A6" }}
                />
              </a>
              <div className="post-calendar">
                <span className="post-day">30</span>
                <span className="post-month">اردیبهشت </span>
              </div>
            </figure>
            <div className="post-details">
              <h4 className="post-title">
                <a href="post-single.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </a>
              </h4>
              <a
                href="post-single.html"
                className="btn btn-link btn-dark btn-underline"
              >
                ادامه مطلب <i className="w-icon-long-arrow-left"></i>
              </a>
            </div>
          </div>
          <div className="swiper-slide post text-center">
            <figure className="post-media br-sm">
              <a href="post-single.html">
                <img
                  src="assets/images/demos/demo15/blog/post-3.jpg"
                  alt="Post"
                  width="430"
                  height="278"
                  style={{ backgroundColor: "#EDF1F2" }}
                />
              </a>
              <div className="post-calendar">
                <span className="post-day">30</span>
                <span className="post-month">اردیبهشت </span>
              </div>
            </figure>
            <div className="post-details">
              <h4 className="post-title">
                <a href="post-single.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. با تولید سادگی
                </a>
              </h4>
              <a
                href="post-single.html"
                className="btn btn-link btn-dark btn-underline"
              >
                ادامه مطلب <i className="w-icon-long-arrow-left"></i>
              </a>
            </div>
          </div>
          <div className="swiper-slide post text-center">
            <figure className="post-media br-sm">
              <a href="post-single.html">
                <img
                  src="assets/images/demos/demo15/blog/post-4.jpg"
                  alt="Post"
                  width="430"
                  height="278"
                  style={{ backgroundColor: "#F6F6F6" }}
                />
              </a>
              <div className="post-calendar">
                <span className="post-day">30</span>
                <span className="post-month">اردیبهشت </span>
              </div>
            </figure>
            <div className="post-details">
              <h4 className="post-title">
                <a href="post-single.html">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </a>
              </h4>
              <a
                href="post-single.html"
                className="btn btn-link btn-dark btn-underline"
              >
                ادامه مطلب <i className="w-icon-long-arrow-left"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default NewProducts;
