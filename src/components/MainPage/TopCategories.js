const TopCategories = () => {
    return (  
        <div className="container-fluid">
          {/* <div
            className="swiper-container swiper-theme icon-box-wrapper appear-animate br-sm bg-white mt-2 mb-8"
            data-swiper-options="{
        'loop': false,
        'spaceBetween': 0,
        'breakpoints': {
            '0': {
                'slidesPerView': 1
            },
            '576': {
                'slidesPerView': 2
            },
            '992': {
                'slidesPerView': 3
            },
            '1200': {
                'slidesPerView': 4
            }
        }
        }"
          >
            <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
              <div className="swiper-slide icon-box icon-box-side text-dark">
                <span className="icon-box-icon icon-shipping">
                  <i className="w-icon-truck"></i>
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title">ارسال رایگان و مرجوعی</h4>
                  <p className="text-default">برای تمام سفارشات بیش از 99 دلار</p>
                </div>
              </div>
              <div className="swiper-slide icon-box icon-box-side text-dark">
                <span className="icon-box-icon icon-payment">
                  <i className="w-icon-bag"></i>
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title">پرداخت امن</h4>
                  <p className="text-default">ما تضمین می کنیم</p>
                </div>
              </div>
              <div className="swiper-slide icon-box icon-box-side text-dark icon-box-money">
                <span className="icon-box-icon icon-money">
                  <i className="w-icon-money"></i>
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title">تضمین بازگشت پول</h4>
                  <p className="text-default">پس از 30 روز بازگشت</p>
                </div>
              </div>
              <div className="swiper-slide icon-box icon-box-side text-dark icon-box-chat">
                <span className="icon-box-icon icon-chat">
                  <i className="w-icon-chat"></i>
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title">پشتیبانی مشتری</h4>
                  <p className="text-default">
                    24/7 با ما تماس بگیرید یا ایمیل بزنید
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="top-categories-wrapper appear-animate">
            <h2 className="title title-center text-capitalize pt-7 mb-7">
              دسته بندی های برتر ماه
            </h2>
            <div className="pl-2 pr-2">
              <div
                className="swiper-container swiper-theme shadow-swiper"
                data-swiper-options="{
                'spaceBetween': 40,
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
                <div className="swiper-wrapper row cols-xl-8 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                  <div className="swiper-slide category category-ellipse">
                    <figure className="category-media">
                      <a href="demo15-shop.html">
                        <img
                          src="assets/images/demos/demo15/categories/cat-1.jpg"
                          alt="Categroy"
                          width="190"
                          height="190"
                          style={{ backgroundColor: "#C1C6CC" }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo15-shop.html">مد </a>
                      </h4>
                    </div>
                  </div>
                  <div className="swiper-slide category category-ellipse">
                    <figure className="category-media">
                      <a href="demo15-shop.html">
                        <img
                          src="assets/images/demos/demo15/categories/cat-2.jpg"
                          alt="Categroy"
                          width="190"
                          height="190"
                          style={{ backgroundColor: "#9BC4CA" }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo15-shop.html">کفش </a>
                      </h4>
                    </div>
                  </div>
                  <div className="swiper-slide category category-ellipse">
                    <figure className="category-media">
                      <a href="demo15-shop.html">
                        <img
                          src="assets/images/demos/demo15/categories/cat-3.jpg"
                          alt="Categroy"
                          width="190"
                          height="190"
                          style={{ backgroundColor: "#5D6A73" }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo15-shop.html">آشپزخانه </a>
                      </h4>
                    </div>
                  </div>
                  <div className="swiper-slide category category-ellipse">
                    <figure className="category-media">
                      <a href="demo15-shop.html">
                        <img
                          src="assets/images/demos/demo15/categories/cat-4.jpg"
                          alt="Categroy"
                          width="190"
                          height="190"
                          style={{ backgroundColor: "#8692A0" }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo15-shop.html">گوشی </a>
                      </h4>
                    </div>
                  </div>
                  <div className="swiper-slide category category-ellipse">
                    <figure className="category-media">
                      <a href="demo15-shop.html">
                        <img
                          src="assets/images/demos/demo15/categories/cat-5.jpg"
                          alt="Categroy"
                          width="190"
                          height="190"
                          style={{ backgroundColor: "#E2E2E2" }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo15-shop.html">لوازم آرایشی </a>
                      </h4>
                    </div>
                  </div>
                  <div className="swiper-slide category category-ellipse">
                    <figure className="category-media">
                      <a href="demo15-shop.html">
                        <img
                          src="assets/images/demos/demo15/categories/cat-6.jpg"
                          alt="Categroy"
                          width="190"
                          height="190"
                          style={{ backgroundColor: "#596F7C" }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo15-shop.html">دوربین ها </a>
                      </h4>
                    </div>
                  </div>
                  <div className="swiper-slide category category-ellipse">
                    <figure className="category-media">
                      <a href="demo15-shop.html">
                        <img
                          src="assets/images/demos/demo15/categories/cat-7.jpg"
                          alt="Categroy"
                          width="190"
                          height="190"
                          style={{ backgroundColor: "#B8BCBF" }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo15-shop.html">ساعت </a>
                      </h4>
                    </div>
                  </div>
                  <div className="swiper-slide category category-ellipse">
                    <figure className="category-media">
                      <a href="demo15-shop.html">
                        <img
                          src="assets/images/demos/demo15/categories/cat-8.jpg"
                          alt="Categroy"
                          width="190"
                          height="190"
                          style={{ backgroundColor: "#65737C" }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo15-shop.html">بچه ها </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
    );
}
 
export default TopCategories;