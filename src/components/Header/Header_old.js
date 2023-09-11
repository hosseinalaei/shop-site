import TopHeader from "./TopHeader";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartContext } from "@/contexts/contex";
import Modal from "../Modal/Modal";

const Header = () => {
  const [catMenu, setCatMenu] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const { cart } = useCartContext();

  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://138.201.167.230:5050/Products/product-active-categories"
      );
      const resData = await response.json();
      const categoryData = await resData.data.filter(
        (item) => item.parentId === null
      );
      const subCategory = await resData.data.filter(
        (item) => item.parentId !== null
      );
      setCatMenu(categoryData);
      setSubMenu(subCategory);
    } catch (error) {
      console.log("getCategories error", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  // const closeModal = () => {
  //   setShowModal(false);
  // };
  return (
    <header className="header">
      <TopHeader />
      <div className="header-middle">
        <div className="container-fluid">
          <div className="header-left mr-md-4">
            <a href="#" className="mobile-menu-toggle  w-icon-hamburger"></a>
            <a href="/" className="logo ml-lg-0">
              <Image src={logo} alt="logo" width="144" height="45" />
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
                    پشتیبانی
                    <span className="ls-normal">:</span>
                  </a>
                </h4>
                <a
                  href="tel:#"
                  className="phone-number font-weight-bolder ls-50"
                >
                  021-43000470
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
              <Link href="/cart" className="cart-toggle label-down link">
                <span className="cart-label d-flex flex-column justify-content-center text-right d-lg-show">
                  سبد خرید
                  <b className="cart-price d-block font-weight-bolder">
                    0 تومان{" "}
                  </b>
                </span>
                <i className="w-icon-cart">
                  <span className="cart-count">{cart.length}</span>
                </i>
              </Link>
              {/* <div className="dropdown-box">
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
              </div> */}
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
                      {catMenu?.map((item) => {
                        return (
                          <Link
                            href={`/category/${item.urlTitle}`}
                            key={item.id}
                          >
                            {item.title}
                          </Link>
                        );
                      })}

                      <ul className="megamenu">
                        <li>
                          <h4 className="menu-title">براساس برند </h4>
                          <hr className="divider" />
                          <ul>
                            {subMenu?.map((item) => {
                              return (
                                <li key={item.id}>
                                  <Link
                                    href={`/category/${item.urlTitle}/${item.id}/`}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                        <li>
                          {/* <h4 className="menu-title">براساس قیمت </h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                کمتر از ۵ میلیون
                              </a>
                            </li>
                          </ul> */}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <nav className="main-nav ml-0">
                <ul className="menu">
                  <li className="active">
                    <Link href="/">خانه </Link>
                  </li>
                  <li>
                    <Link href="/shop">فروشگاه </Link>
                    {/* <ul className="megamenu">
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
                    </ul> */}
                  </li>
                  <li>
                    <Link href="/blog">بلاگ </Link>
                    {/* <ul>
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
                    </ul> */}
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right pr-0">
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
