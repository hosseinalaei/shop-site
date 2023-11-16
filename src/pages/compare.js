import Footer from "@/components/Footer/Footer";
import StickyFooter from "@/components/Footer/StickyFooter";
import MobileMenu from "@/components/Menu/MobileMenu";
import Image from "next/image";

const Compare = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main">
          <div className="page-header">
            <div className="container">
              <h1 className="page-title">مقایسه کردن</h1>
            </div>
          </div>

          <nav className="breadcrumb-nav mb-2">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <Link href="demo1.html">خانه </Link>
                </li>
                <li>مقایسه کردن</li>
              </ul>
            </div>
          </nav>

          <div className="page-content mb-10 pb-2">
            <div className="container">
              <div className="compare-table">
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-products">
                  <div className="compare-col compare-field">محصول</div>
                  <div className="compare-col compare-product">
                    <Link href="#" className="btn remove-product">
                      <i className="w-icon-times-solid"></i>
                    </Link>
                    <div className="product text-center">
                      <figure className="product-media">
                        {/* <Link href="product-default.html">
                          <Image
                            src="assets/images/products/elements/1.jpg"
                            alt="Product"
                            width="228"
                            height="257"
                          />
                        </Link> */}
                        <div className="product-action-vertical">
                          <Link
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                          ></Link>
                          <Link
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                          ></Link>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h3 className="product-name">
                          <Link href="product-default.html">
                            ساعت مچی مشکی الکترونیکی
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="compare-col compare-product">
                    <Link href="#" className="btn remove-product">
                      <i className="w-icon-times-solid"></i>
                    </Link>
                    <div className="product text-center">
                      <figure className="product-media">
                        {/* <Link href="product-default.html">
                          <Image
                            src="assets/images/products/elements/2.jpg"
                            alt="Product"
                            width="228"
                            height="257"
                          />
                        </Link> */}
                        <div className="product-action-vertical">
                          <Link
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                          ></Link>
                          <Link
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                          ></Link>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h3 className="product-name">
                          <Link href="product-default.html">
                            کفش ورزشی تابستانی{" "}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="compare-col compare-product">
                    <Link href="#" className="btn remove-product">
                      <i className="w-icon-times-solid"></i>
                    </Link>
                    <div className="product text-center">
                      <figure className="product-media">
                        {/* <Link href="product-default.html">
                          <Image
                            src="assets/images/products/elements/3.jpg"
                            alt="Product"
                            width="228"
                            height="257"
                          />
                        </Link> */}
                        <div className="product-action-vertical">
                          <Link
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                          ></Link>
                          <Link
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                          ></Link>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h3 className="product-name">
                          <Link href="product-default.html">
                            ساعت طراحی جذاب
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="compare-col compare-product">
                    <Link href="#" className="btn remove-product">
                      <i className="w-icon-times-solid"></i>
                    </Link>
                    <div className="product text-center">
                      <figure className="product-media">
                        {/* <Link href="product-default.html">
                          <Image
                            src="assets/images/products/elements/4-1.jpg"
                            alt="Product"
                            width="228"
                            height="257"
                          />
                        </Link> */}
                        <div className="product-action-vertical">
                          <Link
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                          ></Link>
                          <Link
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                          ></Link>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h3 className="product-name">
                          <Link href="product-default.html">
                            موس بازی پرجمعیت
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-price">
                  <div className="compare-col compare-field">قیمت </div>
                  <div className="compare-col compare-value">
                    <div className="product-price">
                      <span className="new-price">80000 تومان </span>
                    </div>
                  </div>
                  <div className="compare-col compare-value">
                    <div className="product-price">
                      <span className="new-price">86000 تومان</span>
                      <span className="old-price">120000 تومان</span>
                    </div>
                  </div>
                  <div className="compare-col compare-value">
                    <div className="product-price">
                      <span className="new-price">30000 تومان</span>
                    </div>
                  </div>
                  <div className="compare-col compare-value">
                    <div className="product-price">
                      <span className="new-price">220000 تومان</span>
                    </div>
                  </div>
                </div>
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-availability">
                  <div className="compare-col compare-field">دسترسی</div>
                  <div className="compare-col compare-value">در انبار</div>
                  <div className="compare-col compare-value">در انبار</div>
                  <div className="compare-col compare-value">در انبار</div>
                  <div className="compare-col compare-value">در انبار</div>
                </div>
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-description">
                  <div className="compare-col compare-field">توضیحات</div>
                  <div className="compare-col compare-value">
                    <ul className="list-style-none list-type-check">
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
                  <div className="compare-col compare-value">
                    <ul className="list-style-none list-type-check">
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
                  <div className="compare-col compare-value">
                    <ul className="list-style-none list-type-check">
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
                  <div className="compare-col compare-value">
                    <ul className="list-style-none list-type-check">
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
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-reviews">
                  <div className="compare-col compare-field">
                    رتبه بندی ها و نظرات
                  </div>
                  <div className="compare-col compare-rating">
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "80%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <Link href="#" className="rating-reviews">
                        (3 نظر )
                      </Link>
                    </div>
                  </div>
                  <div className="compare-col compare-rating">
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "100%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <Link href="#" className="rating-reviews">
                        (5 نظر )
                      </Link>
                    </div>
                  </div>
                  <div className="compare-col compare-rating">
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "60%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <Link href="#" className="rating-reviews">
                        (8 نظر )
                      </Link>
                    </div>
                  </div>
                  <div className="compare-col compare-rating">
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "80%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <Link href="#" className="rating-reviews">
                        (3 نظر )
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-category">
                  <div className="compare-col compare-field">دسته </div>
                  <div className="compare-col compare-value">ساعت</div>
                  <div className="compare-col compare-value">کفش</div>
                  <div className="compare-col compare-value">ساعت مچی</div>
                  <div className="compare-col compare-value">الکترونیک</div>
                </div>
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-meta">
                  <div className="compare-col compare-field">کدها</div>
                  <div className="compare-col compare-value">MS46891344</div>
                  <div className="compare-col compare-value">MS46891389</div>
                  <div className="compare-col compare-value">MS46891349</div>
                  <div className="compare-col compare-value">MS4689158</div>
                </div>
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-color">
                  <div className="compare-col compare-field">رنگ</div>
                  <div className="compare-col compare-value">
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#ff0000" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#00ff00" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#0000ff" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#ECEC23" }}
                      title="قرمز"
                    ></span>
                  </div>
                  <div className="compare-col compare-value">
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#000000" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#C0C0C0" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#808080" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#0080C0" }}
                      title="قرمز"
                    ></span>
                  </div>
                  <div className="compare-col compare-value">
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#000000" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#95E8E8" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#FA0AF3" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#0A4BFA" }}
                      title="قرمز"
                    ></span>
                  </div>
                  <div className="compare-col compare-value">
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#000000" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#0000A0" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#42FDF9" }}
                      title="قرمز"
                    ></span>
                    <span
                      className="swatch"
                      style={{ backgroundColor: "#9BA3A4" }}
                      title="قرمز"
                    ></span>
                  </div>
                </div>
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-size">
                  <div className="compare-col compare-field">سایز</div>
                  <div className="compare-col compare-value">متوسط ، کوچک</div>
                  <div className="compare-col compare-value">متوسط ، بزرگ</div>
                  <div className="compare-col compare-value">کوچک</div>
                  <div className="compare-col compare-value">متوسط</div>
                </div>
                <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-brand">
                  <div className="compare-col compare-field">برند</div>
                  <div className="compare-col compare-value">اپل</div>
                  <div className="compare-col compare-value">New Balance</div>
                  <div className="compare-col compare-value">Node Js</div>
                  <div className="compare-col compare-value">Green Grass</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <StickyFooter />
      <Link
        id="scroll-top"
        classNameName="scroll-top"
        href="#top"
        title="بالا"
        role="button"
      >
        {" "}
        <i classNameName="w-icon-angle-up"></i>{" "}
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
      </Link>

      <MobileMenu />
    </>
  );
};

export default Compare;
