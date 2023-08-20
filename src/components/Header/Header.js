import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <div className="header-middle">
        <div className="container-fluid">
          <div className="header-left mr-md-4">
            <a href="#" className="mobile-menu-toggle  w-icon-hamburger"></a>
            <a href="demo15.html" className="logo ml-lg-0">
              <img
                src="assets/images/demos/demo15/logo.png"
                alt="logo"
                width="144"
                height="45"
              />
            </a>
            <form
              method="get"
              action="#"
              className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
            >
              <div className="select-box">
                <select id="category" name="category" className="pb-0">
                  <option value="">دسته بندیها </option>
                  <option value="4">مدل </option>
                  <option value="5">مبلمان </option>
                  <option value="6">کفش </option>
                  <option value="7">ورزشی </option>
                  <option value="8">بازی </option>
                  <option value="9">کامپیوتر </option>
                  <option value="10">الکترونیکی </option>
                  <option value="11">آشپرخانه </option>
                  <option value="12">لباس </option>
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                name="search"
                id="search"
                placeholder="جستجو کنید ..."
                required
              />
              <button className="btn btn-search" type="submit">
                <i className="w-icon-search"></i>
              </button>
            </form>
          </div>
          <div className="header-right ml-4">
            <div className="header-call d-xs-show d-lg-flex align-items-center">
              <a href="tel:#" className="w-icon-call"></a>
              <div className="call-info d-lg-show">
                <h4 className="chat font-weight-normal font-size-md text-normal text-light mb-0">
                  <a href="mailto:#">
                    چت زنده
                    <span className="ls-normal">یا :</span>
                  </a>
                </h4>
                <a
                  href="tel:#"
                  className="phone-number font-weight-bolder ls-50"
                >
                  0(800)123-456
                </a>
              </div>
            </div>
            <a
              className="compare label-down link d-xs-show"
              href="compare.html"
            >
              <i className="w-icon-compare"></i>
            </a>
            <a
              className="wishlist label-down link d-xs-show"
              href="wishlist.html"
            >
              <i className="w-icon-heart"></i>
            </a>
            <div className="dropdown cart-dropdown cart-offcanvas d-flex mr-0 mr-lg-2">
              <div className="cart-overlay"></div>
              <a href="#" className="cart-toggle label-down link">
                <span className="cart-label d-flex flex-column justify-content-center text-right d-lg-show">
                  سبد خرید
                  <b className="cart-price d-block font-weight-bolder">
                    0 تومان{" "}
                  </b>
                </span>
                <i className="w-icon-cart">
                  <span className="cart-count">2</span>
                </i>
              </a>
              <div className="dropdown-box">
                <div className="cart-header">
                  <span>سبد خرید </span>
                  <a href="#" className="btn-close">
                    بستن <i className="w-icon-long-arrow-left"></i>
                  </a>
                </div>

                <div className="products">
                  <div className="product product-cart">
                    <div className="product-detail">
                      <a href="product-default.html" className="product-name">
                        الیس بافتنی بژ
                        <br />
                        کفش دونده تیک
                      </a>
                      <div className="price-box">
                        <span className="product-quantity">1</span>
                        <span className="product-price">25600 تومان</span>
                      </div>
                    </div>
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/cart/product-1.jpg"
                          alt="product"
                          height="84"
                          width="94"
                        />
                      </a>
                    </figure>
                    <button className="btn btn-link btn-close">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <div className="product product-cart">
                    <div className="product-detail">
                      <a href="product-default.html" className="product-name">
                        پینا کاربردی آبی
                        <br />
                        لباس جین جلویی پینا
                      </a>
                      <div className="price-box">
                        <span className="product-quantity">1</span>
                        <span className="product-price">32000 تومان</span>
                      </div>
                    </div>
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/images/cart/product-2.jpg"
                          alt="product"
                          width="84"
                          height="94"
                        />
                      </a>
                    </figure>
                    <button className="btn btn-link btn-close">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>

                <div className="cart-total">
                  <label>مجموع: </label>
                  <span className="price">58000 تومان</span>
                </div>

                <div className="cart-action">
                  <a
                    href="cart.html"
                    className="btn btn-dark btn-outline btn-rounded"
                  >
                    سبد خرید{" "}
                  </a>
                  <a
                    href="checkout.html"
                    className="btn btn-primary  btn-rounded"
                  >
                    پرداخت{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
        <div className="container-fluid">
          <div className="inner-wrap">
            <div className="header-left">
              <div className="dropdown category-dropdown">
                <a
                  href="#"
                  className="category-toggle text-capitalize pl-0 bg-white"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  data-display="static"
                  title="کاوش دسته بندیها "
                >
                  <i className="w-icon-category"></i>
                  <span>همه بخش ها</span>
                </a>

                <div className="dropdown-box text-default">
                  <ul className="menu vertical-menu category-menu">
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-tshirt2"></i>مدل
                      </a>
                      <ul className="megamenu">
                        <li>
                          <h4 className="menu-title">زنانه </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                تازه رسیده ها{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                پرفروش ترین ها{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                پر طرفدار{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">تن پوش </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">کفش ها </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">کیسه ها </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                تجهیزات جانبی{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                جواهرات و ساعت
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="menu-title">زنانه </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                تازه رسیده ها{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                پرفروش ترین ها{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                پر طرفدار{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">تن پوش </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">کفش ها </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">کیسه ها </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                تجهیزات جانبی{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                جواهرات و ساعت
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="banner-fixed menu-banner menu-banner2">
                            <figure>
                              <img
                                src="assets/images/menu/banner-2.jpg"
                                alt="Menu Banner"
                                width="235"
                                height="347"
                              />
                            </figure>
                            <div className="banner-content">
                              <div className="banner-price-info mb-1 ls-normal">
                                دریافت کنید
                                <strong className="text-primary text-uppercase">
                                  20 % تخفیف
                                </strong>
                              </div>
                              <h3 className="banner-title">فروش داغ </h3>
                              <a
                                href="demo15-shop.html"
                                className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                              >
                                اکنون بخرید{" "}
                                <i className="w-icon-long-arrow-left"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-home"></i>خانه و باغ
                      </a>
                      <ul className="megamenu">
                        <li>
                          <h4 className="menu-title">بدروم </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                تخت، قاب و پایه
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">کمد </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                {" "}
                                میزهای خواب{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">تخت کودک</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">اسلحه </a>
                            </li>
                          </ul>

                          <h4 className="menu-title mt-1">هال </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                میز های قهوه{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">صندلی </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">جداول </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                فوتون و مبل تختخواب شو
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                کابینت و صندوقچه
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="menu-title">دفتر </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                صندلی های اداری{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">میز </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                قفسه های کتاب{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                قفسه پوشه ها{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                اتاق استراحت جداول{" "}
                              </a>
                            </li>
                          </ul>

                          <h4 className="menu-title mt-1">
                            آشپزخانه و غذاخوری
                          </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                ست های غذاخوری{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                کابینت های نگهداری آشپزخانه
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                قفسه های بشرز{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                صندلی های غذاخوری{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                اتاق غذاخوری جداول{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                چهارپایه بار{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="menu-banner banner-fixed menu-banner3">
                            <figure>
                              <img
                                src="assets/images/menu/banner-3.jpg"
                                alt="Menu Banner"
                                width="235"
                                height="461"
                              />
                            </figure>
                            <div className="banner-content">
                              <h4 className="banner-subtitle font-weight-normal text-white mb-1">
                                سرویس بهداشتی{" "}
                              </h4>
                              <h3 className="banner-title text-white">
                                فروش مبلمان{" "}
                              </h3>
                              <div className="banner-price-info text-white font-weight-normal ls-25">
                                تا{" "}
                                <span className="text-primary text-uppercase font-weight-bold">
                                  25% تخفیف
                                </span>
                              </div>
                              <a
                                href="demo15-shop.html"
                                className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right"
                              >
                                اکنون بخرید{" "}
                                <i className="w-icon-long-arrow-left"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-electronics"></i>الکترونیک
                      </a>
                      <ul className="megamenu">
                        <li>
                          <h4 className="menu-title">لپ تاپ و کامپیوتر</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                کامپیوترهای رومیزی
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">مانیتور </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">لپ تاپ </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                هارد دیسک و فضای ذخیره سازی
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                کامپیوتر تجهیزات جانبی{" "}
                              </a>
                            </li>
                          </ul>

                          <h4 className="menu-title mt-1">تلویزیون و ویدئو</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                تلویزیون ها{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                بلندگوهای صوتی خانگی
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                پروژکتورها{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                دستگاه های پخش رسانه
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="menu-title">دوربین های دیجیتال </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                دوربین های دیجیتال SLR
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                دوربین های ورزشی و اکشن
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                لنزهای دوربین{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                چاپگر عکس{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                کارت های حافظه دیجیتال
                              </a>
                            </li>
                          </ul>

                          <h4 className="menu-title mt-1">تلفن های همراه </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                تلفن های حامل{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                گوشی های قفل نشده{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                قاب های گوشی و موبایل
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                شارژر تلفن همراه
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="menu-banner banner-fixed menu-banner4">
                            <figure>
                              <img
                                src="assets/images/menu/banner-4.jpg"
                                alt="Menu Banner"
                                width="235"
                                height="433"
                              />
                            </figure>
                            <div className="banner-content">
                              <h4 className="banner-subtitle font-weight-normal">
                                معاملات هفته
                              </h4>
                              <h3 className="banner-title text-white">
                                صرفه جویی در گوشی هوشمند
                              </h3>
                              <div className="banner-price-info text-primary font-weight-bolder text-uppercase text-primary">
                                20% تخفیف
                              </div>
                              <a
                                href="demo15-shop.html"
                                className="btn btn-white btn-outline btn-sm btn-rounded"
                              >
                                اکنون بخرید
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-furniture"></i> مبلمان
                      </a>
                      <ul className="megamenu type2">
                        <li className="row">
                          <div className="col-md-3 col-lg-3 col-6">
                            <h4 className="menu-title">مبلمان </h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  مبل و کاناپه
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">صندلی </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  چارچوب های تخت{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  میزهای کنار تخت{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  میز آرایش
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-lg-3 col-6">
                            <h4 className="menu-title">نورپردازی </h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <a href="shop-fullwidth-banner.html">لامپ </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  لامپ ها{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  چراغ های سقفی{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  چراغ های دیواری{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  روشنایی حمام
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-lg-3 col-6">
                            <h4 className="menu-title">لوازم جانبی خانه </h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  تجهیزات جانبی تزئینی{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  شمع و نگهدارنده
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  عطر خانگی{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">آینه </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  ساعت ها{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-lg-3 col-6">
                            <h4 className="menu-title">باغ و فضای باز</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  تجهیزات باغی
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  ماشین های چمن زنی{" "}
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  واشرهای تحت فشار
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  تمام ابزار باغبانی
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  غذاخوری در فضای باز
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-6">
                            <div className="banner banner-fixed menu-banner5 br-xs">
                              <figure>
                                <img
                                  src="assets/images/menu/banner-5.jpg"
                                  alt="Banner"
                                  width="410"
                                  height="123"
                                  style={{ backgroundColor: "#D2D2D2" }}
                                />
                              </figure>
                              <div className="banner-content text-right y-50">
                                <h4 className="banner-subtitle font-weight-normal text-default text-capitalize">
                                  تازه رسیده ها{" "}
                                </h4>
                                <h3 className="banner-title text-capitalize">
                                  مبل شگفت انگیز{" "}
                                </h3>
                                <div className="banner-price-info font-weight-normal ls-normal">
                                  شروع در <strong>125000 تومان</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="banner banner-fixed menu-banner5 br-xs">
                              <figure>
                                <img
                                  src="assets/images/menu/banner-6.jpg"
                                  alt="Banner"
                                  width="410"
                                  height="123"
                                  style={{ backgroundColor: "#9F9888" }}
                                />
                              </figure>
                              <div className="banner-content y-50">
                                <h4 className="banner-subtitle font-weight-normal text-white text-capitalize">
                                  پرفروش{" "}
                                </h4>
                                <h3 className="banner-title text-capitalize text-white">
                                  صندلی و لامپ
                                </h3>
                                <div className="banner-price-info font-weight-normal ls-normal text-white">
                                  از جانب <strong>165000 تومان</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-heartbeat"></i>سلامت و زیبایی
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-gift"></i>ایده های هدیه
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-gamepad"></i>اسباب بازی و بازی
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-ice-cream"></i>آشپزی
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-ios"></i>گوشی های هوشمند
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-camera"></i>دوربین و عکس
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-ruby"></i>تجهیزات جانبی
                      </a>
                    </li>
                    <li>
                      <a
                        href="demo15-shop.html"
                        className="font-weight-bold text-uppercase text-primary ls-25"
                      >
                        نمایش همه دسته بندیها{" "}
                        <i className="w-icon-angle-left"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <nav className="main-nav ml-0">
                <ul className="menu">
                  <li className="active">
                    <a href="demo15.html">خانه </a>
                  </li>
                  <li>
                    <a href="vendor-dokan-store.html">فروشنده </a>
                    <ul>
                      <li>
                        <a href="vendor-dokan-store-list.html">
                          فهرست فروشگاه{" "}
                        </a>
                        <ul>
                          <li>
                            <a href="vendor-dokan-store-list.html">
                              فهرست فروشگاه 1
                            </a>
                          </li>
                          <li>
                            <a href="vendor-wcfm-store-list.html">
                              فهرست فروشگاه 2
                            </a>
                          </li>
                          <li>
                            <a href="vendor-wcmp-store-list.html">
                              فهرست فروشگاه 3
                            </a>
                          </li>
                          <li>
                            <a href="vendor-wc-store-list.html">
                              فهرست فروشگاه 4
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="vendor-dokan-store.html">فروشگاه فروشنده </a>
                        <ul>
                          <li>
                            <a href="vendor-dokan-store.html">
                              فروشگاه فروشنده 1
                            </a>
                          </li>
                          <li>
                            <a href="vendor-wcfm-store-product-grid.html">
                              فروشگاه فروشنده 2
                            </a>
                          </li>
                          <li>
                            <a href="vendor-wcmp-store-product-grid.html">
                              فروشگاه فروشنده 3
                            </a>
                          </li>
                          <li>
                            <a href="vendor-wc-store-product-grid.html">
                              فروشگاه فروشنده 4
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="demo15-shop.html">فروشگاه </a>

                    <ul className="megamenu">
                      <li>
                        <h4 className="menu-title">صفحات فروشگاه </h4>
                        <ul>
                          <li>
                            <a href="shop-banner-sidebar.html">
                              بنر با نوار کناری
                            </a>
                          </li>
                          <li>
                            <a href="shop-boxed-banner.html">بنر باکسی </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-banner.html">
                              بنر تمام عرض{" "}
                            </a>
                          </li>
                          <li>
                            <a href="shop-horizontal-filter.html">
                              فیلتر افقی{" "}
                              <span className="tip tip-hot">داغ </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-off-canvas.html">
                              بدون نوار کناری{" "}
                              <span className="tip tip-new">جدید </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-infinite-scroll.html">
                              {" "}
                              اسکرول بی نهایت آژاکس
                            </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">سایدبار چپ </a>
                          </li>
                          <li>
                            <a href="shop-both-sidebar.html">
                              هر دو نوار کناری{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="menu-title">چیدمان فروشگاه </h4>
                        <ul>
                          <li>
                            <a href="shop-grid-3cols.html">3 حالت ستون ها </a>
                          </li>
                          <li>
                            <a href="shop-grid-4cols.html">4 حالت ستون ها </a>
                          </li>
                          <li>
                            <a href="shop-grid-5cols.html">5 حالت ستون ها </a>
                          </li>
                          <li>
                            <a href="shop-grid-6cols.html">6 حالت ستون ها </a>
                          </li>
                          <li>
                            <a href="shop-grid-7cols.html">7 حالت ستون ها </a>
                          </li>
                          <li>
                            <a href="shop-grid-8cols.html">8 حالت ستون ها </a>
                          </li>
                          <li>
                            <a href="shop-list.html">حالت فهرست</a>
                          </li>
                          <li>
                            <a href="shop-list-sidebar.html">
                              حالت فهرست با نوار کناری
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="menu-title">صفحات محصول </h4>
                        <ul>
                          <li>
                            <a href="product-variable.html">محصول متغیر </a>
                          </li>
                          <li>
                            <a href="product-featured.html">ویژه و جذاب </a>
                          </li>
                          <li>
                            <a href="product-accordion.html">
                              داده ها در آکاردئون
                            </a>
                          </li>
                          <li>
                            <a href="product-section.html">
                              داده ها در بخش ها{" "}
                            </a>
                          </li>
                          <li>
                            <a href="product-swatch.html">نمونه تصویر </a>
                          </li>
                          <li>
                            <a href="product-extended.html">اطلاعات گسترده </a>
                          </li>
                          <li>
                            <a href="product-without-sidebar.html">
                              بدون نوار کناری{" "}
                            </a>
                          </li>
                          <li>
                            <a href="product-video.html">
                              360<sup>درجه </sup> ویدئو{" "}
                              <span className="tip tip-new">جدید </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="menu-title">چیدمان محصولات </h4>
                        <ul>
                          <li>
                            <a href="product-default.html">
                              پیشفرض <span className="tip tip-hot">داغ </span>
                            </a>
                          </li>
                          <li>
                            <a href="product-vertical.html">شست عمودی </a>
                          </li>
                          <li>
                            <a href="product-grid.html">تصاویر شبکه ای </a>
                          </li>
                          <li>
                            <a href="product-masonry.html">ساختمانی </a>
                          </li>
                          <li>
                            <a href="product-gallery.html">گالری </a>
                          </li>
                          <li>
                            <a href="product-sticky-info.html">
                              اطلاعات چسبناک{" "}
                            </a>
                          </li>
                          <li>
                            <a href="product-sticky-thumb.html">
                              تصویر چسبناک{" "}
                            </a>
                          </li>
                          <li>
                            <a href="product-sticky-both.html">هردو چسبناک </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">صفحات </a>
                    <ul>
                      <li>
                        <a href="about-us.html">درباره ما </a>
                      </li>
                      <li>
                        <a href="become-a-vendor.html">فروشنده شوید </a>
                      </li>
                      <li>
                        <a href="contact-us.html">تماس با ما </a>
                      </li>
                      <li>
                        <a href="faq.html">نقل و قل </a>
                      </li>
                      <li>
                        <a href="error-404.html">ارور 404</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">به زودی </a>
                      </li>
                      <li>
                        <a href="wishlist.html">علاقه مندیها </a>
                      </li>
                      <li>
                        <a href="cart.html">سبد خرید </a>
                      </li>
                      <li>
                        <a href="checkout.html">پرداخت </a>
                      </li>
                      <li>
                        <a href="my-account.html">حساب من </a>
                      </li>
                      <li>
                        <a href="compare.html">مقایسه </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">بلاگ </a>
                    <ul>
                      <li>
                        <a href="blog.html">کلاسیک </a>
                      </li>
                      <li>
                        <a href="blog-listing.html">لیستی </a>
                      </li>
                      <li>
                        <a href="blog-grid-3cols.html">گرید </a>
                        <ul>
                          <li>
                            <a href="blog-grid-2cols.html">شبکه 2 ستون</a>
                          </li>
                          <li>
                            <a href="blog-grid-3cols.html">شبکه 3 ستون</a>
                          </li>
                          <li>
                            <a href="blog-grid-4cols.html">شبکه 4ستون</a>
                          </li>
                          <li>
                            <a href="blog-grid-sidebar.html">
                              سایدبار شبکه ای{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-masonry-3cols.html">ساختمانی </a>
                        <ul>
                          <li>
                            <a href="blog-masonry-2cols.html">
                              ساختمانی 2 ستون{" "}
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-3cols.html">
                              ساختمانی 3 ستون{" "}
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-4cols.html">
                              ساختمانی 4ستون{" "}
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-sidebar.html">
                              نوار کناری ساختمانی{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-mask-grid.html">ماسک </a>
                        <ul>
                          <li>
                            <a href="blog-mask-grid.html">ماسک وبلاگ گرید </a>
                          </li>
                          <li>
                            <a href="blog-mask-masonry.html">
                              ماسک وبلاگ ساختمانی{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="post-single.html">تک نوشته </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="elements.html">المنت ها </a>
                    <ul>
                      <li>
                        <a href="element-accordions.html">آکاردئون </a>
                      </li>
                      <li>
                        <a href="element-alerts.html">هشدار و اعلان</a>
                      </li>
                      <li>
                        <a href="element-blog-posts.html">پست های وبلاگ </a>
                      </li>
                      <li>
                        <a href="element-buttons.html">دکمه ها </a>
                      </li>
                      <li>
                        <a href="element-cta.html">دکمه اقدام تماس</a>
                      </li>
                      <li>
                        <a href="element-icons.html">آیکن ها </a>
                      </li>
                      <li>
                        <a href="element-icon-boxes.html">آیکن باکس </a>
                      </li>
                      <li>
                        <a href="element-instagrams.html">اینستاگرام </a>
                      </li>
                      <li>
                        <a href="element-categories.html">دسته بندی محصول </a>
                      </li>
                      <li>
                        <a href="element-products.html">محصولات </a>
                      </li>
                      <li>
                        <a href="element-tabs.html">زبانه ها </a>
                      </li>
                      <li>
                        <a href="element-testimonials.html">مشتریان </a>
                      </li>
                      <li>
                        <a href="element-titles.html">عناوین </a>
                      </li>
                      <li>
                        <a href="element-typography.html">تایپوگرافی </a>
                      </li>

                      <li>
                        <a href="element-vendors.html">فروشندگان </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">خرید وولمارت!</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right pr-0">
              <a href="#">
                <i className="w-icon-lightning mt-0"></i>
                <span>فروش فلش</span>
              </a>
              <a href="#">
                <i className="w-icon-sale"></i>
                <span>پیشنهادهای ویژه</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
