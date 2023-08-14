import Footer from "@/components/Footer/Footer";
import StickyFooter from "@/components/Footer/StickyFooter";
import MobileMenu from "@/components/Menu/MobileMenu";

const Compare = () => {
  return (
    <>
      <div class="page-wrapper">

        <main class="main">
          <div class="page-header">
            <div class="container">
              <h1 class="page-title">مقایسه کردن</h1>
            </div>
          </div>

          <nav class="breadcrumb-nav mb-2">
            <div class="container">
              <ul class="breadcrumb">
                <li>
                  <a href="demo1.html">خانه </a>
                </li>
                <li>مقایسه کردن</li>
              </ul>
            </div>
          </nav>

          <div class="page-content mb-10 pb-2">
            <div class="container">
              <div class="compare-table">
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-products">
                  <div class="compare-col compare-field">محصول</div>
                  <div class="compare-col compare-product">
                    <a href="#" class="btn remove-product">
                      <i class="w-icon-times-solid"></i>
                    </a>
                    <div class="product text-center">
                      <figure class="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/products/elements/1.jpg"
                            alt="Product"
                            width="228"
                            height="257"
                          />
                        </a>
                        <div class="product-action-vertical">
                          <a
                            href="#"
                            class="btn-product-icon btn-cart w-icon-cart"
                          ></a>
                          <a
                            href="#"
                            class="btn-product-icon btn-wishlist w-icon-heart"
                          ></a>
                        </div>
                      </figure>
                      <div class="product-details">
                        <h3 class="product-name">
                          <a href="product-default.html">
                            ساعت مچی مشکی الکترونیکی
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="compare-col compare-product">
                    <a href="#" class="btn remove-product">
                      <i class="w-icon-times-solid"></i>
                    </a>
                    <div class="product text-center">
                      <figure class="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/products/elements/2.jpg"
                            alt="Product"
                            width="228"
                            height="257"
                          />
                        </a>
                        <div class="product-action-vertical">
                          <a
                            href="#"
                            class="btn-product-icon btn-cart w-icon-cart"
                          ></a>
                          <a
                            href="#"
                            class="btn-product-icon btn-wishlist w-icon-heart"
                          ></a>
                        </div>
                      </figure>
                      <div class="product-details">
                        <h3 class="product-name">
                          <a href="product-default.html">کفش ورزشی تابستانی </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="compare-col compare-product">
                    <a href="#" class="btn remove-product">
                      <i class="w-icon-times-solid"></i>
                    </a>
                    <div class="product text-center">
                      <figure class="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/products/elements/3.jpg"
                            alt="Product"
                            width="228"
                            height="257"
                          />
                        </a>
                        <div class="product-action-vertical">
                          <a
                            href="#"
                            class="btn-product-icon btn-cart w-icon-cart"
                          ></a>
                          <a
                            href="#"
                            class="btn-product-icon btn-wishlist w-icon-heart"
                          ></a>
                        </div>
                      </figure>
                      <div class="product-details">
                        <h3 class="product-name">
                          <a href="product-default.html">ساعت طراحی جذاب</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="compare-col compare-product">
                    <a href="#" class="btn remove-product">
                      <i class="w-icon-times-solid"></i>
                    </a>
                    <div class="product text-center">
                      <figure class="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/products/elements/4-1.jpg"
                            alt="Product"
                            width="228"
                            height="257"
                          />
                        </a>
                        <div class="product-action-vertical">
                          <a
                            href="#"
                            class="btn-product-icon btn-cart w-icon-cart"
                          ></a>
                          <a
                            href="#"
                            class="btn-product-icon btn-wishlist w-icon-heart"
                          ></a>
                        </div>
                      </figure>
                      <div class="product-details">
                        <h3 class="product-name">
                          <a href="product-default.html">موس بازی پرجمعیت</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-price">
                  <div class="compare-col compare-field">قیمت </div>
                  <div class="compare-col compare-value">
                    <div class="product-price">
                      <span class="new-price">80000 تومان </span>
                    </div>
                  </div>
                  <div class="compare-col compare-value">
                    <div class="product-price">
                      <span class="new-price">86000 تومان</span>
                      <span class="old-price">120000 تومان</span>
                    </div>
                  </div>
                  <div class="compare-col compare-value">
                    <div class="product-price">
                      <span class="new-price">30000 تومان</span>
                    </div>
                  </div>
                  <div class="compare-col compare-value">
                    <div class="product-price">
                      <span class="new-price">220000 تومان</span>
                    </div>
                  </div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-availability">
                  <div class="compare-col compare-field">دسترسی</div>
                  <div class="compare-col compare-value">در انبار</div>
                  <div class="compare-col compare-value">در انبار</div>
                  <div class="compare-col compare-value">در انبار</div>
                  <div class="compare-col compare-value">در انبار</div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-description">
                  <div class="compare-col compare-field">توضیحات</div>
                  <div class="compare-col compare-value">
                    <ul class="list-style-none list-type-check">
                      <li>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی
                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..
                      </li>
                      <li>
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                        که لازم است و برای شرایط فعلی.
                      </li>
                      <li>
                        مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                        گیرد..
                      </li>
                    </ul>
                  </div>
                  <div class="compare-col compare-value">
                    <ul class="list-style-none list-type-check">
                      <li>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی
                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..
                      </li>
                      <li>
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                        که لازم است و برای شرایط فعلی.
                      </li>
                      <li>
                        مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                        گیرد..
                      </li>
                    </ul>
                  </div>
                  <div class="compare-col compare-value">
                    <ul class="list-style-none list-type-check">
                      <li>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی
                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..
                      </li>
                      <li>
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                        که لازم است و برای شرایط فعلی.
                      </li>
                      <li>
                        مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                        گیرد..
                      </li>
                    </ul>
                  </div>
                  <div class="compare-col compare-value">
                    <ul class="list-style-none list-type-check">
                      <li>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی
                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است..
                      </li>
                      <li>
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                        که لازم است و برای شرایط فعلی.
                      </li>
                      <li>
                        مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                        گیرد..
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-reviews">
                  <div class="compare-col compare-field">
                    رتبه بندی ها و نظرات
                  </div>
                  <div class="compare-col compare-rating">
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style={{"width": "80%"}}></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="#" class="rating-reviews">
                        (3 نظر )
                      </a>
                    </div>
                  </div>
                  <div class="compare-col compare-rating">
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style={{"width": "100%"}}></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="#" class="rating-reviews">
                        (5 نظر )
                      </a>
                    </div>
                  </div>
                  <div class="compare-col compare-rating">
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style={{"width": "60%"}}></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="#" class="rating-reviews">
                        (8 نظر )
                      </a>
                    </div>
                  </div>
                  <div class="compare-col compare-rating">
                    <div class="ratings-container">
                      <div class="ratings-full">
                        <span class="ratings" style={{"width": "80%"}}></span>
                        <span class="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="#" class="rating-reviews">
                        (3 نظر )
                      </a>
                    </div>
                  </div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-category">
                  <div class="compare-col compare-field">دسته </div>
                  <div class="compare-col compare-value">ساعت</div>
                  <div class="compare-col compare-value">کفش</div>
                  <div class="compare-col compare-value">ساعت مچی</div>
                  <div class="compare-col compare-value">الکترونیک</div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-meta">
                  <div class="compare-col compare-field">کدها</div>
                  <div class="compare-col compare-value">MS46891344</div>
                  <div class="compare-col compare-value">MS46891389</div>
                  <div class="compare-col compare-value">MS46891349</div>
                  <div class="compare-col compare-value">MS4689158</div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-color">
                  <div class="compare-col compare-field">رنگ</div>
                  <div class="compare-col compare-value">
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#ff0000"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#00ff00"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#0000ff"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#ECEC23"}}
                      title="قرمز"
                    ></span>
                  </div>
                  <div class="compare-col compare-value">
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#000000"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#C0C0C0"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#808080"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#0080C0"}}
                      title="قرمز"
                    ></span>
                  </div>
                  <div class="compare-col compare-value">
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#000000"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#95E8E8"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#FA0AF3"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#0A4BFA"}}
                      title="قرمز"
                    ></span>
                  </div>
                  <div class="compare-col compare-value">
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#000000"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#0000A0"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#42FDF9"}}
                      title="قرمز"
                    ></span>
                    <span
                      class="swatch"
                      style={{"backgroundColor": "#9BA3A4"}}
                      title="قرمز"
                    ></span>
                  </div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-size">
                  <div class="compare-col compare-field">سایز</div>
                  <div class="compare-col compare-value">متوسط ، کوچک</div>
                  <div class="compare-col compare-value">متوسط ، بزرگ</div>
                  <div class="compare-col compare-value">کوچک</div>
                  <div class="compare-col compare-value">متوسط</div>
                </div>
                <div class="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-brand">
                  <div class="compare-col compare-field">برند</div>
                  <div class="compare-col compare-value">اپل</div>
                  <div class="compare-col compare-value">New Balance</div>
                  <div class="compare-col compare-value">Node Js</div>
                  <div class="compare-col compare-value">Green Grass</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    <StickyFooter />
    <a
        id="scroll-top"
        className="scroll-top"
        href="#top"
        title="بالا"
        role="button"
      >
        {" "}
        <i className="w-icon-angle-up"></i>{" "}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
        >
          {" "}
          <circle
            id="progress-indicator"
            fill="transparent"
            stroke="#000000"
            strokeMiterlimit="10"
            cx="35"
            cy="35"
            r="34"
            style={{ "stroke-dasharray": "16.4198, 400" }}
          ></circle>{" "}
        </svg>{" "}
      </a>

      <MobileMenu />
    </>
  );
};

export default Compare;
